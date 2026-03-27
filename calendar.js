let events = [];
let viewDate = new Date();
let currentView = "calendar";
let currentEventId = null;

async function loadEvents() {
    try {
        const response = await fetch('calendar_back.php');
        const text = await response.text();  // Get raw text first *** Debug ***
        console.log("Raw response:", text);   // See what PHP returns
        events = JSON.parse(text);            // Then parse it
        render();
    } catch(err) {
        console.error("Could not load events:", err);
    }
}

function render(){
    updateHeader();

    if(currentView == "calendar")
        renderCalendar();
    else
        renderList();
}

function updateHeader(){
    document.getElementById("monthTitle").innerText = viewDate.toLocaleString('default', { month: 'long' }) + " " + viewDate.getFullYear();
}

function renderCalendar(){
    const grid = document.getElementById("calendarGrid");
    grid.innerHTML = "";

    const days = window.innerWidth < 480
        ? ["M", "T", "W", "T", "F", "S", "S"]
        : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    days.forEach(d => grid.innerHTML += `<div class="weekday">${d}</div>`);

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    let firstDay = new Date(year, month, 1).getDay();
    let startOffset = firstDay === 0 ? 6 : firstDay - 1;
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    for(let i = 0; i < startOffset; i++){
        grid.innerHTML += `<div class="day otherMonth"></div>`;
    }

    const maxVisible = window.innerWidth < 480 ? 2 : 3;

    for(let d = 1; d <= daysInMonth; d++){
        let dateString = `${year}-${String(month + 1).padStart(2, 0)}-${String(d).padStart(2, 0)}`;
        const isToday = new Date().toISOString().split('T')[0] === dateString;
        const dayEvents = events.filter(e => e.date.split(" ")[0] === dateString);

        let eventsHTML = '';
        const visible = dayEvents.slice(0, maxVisible);
        const overflow = dayEvents.length - maxVisible;

        visible.forEach(e => {
            eventsHTML += `<div class='eventItem cat-${e.category}' onclick='openModal(${e.id})'>${e.title}</div>`;
        });

        if(overflow > 0){
            eventsHTML += `<div class='eventOverflow'>+${overflow}</div>`;
        }

        grid.innerHTML += `
            <div class="day ${isToday ? 'today' : ''}">
                <span class="dayNumber ${isToday ? 'todayNumber' : ''}">${d}</span>
                <div class="eventContainer">${eventsHTML}</div>
            </div>
        `;
    }
}
    function renderList(){
        let listDiv = document.getElementById('eventList');

        listDiv.innerHTML = '';

        const filteredEvents = events.filter(e => {
            const eDate = new Date(e.date.split(" ")[0]);
            return eDate.getMonth() === viewDate.getMonth() && eDate.getFullYear() === viewDate.getFullYear();
        }).sort((a,b) => new Date(a.date) - new Date(b.date));

        if(filteredEvents.length === 0){
            listDiv.innerHTML = '<p style="text-align:center;">No events this month</p>';
            return;
        }

        filteredEvents.forEach(e=> {
            listDiv.innerHTML += `
                <div class="valgBoks" onclick="openModal(${e.id})">
                    <span>${e.date.split("-").reverse().join(".")} </span>
                    <span>${e.title}</span>
                </div>
            `
        })
    }


function setView(view){
    currentView = view;
    document.getElementById('calendarView').style.display = view === 'calendar' ? 'block' : 'none';
    document.getElementById('listView').style.display = view === 'list' ? 'block' : 'none';
    document.getElementById('tabCalendar').classList.toggle('active', view === 'calendar');
    document.getElementById('tabList').classList.toggle('active', view === 'list');
    render();
}

function moveMonth(dir){
    viewDate.setMonth(viewDate.getMonth() + dir);
    render();
}

function openModal(eventId){
    currentEventId = eventId;
    const e = events.find(item => item.id == eventId);

    if(!e)
        return;

    document.getElementById('modalTitle').innerText = e.title;
    document.getElementById('modalDate').innerText = e.date.split(" ")[0].split("-").reverse().join('.');    
    document.getElementById('modalUser').innerText = e.username;
    document.getElementById('modalDescription').innerHTML = e.description;
    document.getElementById('modalCategory').innerText = e.category;
    document.getElementById('eventModal').style.display = 'flex';
}

function closeModal(){
    document.getElementById('eventModal').style.display = 'none';
}

async function deleteCurrentEvent() {
    if (!confirm("Delete this event?")) return;

    await fetch(`calendar_back.php?id=${currentEventId}`, { method: 'DELETE' });

    closeModal();
    events = events.filter(e => e.id != currentEventId);
    render();
}


window.onload = loadEvents;
