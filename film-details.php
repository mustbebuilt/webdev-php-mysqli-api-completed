<?php
require_once("includes/config.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Film Details</title>
    <link rel="stylesheet" href="css/mobile.css" />
    <link rel="stylesheet" href="css/desktop.css" media="only screen and (min-width: 720px)" />
	<script src="js/main.js" defer></script>
	<script src="js/detailsData.js" defer></script>
	<script src="js/randomData.js" defer></script>
</head>
<body>
    <?php include("includes/header.php")?>
    <div class="mainContainer">
        <main>
            <div class="banner">
                <h2>Film Details</h2>
            </div>
            <section class="twoColumn">
                <div class="filmDetails" id="filmDetails">
                    <!-- Film details will be inserted here -->
                </div>
                <?php include("includes/sidebar.php")?>
            </section>
        </main>
    </div>
    <?php include("includes/footer.php")?>   
</body>
</html>
