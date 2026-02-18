<!DOCTYPE html>
<html>
<head>
    <title>PHP Form</title>
</head>
<body>
    <form method="post" action=""> 
        <h1>Login</h1>

        <input type="hidden" name="return" value="<?php echo htmlspecialchars($returnUrl); ?>">


        <label for="username">Name</label><br>
        <input type="text" name="username" id="username" value="<?php echo htmlspecialchars($username); ?>" required><br>

        <label for="password">Password</label><br>
        <input type="password" name="password" id="password" required><br>

        <?php 
        if($error){
            echo "<br> <div>Incorrect username or password</div>";
        }
        ?>
        <br>
        <input type="submit" name="submit" value="Submit Form">

        <?php if($success == true){echo'<div class="success">Login successful</div>'; 
        session_start();
        $_SESSION["username"] = $username;
        }
        
        
        ?>
    </form>
</body>
</html>