<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <script src="components.js"></script>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>
    <g-tag></g-tag>
    <main-header></main-header>
    <hamburger-menu></hamburger-menu>

    <div class="register-wrapper">
        <div class="register-card">
            <h1>Registration Form</h1>

            <form method="post" action="">

                <div class="form-group">
                    <label for="username">Name</label>
                    <input type="text" name="username" id="username" value="<?php echo htmlspecialchars($username); ?>">
                    <?php if(in_array("UserError", $errors)) echo '<span class="error">Username must be at least three characters long and must only contain English letters.</span>'; ?>
                    <?php if(in_array("UniqueUsername", $errors)) echo '<span class="error">Username is already taken.</span>'; ?>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" value="<?php echo htmlspecialchars($password); ?>">
                    <?php if(in_array("PassError", $errors)) echo '<span class="error">Password must be at least eight characters long, with at least three digits.</span>'; ?>
                </div>

                <div class="form-group">
                    <label for="password2">Retype Password</label>
                    <input type="password" name="password2" id="password2" value="<?php echo htmlspecialchars($password2); ?>">
                    <?php if(in_array("MatchError", $errors)) echo '<span class="error">Passwords don\'t match.</span>'; ?>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" value="<?php echo htmlspecialchars($email); ?>">
                    <?php if(in_array("EmailError", $errors)) echo '<span class="error">Invalid email.</span>'; ?>
                    <?php if(in_array("UniqueEmail", $errors)) echo '<span class="error">Email already in use.</span>'; ?>
                </div>

                <div class="form-group">
                    <label for="type">Are you local or visiting?</label>
                    <select name="type" id="type">
                        <option value="local" <?php if($type == "local") echo "selected"; ?>>Local</option>
                        <option value="visiting" <?php if($type == "visiting") echo "selected"; ?>>Visiting</option>
                    </select>
                    <?php if(in_array("TypeError", $errors)) echo '<span class="error">You must select an option.</span>'; ?>
                </div>

                <?php if($localFlag == true): ?>
                <div class="form-group">
                    <label for="testQ">Som lokal kan du legge til hendingar. Kva farge har Aldaheim?</label>
                    <input type="text" name="testQ" id="testQ" value="<?php echo htmlspecialchars($testQ); ?>">
                    <?php if(in_array("TestError", $errors)): ?>
                        <span class="error">Feil svar.</span>
                    <?php elseif (!empty($testQ) && !in_array("TestError", $errors)): ?>
                        <span class="test-answer-correct">Rett svar ✓</span>
                    <?php endif; ?>
                </div>
                <?php endif; ?>

                <input type="submit" name="submit" value="Submit Form" class="submit-btn">

                <?php if($success == true) echo '<div class="success">Registration successful!</div>'; ?>

            </form>
        </div>
        <a href="login_back.php" class="other-btn">Already have an account? Click here to log in.</a>
    </div>
</body>
</html>