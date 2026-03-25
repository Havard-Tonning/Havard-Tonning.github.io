let questions = [];
let currentQuestionID = null;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestions();

    const params = new URLSearchParams(window.location.search);
    if (params.get("answered") && params.get("question")) {
        currentQuestionID = parseInt(params.get("question"));
    }
});

async function loadQuestions() {
    try {
        const res  = await fetch("questions_fetch.php");
        questions  = await res.json();
        renderQuestionList();

        if (currentQuestionID) {
            const q = questions.find(q => q.id === currentQuestionID);
            if (q) openQuestion(q.id);
        }
    } catch (e) {
        document.getElementById("questionList").innerHTML =
            '<p class="error">Failed to load questions.</p>';
    }
}

async function loadAnswers(questionID) {
    const res = await fetch(`questions_fetch.php?answers=1&questionID=${questionID}`);
    return await res.json();
}

function renderQuestionList() {
    const list = document.getElementById("questionList");

    if (questions.length === 0) {
        list.innerHTML = '<p class="emptyMsg">No questions yet. Be the first to ask!</p>';
        return;
    }

    list.innerHTML = questions.map(q => `
        <div class="questionCard" onclick="openQuestion(${q.id})">
            <div class="questionCardBody">
                <h3 class="questionTitle">${escapeHTML(q.title)}</h3>
                <p class="questionSnippet">${escapeHTML(truncate(q.body, 120))}</p>
            </div>
            <div class="questionMeta">
                <span><i class="fa-solid fa-user-pen"></i> ${escapeHTML(q.username)}</span>
                <span><i class="fa-solid fa-clock"></i> ${formatDate(q.createdAt)}</span>
                <span class="answerBadge">
                    <i class="fa-solid fa-comment"></i> ${q.answerCount}
                </span>
                ${IS_MODERATOR ? `
                    <button class="deleteBtn" onclick="event.stopPropagation(); deleteQuestion(${q.id})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                ` : ''}
            </div>
        </div>
    `).join("");
}

async function openQuestion(questionID) {
    currentQuestionID = questionID;
    const q = questions.find(q => q.id === questionID);
    if (!q) return;

    const answers = await loadAnswers(questionID);

    const answersHTML = answers.length
        ? answers.map(a => `
            <div class="answerCard">
                <p class="answerBody">${escapeHTML(a.body)}</p>
                <div class="answerMeta">
                    <span><i class="fa-solid fa-user-pen"></i> ${escapeHTML(a.username)}</span>
                    <span><i class="fa-solid fa-clock"></i> ${formatDate(a.createdAt)}</span>
                    ${IS_MODERATOR ? `
                        <button class="deleteBtn" onclick="deleteAnswer(${a.id}, ${questionID})">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    ` : ''}
                </div>
            </div>
          `).join("")
        : '<p class="emptyMsg">No answers yet.</p>';

    document.getElementById("detailContent").innerHTML = `
        <div class="questionFull">
            <h2>${escapeHTML(q.title)}</h2>
            <div class="questionMeta">
                <span><i class="fa-solid fa-user-pen"></i> ${escapeHTML(q.username)}</span>
                <span><i class="fa-solid fa-clock"></i> ${formatDate(q.createdAt)}</span>
            </div>
            <p class="questionFullBody">${escapeHTML(q.body)}</p>
        </div>
        <h3 class="answersHeading">
            <i class="fa-solid fa-comments"></i>
            ${answers.length} Answer${answers.length !== 1 ? "s" : ""}
        </h3>
        ${answersHTML}
    `;

    const hiddenInput = document.getElementById("answerQuestionID");
    if (hiddenInput) hiddenInput.value = questionID;

    document.getElementById("questionList").style.display   = "none";
    document.getElementById("questionDetail").style.display = "block";
}

async function deleteQuestion(questionID) {
    if (!confirm("Delete this question and all its answers?")) return;

    const form = new FormData();
    form.append("mode", "delete_question");
    form.append("questionID", questionID);

    await fetch("questions_back.php", { method: "POST", body: form });

    questions = questions.filter(q => q.id !== questionID);
    showList();
    renderQuestionList();
}

async function deleteAnswer(answerID, questionID) {
    if (!confirm("Delete this answer?")) return;

    const form = new FormData();
    form.append("mode", "delete_answer");
    form.append("answerID", answerID);
    form.append("questionID", questionID);

    await fetch("questions_back.php", { method: "POST", body: form });

    openQuestion(questionID);
}

function showList() {
    currentQuestionID = null;
    document.getElementById("questionDetail").style.display = "none";
    document.getElementById("questionList").style.display   = "block";
    history.replaceState({}, "", window.location.pathname);
}

function openAskModal() {
    document.getElementById("askModal").style.display = "flex";
}

function closeAskModal() {
    document.getElementById("askModal").style.display = "none";
}

function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function truncate(str, max) {
    return str.length > max ? str.slice(0, max) + "…" : str;
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("no-NO", {
        day: "2-digit", month: "short", year: "numeric"
    });
}