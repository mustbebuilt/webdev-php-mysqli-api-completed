<?php
require_once("includes/config.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SHU Films | Catalogue</title>
    <link rel="stylesheet" href="css/mobile.css" />
    <link rel="stylesheet" href="css/desktop.css" media="only screen and (min-width: 720px)" />
	    <script src="js/main.js" defer></script>
	    <script src="js/allData.js" defer></script>
		<script src="js/randomData.js" defer></script>
</head>
<body>
    <?php include("includes/header.php")?>
    <div class="mainContainer">
        <main>
            <div class="banner">
                <h2>Catalogue</h2>
            </div>
            <section class="twoColumn">
                <div class="listing">
                    <table>
                        <tr>
                            <th>Film</th>
                            <th>Certificate</th>
                            <th>Price</th>
                        </tr>
                        <tbody id="filmsTableBody">
                        </tbody>
                    </table>
                </div>
                <?php
                include("includes/sidebar.php");
                ?>
            </section>
        </main>
    </div>
    <?php include("includes/footer.php")?>   
</body>
</html>
