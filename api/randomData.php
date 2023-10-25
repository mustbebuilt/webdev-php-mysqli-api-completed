<?php
require_once("../includes/config.php");
// JSON http header
header('Content-Type: application/json; charset=utf-8');
// random Film
$randFilmQuery = "SELECT * FROM Films ORDER BY RAND() LIMIT 1";
$resultRandFilm = $mysqli->query( $randFilmQuery );
$randFilmObj = $resultRandFilm->fetch_object();
$json = json_encode($randFilmObj);
echo $json;
?>