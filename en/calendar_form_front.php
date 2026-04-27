<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calendar Form</title>
    <link rel="stylesheet" href="../style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>
    <g-tag></g-tag>
    <main-header></main-header>
    <hamburger-menu></hamburger-menu>

    <div class="calendar-form-wrapper">
        <div class="calendar-form-card">
            <h1>Add an event</h1>

            <form method="post" action="">

                <div class="form-group">
                    <label for="eventName">Name of event</label>
                    <input type="text" name="eventName" id="eventName"
                        value="<?php echo htmlspecialchars($eventName ?? ''); ?>">
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea name="description" id="description"><?php echo htmlspecialchars($description ?? ''); ?></textarea>
                </div>

                <div class="form-group">
                    <label for="eventTime">Time</label>
                    <input type="datetime-local" name="eventTime" id="eventTime">
                </div>

                <div class="form-group">
                    <label for="type">Category</label>
                    <select name="eventType" id="type">
                        <option value="sport"   <?php if (($type ?? '') == "sport")   echo "selected"; ?>>Sport</option>
                        <option value="konsert" <?php if (($type ?? '') == "konsert") echo "selected"; ?>>Concert</option>
                        <option value="moete"   <?php if (($type ?? '') == "moete")   echo "selected"; ?>>Meeting</option>
                        <option value="basar"   <?php if (($type ?? '') == "basar")   echo "selected"; ?>>Raffle</option>
                        <option value="anna"    <?php if (($type ?? '') == "anna")    echo "selected"; ?>>Other</option>
                    </select>
                </div>

                <?php if (!empty($errors)): ?>
                    <div class="error">Please fill all fields correctly.</div>
                <?php endif; ?>

                <input type="submit" name="submit" value="Submit" class="submit-btn">

            </form>
        </div>
    </div>

    <site-footer></site-footer>
    <script defer src="components.js"></script>
</body>
</html>