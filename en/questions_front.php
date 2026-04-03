<?php
session_start();
ini_set('display_errors', 1);
error_reporting(E_ALL);

$currentPage = basename($_SERVER['PHP_SELF']);

if (!empty($_SERVER['QUERY_STRING'])) {
    $currentPage .= '?' . $_SERVER['QUERY_STRING'];
}

if (!function_exists('isModerator')) {
    include 'db.php';
    function getRoleNum($username) {
        $conn = createConn();
        $sql  = "SELECT RoleNum FROM Users WHERE Username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->bind_result($roleNum);
        $stmt->fetch();
        $conn->close();
        return $roleNum ?? 0;
    }
    function isModerator() {
        if (!isset($_SESSION['username'])) return false;
        return getRoleNum($_SESSION['username']) == 3;
    }
    function isLocalUser() {
        if (!isset($_SESSION['username'])) return false;
        return getRoleNum($_SESSION['username']) == 2;
    }
}

$loginLink = "login_back.php?return=" . urlencode($currentPage);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Q&A</title>
    <link rel="stylesheet" href="../style.css">
    <script src="https://kit.fontawesome.com/e065bf0659.js" crossorigin="anonymous"></script>
    <script src="components.js"></script>
</head>
<body>
    <main-header></main-header>
    <hamburger-menu></hamburger-menu>

    <div class="roundedbody qa">
        <div class="marginbody">

            <div class="qaHeader">
                <h2><i class="fa-solid fa-circle-question"></i>&nbsp; Questions and answers</h2>
                <?php if (isset($_SESSION['username'])): ?>
                    <button class="navButton askBtn" onclick="openAskModal()">
                        <i class="fa-solid fa-plus"></i> Ask a question
                    </button>
                <?php endif; ?>
            </div>

            <div id="questionList" class="questionList">
                <p class="loadingMsg">Loading questions</p>
            </div>

            <div id="questionDetail" class="questionDetail" style="display:none;">
                <button class="backBtn" onclick="showList()">
                    <i class="fa-solid fa-arrow-left"></i> Back to questions
                </button>
                <div id="detailContent"></div>

                <?php if (isset($_SESSION['username']) && isLocalUser()): ?>
                    <div class="answerFormWrapper">
                        <h3>Add an answer</h3>
                        <form method="post" action="questions_back.php">
                            <input type="hidden" name="mode" value="answer">
                            <input type="hidden" name="questionID" id="answerQuestionID" value="">
                            <div class="form-group">
                                <textarea name="answerBody" rows="4"
                                    placeholder="Skriv svar..."></textarea>
                            </div>
                            <?php if (!empty($errors) && ($_POST['mode'] ?? '') === 'answer'): ?>
                                <div class="error">Write an answer</div>
                            <?php endif; ?>
                            <input type="submit" value="Send svar" class="submit-btn">
                        </form>
                    </div>
                <?php endif; ?>
            </div>

        </div>
    </div>

    <div class="eventModal" id="askModal" onclick="if(event.target==this) closeAskModal()">
        <div class="modalContent">
            <span class="closeModal" onclick="closeAskModal()">&times;</span>
            <h2>Ask a question</h2>
            <form method="post" action="questions_back.php">
                <input type="hidden" name="mode" value="question">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title"
                        placeholder="Short, specific question title"
                        value="<?php echo htmlspecialchars($title ?? ''); ?>">
                </div>
                <div class="form-group">
                    <label for="body">Details</label>
                    <textarea name="body" id="body" rows="5"
                            placeholder="Describe your question in detail..."><?php
                        echo htmlspecialchars($body ?? '');
                    ?></textarea>
                </div>
                <?php if (!empty($errors) && ($_POST['mode'] ?? '') === 'question'): ?>
                    <div class="error">Please fill all fields</div>
                <?php endif; ?>
                <?php if (($success ?? false) && ($_POST['mode'] ?? '') === 'question'): ?>
                    <div class="success">Question submitted sucessfully.</div>
                <?php endif; ?>
                <input type="submit" value="Post Question" class="submit-btn">
            </form>
        </div>
    </div>

    <?php if (!isset($_SESSION['username'])): ?>
    <div class="login-prompt-wrapper">
        <a href="<?php echo $loginLink; ?>" class="submit-btn">
            Log in to ask questions
        </a>
        <br>
    </div>

<?php endif; ?>


    <script>
        const IS_MODERATOR = <?php echo (isset($_SESSION['username']) && isModerator()) ? 'true' : 'false'; ?>;
    </script>

    <site-footer></site-footer>
    <script src="questions.js"></script>
</body>
</html>