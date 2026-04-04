<!DOCTYPE html>
<html>

<head>
    <title>Registration Form</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src="index.js"></script>
    <link rel="alternate" hreflang="no" href="https://iolden.no/register_front.php" />
    <link rel="alternate" hreflang="en" href="https://iolden.no/en/register_front.php" />
    <link rel="alternate" hreflang="x-default" href="https://iolden.no/en/register_front.php" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
            <script defer src="components.js"></script>

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
                    <label for="username">Namn</label>
                    <input type="text" name="username" id="username" value="<?php echo htmlspecialchars($username); ?>">
                    <?php if (in_array("UserError", $errors)) echo '<span class="error">Brukernamn må vere minst tre karakterar langt, og kun nytte engelske karakterar.</span>'; ?>
                    <?php if (in_array("UniqueUsername", $errors)) echo '<span class="error">Brukernamn allereie tatt.</span>'; ?>
                </div>

                <div class="form-group">
                    <label for="password">Passord</label>
                    <input type="password" name="password" id="password" value="<?php echo htmlspecialchars($password); ?>">
                    <?php if (in_array("PassError", $errors)) echo '<span class="error">Passord må vere minst åtte karakterarm med tre nummer.</span>'; ?>
                </div>

                <div class="form-group">
                    <label for="password2">Gjenta passord</label>
                    <input type="password" name="password2" id="password2" value="<?php echo htmlspecialchars($password2); ?>">
                    <?php if (in_array("MatchError", $errors)) echo '<span class="error">Passorda er ulike.</span>'; ?>
                </div>

                <div class="form-group">
                    <label for="email">Epost</label>
                    <input type="email" name="email" id="email" value="<?php echo htmlspecialchars($email); ?>">
                    <?php if (in_array("EmailError", $errors)) echo '<span class="error">Ugyldig epost.</span>'; ?>
                    <?php if (in_array("UniqueEmail", $errors)) echo '<span class="error">Epost allereie i bruk.</span>'; ?>
                </div>

                <div class="form-group">
                    <label for="type">Er du lokal, eller på besøk?</label>
                    <select name="type" id="type">
                        <option value="local" <?php if ($type == "local") echo "selected"; ?>>Lokal</option>
                        <option value="visiting" <?php if ($type == "visiting") echo "selected"; ?>>På besøk</option>
                    </select>
                    <?php if (in_array("TypeError", $errors)) echo '<span class="error">Du må velge eit alternativ.</span>'; ?>
                </div>

                <?php if ($localFlag == true): ?>
                    <div class="form-group">
                        <label for="testQ">Som lokal kan du legge til hendingar. Kva farge har Aldaheim?</label>
                        <input type="text" name="testQ" id="testQ" value="<?php echo htmlspecialchars($testQ); ?>">
                        <?php if (in_array("TestError", $errors)): ?>
                            <span class="error">Feil svar.</span>
                        <?php elseif (!empty($testQ) && !in_array("TestError", $errors)): ?>
                            <span class="test-answer-correct">Rett svar ✓</span>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>

                <input type="submit" name="submit" value="Send skjema" class="submit-btn">

                <?php if ($success == true) echo '<div class="success">Vellukka registrering!</div>'; ?>

            </form>
        </div>
        <a href="login_back.php" class="other-btn">Har du allereie ein konto? Logg inn her.</a>
    </div>
</body>

</html>