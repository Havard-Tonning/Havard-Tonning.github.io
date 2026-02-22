<!-- calendar_form_front.php -->
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


    <form method="post" action=""> 
        <h1>Calendar Form</h1>

        <label for="eventName">Name of Event</label><br>
        <input type="text" name="eventName" id="eventName" value="<?php echo htmlspecialchars($eventName); ?>" required><br>

        <label for="description">Description</label><br>
        <textarea name="description" id="description" required></textarea><br>

        <label for="eventTime">Time of event</label><br>
        <input type="datetime-local" name="eventTime" id="eventTime">

        <select name="eventType" id="type">
            <option value="sport" <?php if($type == "sport") echo "selected"; ?>>Sport</option>
            <option value="concert" <?php if($type == "concert") echo "selected"; ?>>Concert</option>
            <option value="meeting" <?php if($type == "meeting") echo "selected"; ?>>Meeting</option>
            <option value="basar" <?php if($type == "basar") echo "selected"; ?>>Basar</option>
            <option value="other" <?php if($type == "other") echo "selected"; ?>>Other</option>
        </select><br>

        <br>
        <input type="submit" name="submit" value="Submit Form">

        <?php if($success == true) echo'<div class="success">Registration successful</div>' ?>
    </form>
</body>
</html>