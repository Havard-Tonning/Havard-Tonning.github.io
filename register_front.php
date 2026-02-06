<!DOCTYPE html>
<html>
<head>
    <title>PHP Form</title>
</head>
<body>
    <form method="post" action="register_back.php"> 
        <h1>PHP Form</h1>

        <label for="username">Name</label><br>
        <input type="text" name="username" id="username" value="<?php echo htmlspecialchars($username); ?>"><br>
        <?php if(in_array("UserError", $errors)) echo'<div class="error">Username must be at least three characters long and must only contain English letters.<br></div>' ?>

        <label for="password">Password</label><br>
        <input type="password" name="password" id="password" value="<?php echo htmlspecialchars($password); ?>"><br>
        <?php if(in_array("PassError", $errors)) echo'<div class="error">Password must have at least eight characters long, at least three of those being digits.<br></div>' ?>

        <label for="password2">Retype password</label><br>
        <input type="password" name="password2" id="password2" value="<?php echo htmlspecialchars($password2); ?>"><br>
        <?php if(in_array("MatchError", $errors)) echo'<div class="error">Passwords don\'t match.<br></div>' ?>

        <label for="email">Email</label><br>
        <input type="email" name="email" id="email" value="<?php echo htmlspecialchars($email); ?>"><br>
        <?php if(in_array("EmailError", $errors)) echo'<div class="error">Invalid email.<br></div>' ?>

        <label for="type">Are you local or visiting</label><br>
        <select name="type" id="type">
            <option value="local" <?php if($type == "local") echo "selected"; ?>>Local</option>
            <option value="visiting" <?php if($type == "visiting") echo "selected"; ?>>Visiting</option>
        </select><br>
        <?php if(in_array("TypeError", $errors)) echo'<div class="error">You must select an option.<br></div>';

        if($localFlag == true) {
            echo "<br><label for='testQ'>Som lokal kan du legge til hendingar. Kva farge har Aldaheim?</label><br>";
            echo "<input type='text' name='testQ' id='testQ' value='".htmlspecialchars($testQ)."'><br>";
            
            if(in_array("TestError", $errors)) {
                echo '<div class="error">Feil svar.</div>';
            } elseif (!empty($testQ) && !in_array("TestError", $errors)) {
                echo '<div>Rett svar</div>';
            }
        }
        ?>
        <br>
        <input type="submit" name="submit" value="Submit Form">

        <?php if($success == true) echo'<div class="success">Registration successful</div>' ?>
    </form>
</body>
</html>