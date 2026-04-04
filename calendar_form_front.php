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
    <link rel="stylesheet" href="style.css">
    <script defer src="https://kit.fontawesome.com/e065bf0659.js" crossorigin="anonymous"></script>
    <script defer src="index.js"></script>
        <link rel="alternate" hreflang="no" href="https://iolden.no/calendar_form_front.php" />
    <link rel="alternate" hreflang="en" href="https://iolden.no/calendar_form_front.php" />
    <link rel="alternate" hreflang="x-default" href="https://iolden.no/calendar_form_front.php" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>
    <g-tag></g-tag>
    <main-header></main-header>
    <hamburger-menu></hamburger-menu>
    <form method="post" action=""> 

    <div class="calendar-form-wrapper">
    <div class="calendar-form-card">
        <h1>Legg til hending</h1>
        <form method="post" action="">

            <div class="form-group">
                <label for="eventName">Namn på hendinga</label>
                <input type="text" name="eventName" id="eventName"
                       value="<?php echo htmlspecialchars($eventName); ?>">
            </div>

            <div class="form-group">
                <label for="description">Skildring</label>
                <textarea name="description" id="description"></textarea>
            </div>

            <div class="form-group">
                <label for="eventTime">Tidspunkt</label>
                <input type="datetime-local" name="eventTime" id="eventTime">
            </div>

            <div class="form-group">
                <label for="type">Kategori</label>
                <select name="eventType" id="type">
                    <option value="sport"   <?php if($type=="sport")   echo "selected"; ?>>Sport</option>
                    <option value="konsert" <?php if($type=="konsert") echo "selected"; ?>>Konsert</option>
                    <option value="moete" <?php if($type=="moete") echo "selected"; ?>>Møte</option>
                    <option value="basar"   <?php if($type=="basar")   echo "selected"; ?>>Basar</option>
                    <option value="anna"   <?php if($type=="anna")   echo "selected"; ?>>Anna</option>
                </select>
            </div>

            <?php if (!empty($errors)): ?>
                <div class="error">Venligst fyll ut alle felta.</div>
            <?php endif; ?>

            <?php if ($success): ?>
                <div class="success">Hending lagt til!</div>
                <?php
                header("Location: calendar_front.php");
                exit();
        ?>
            <?php endif; ?>

            <input type="submit" name="submit" value="Legg til hending" class="submit-btn">

        </form>
    </div>
</div>
    <site-footer></site-footer>
</body>
</html>