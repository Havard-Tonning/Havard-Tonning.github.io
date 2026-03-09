<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
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
    </div>
</body>
</html>