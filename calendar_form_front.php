<?php
session_start();
require_once 'db.php';

if (!canAddCalendarEvents()) {
    $currentPage = basename($_SERVER['PHP_SELF']);
    if (!empty($_SERVER['QUERY_STRING'])) {
        $currentPage .= '?' . $_SERVER['QUERY_STRING'];
    }
    $redirect = isset($_SESSION['username']) ? "calendar_front.php" : "login_back.php?return=" . urlencode($currentPage);
    header("Location: $redirect");
    exit();
}


if (isset($success) && $success) {
    header("Location: calendar_front.php");
    exit();
}
?>

<!DOCTYPE html>
<html>

<head>
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
            <h1>Legg til hending</h1>

            <form method="post" action="">

                <div class="form-group">
                    <label for="eventName">Namn på hendinga</label>
                    <input type="text" name="eventName" id="eventName"
                        value="<?php echo htmlspecialchars($eventName ?? ''); ?>">
                </div>

                <div class="form-group">
                    <label for="description">Skildring</label>
                    <textarea name="description" id="description"><?php echo htmlspecialchars($description ?? ''); ?></textarea>
                </div>

                <div class="form-group">
                    <label for="eventTime">Tidspunkt</label>
                    <input type="datetime-local" name="eventTime" id="eventTime">
                </div>

                <div class="form-group">
                    <label for="type">Kategori</label>
                    <select name="eventType" id="type">
                        <option value="sport" <?php if (($type ?? '') == "sport")   echo "selected"; ?>>Sport</option>
                        <option value="konsert" <?php if (($type ?? '') == "konsert") echo "selected"; ?>>Konsert</option>
                        <option value="moete" <?php if (($type ?? '') == "moete")   echo "selected"; ?>>Møte</option>
                        <option value="basar" <?php if (($type ?? '') == "basar")   echo "selected"; ?>>Basar</option>
                        <option value="anna" <?php if (($type ?? '') == "anna")    echo "selected"; ?>>Anna</option>
                    </select>
                </div>

                <?php if (!empty($errors)): ?>
                    <div class="error">Venligst fyll ut alle felta.</div>
                <?php endif; ?>

                <input type="submit" name="submit" value="Legg til hending" class="submit-btn">

            </form>
        </div>
    </div>

    <site-footer></site-footer>
    <script defer src="components.js"></script>
</body>

</html>