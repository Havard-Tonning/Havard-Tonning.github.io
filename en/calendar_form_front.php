<?php 
    if (!isset($_SESSION['username'])) {
        $currentPage = basename($_SERVER['PHP_SELF']);
        
        if (!empty($_SERVER['QUERY_STRING'])) {
            $currentPage .= '?' . $_SERVER['QUERY_STRING'];
        }

        header("Location: login_back.php?return=" . urlencode($currentPage));
        
        exit();
    }
?>


<!DOCTYPE html>
<html>
<head>
    <title>Calendar Form</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <script src="https://kit.fontawesome.com/e065bf0659.js" crossorigin="anonymous"></script>
    <script src="components.js"></script>
</head>
<body>
    <g-tag></g-tag>
    <main-header></main-header>
    <hamburger-menu></hamburger-menu>
    <form method="post" action=""> 

    <div class="calendar-form-wrapper">
    <div class="calendar-form-card">
        <h1>Add an event</h1>
        <form method="post" action="">

            <div class="form-group">
                <label for="eventName">Title</label>
                <input type="text" name="eventName" id="eventName"
                       value="<?php echo htmlspecialchars($eventName); ?>">
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea name="description" id="description"></textarea>
            </div>

            <div class="form-group">
                <label for="eventTime">Time</label>
                <input type="datetime-local" name="eventTime" id="eventTime">
            </div>

            <div class="form-group">
                <label for="type">Category</label>
                <select name="eventType" id="type">
                    <option value="sport"   <?php if($type=="sport")   echo "selected"; ?>>Sport</option>
                    <option value="concert" <?php if($type=="concert") echo "selected"; ?>>Konsert</option>
                    <option value="meeting" <?php if($type=="meeting") echo "selected"; ?>>Meeting</option>
                    <option value="raffle"   <?php if($type=="raffle")   echo "selected"; ?>>Raffle</option>
                    <option value="other"   <?php if($type=="other")   echo "selected"; ?>>Other</option>
                </select>
            </div>

            <?php if (!empty($errors)): ?>
                <div class="error">Please fill all fields.</div>
            <?php endif; ?>

            <?php if ($success): ?>
                <div class="success">Event added!</div>
                <?php
                header("Location: calendar_front.php");
                exit();
        ?>
            <?php endif; ?>

            <input type="submit" name="submit" value="Add event" class="submit-btn">

        </form>
    </div>
</div>
    <site-footer></site-footer>
</body>
</html>