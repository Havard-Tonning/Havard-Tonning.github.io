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
</head>
<body>
    <g-tag></g-tag>
    <main-header></main-header>
    <hamburger-menu></hamburger-menu>
    <form method="post" action=""> 

    <div class="calendar-form-wrapper">
    <div class="calendar-form-card">
        <h1>Add Calendar Event</h1>
        <form method="post" action="">

            <div class="form-group">
                <label for="eventName">Name of Event</label>
                <input type="text" name="eventName" id="eventName"
                       value="<?php echo htmlspecialchars($eventName); ?>">
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea name="description" id="description"></textarea>
            </div>

            <div class="form-group">
                <label for="eventTime">Time of Event</label>
                <input type="datetime-local" name="eventTime" id="eventTime">
            </div>

            <div class="form-group">
                <label for="type">Category</label>
                <select name="eventType" id="type">
                    <option value="sport"   <?php if($type=="sport")   echo "selected"; ?>>Sport</option>
                    <option value="concert" <?php if($type=="concert") echo "selected"; ?>>Concert</option>
                    <option value="meeting" <?php if($type=="meeting") echo "selected"; ?>>Meeting</option>
                    <option value="basar"   <?php if($type=="basar")   echo "selected"; ?>>Basar</option>
                    <option value="other"   <?php if($type=="other")   echo "selected"; ?>>Other</option>
                </select>
            </div>

            <?php if (!empty($errors)): ?>
                <div class="error">Please fill in all fields correctly.</div>
            <?php endif; ?>

            <?php if ($success): ?>
                <div class="success">Event added successfully!</div>
            <?php endif; ?>

            <input type="submit" name="submit" value="Add Event" class="submit-btn">

        </form>
    </div>
</div>
    <site-footer></site-footer>
</body>
</html>