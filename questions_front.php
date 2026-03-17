<?php
session_start();
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Q&A</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/e065bf0659.js" crossorigin="anonymous"></script>
    <script src="components.js"></script>
</head>
<body>
    <main-header lang="no"></main-header>
    <hamburger-menu></hamburger-menu>

    <div class="roundedbody qa">
        <div class="marginbody">

            <div class="qaHeader">
                <h2><i class="fa-solid fa-circle-question"></i> Questions & Answers</h2>
                <?php if (isset($_SESSION['username'])): ?>
                    <button class="navButton askBtn" onclick="openAskModal()">
                        <i class="fa-solid fa-plus"></i> Ask a Question
                    </button>
                <?php endif; ?>
            </div>

            <div id="questionList" class="questionList">
                <p class="loadingMsg">Loading questions...</p>
            </div>

            <div id="questionDetail" class="questionDetail" style="display:none;">
                <button class="backBtn" onclick="showList()">
                    <i class="fa-solid fa-arrow-left"></i> Back to questions
                </button>
                <div id="detailContent"></div>


        <div class="eventModal" id="askModal" onclick="if(event.target==this) closeAskModal()">
            <div class="modalContent">
                <span class="closeModal" onclick="closeAskModal()">&times;</span>

                <?php if (isset($_SESSION['username'])): ?>
                    <h2>Ask a Question</h2>
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
                            <div class="error">Please fill in all fields.</div>
                        <?php endif; ?>
                        <?php if (($success ?? false) && ($_POST['mode'] ?? '') === 'question'): ?>
                            <div class="success">Question posted!</div>
                        <?php endif; ?>
                        <input type="submit" value="Post Question" class="submit-btn">
                    </form>

                <?php else: ?>
                    <h2><a href="login_back.php?return=questions_front.php">Log in to post a question</a></h2>
                <?php endif; ?>

            </div>
        </div>
   
    </div>
    <site-footer></site-footer>
    <script src="questions.js"></script>
</body>
</html>