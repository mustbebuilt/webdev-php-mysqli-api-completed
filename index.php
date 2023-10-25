<?php require_once("includes/config.php"); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="css/mobile.css">
    <link rel="stylesheet" href="css/desktop.css" media="only screen and (min-width: 720px)">
	    <script src="js/main.js" defer></script>
	    <script src="js/latestData.js" defer></script>
</head>
<body>
    <?php include("includes/header.php") ?>
    <div class="mainContainer">
        <main>
            <div class="banner">
                <h2>Banner</h2>
            </div>
            <section class="homePage" id="filmList">
                <!-- Films will be inserted here using JavaScript -->
            </section>
        </main>
    </div>
    <?php include("includes/footer.php") ?>
</body>
</html>
