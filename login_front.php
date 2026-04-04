<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src="index.js"></script>
            <link rel="alternate" hreflang="no" href="https://iolden.no/login_front.php" />
    <link rel="alternate" hreflang="en" href="https://iolden.no/en/login_front.php" />
    <link rel="alternate" hreflang="x-default" href="https://iolden.no/en/login_front.php" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>
    <g-tag></g-tag>
    <main-header></main-header>
    <hamburger-menu></hamburger-menu>

    <div class="login-wrapper">
        <div class="login-card">
            <h1>Login</h1>

            <form method="post" action="">
                <input type="hidden" name="return" value="<?php echo htmlspecialchars($returnUrl); ?>">

                <?php if($error): ?>
                    <div class="error">Incorrect username or password.</div>
                <?php endif; ?>

                <div class="form-group">
                    <label for="username">Name</label>
                    <input type="text" name="username" id="username" value="<?php echo htmlspecialchars($username); ?>" required>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required>
                </div>

                <input type="submit" name="submit" value="Login" class="submit-btn">
            </form>
        </div>
        <a href="register_back.php" class="other-btn">Do not have an account? Click here to register.</a>
    </div>
</body>
</html>