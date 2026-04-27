<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add Event - iOlden</title>
    <link rel="stylesheet" href="../style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <main-header></main-header>
    <hamburger-menu></hamburger-menu>

    <div class="calendar-form-wrapper">
        <div class="calendar-form-card">
            <h1>Add an event</h1>
<form method="POST" action="calendar_form_back.php">
                <div class="form-group">
                    <label for="eventName">Name of event</label>
                    <input type="text" name="eventName" id="eventName" value="<?php echo htmlspecialchars($eventName); ?>">
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea name="description" id="description"><?php echo htmlspecialchars($description); ?></textarea>
                </div>

                <div class="form-group">
                    <label for="eventTime">Time</label>
                    <input type="datetime-local" name="eventTime" id="eventTime">
                </div>

                <div class="form-group">
                    <label for="type">Category</label>
                    <select name="eventType" id="type">
                        <option value="sport">Sport</option>
                        <option value="konsert">Concert</option>
                        <option value="moete">Meeting</option>
                        <option value="basar">Raffle</option>
                        <option value="anna">Other</option>
                    </select>
                </div>

                <?php if (!empty($errors)): ?>
                    <div class="error" style="color: red; margin-top: 10px;">
                        <?php echo implode(", ", $errors); ?>
                    </div>
                <?php endif; ?>

                <input type="submit" name="submit" value="Submit" class="submit-btn">
            </form>
        </div>
    </div>

    <site-footer></site-footer>
    <script defer src="components.js"></script>
</body>
</html>