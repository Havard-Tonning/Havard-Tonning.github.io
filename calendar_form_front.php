<!DOCTYPE html>
<html>
<head>
    <title>Calendar Form</title>
</head>
<body>
    <?php 
        if (session_status() !== PHP_SESSION_NONE) {
            $currentPage = basename($_SERVER['PHP_SELF']); 
            echo "<a href='login_back.php?return=$currentPage'>Log in</a>";
        
        }
    
    
    
    ?>

    <form method="post" action=""> 
        <h1>Calendar Form</h1>

        <label for="eventName">Name of Event</label><br>
        <input type="text" name="eventName" id="eventNAme" value="<?php echo htmlspecialchars($eventName); ?>" required><br>

        <label for="description">Description</label><br>
        <textarea name="description" id="description" required></textarea>

        <label for="eventTime">Time of event</label>
        <input type="datetime-local" name="enventTime" id="eventTime">

        <br>
        <input type="submit" name="submit" value="Submit Form">

        <?php if($success == true) echo'<div class="success">Registration successful</div>' ?>
    </form>
</body>
</html>