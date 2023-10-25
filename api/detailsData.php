<?php
require_once("../includes/config.php");
// JSON http header
header('Content-Type: application/json; charset=utf-8');
// query to one films
$getFilmID = $_GET[ 'filmID' ] ?? null;
// query to get film by filmID
$stmt = $mysqli->prepare( "SELECT * FROM Films WHERE filmID = ?" );
$stmt->bind_param( 'i', $getFilmID );
$stmt->execute();
$result = $stmt->get_result();
$obj = $result->fetch_object();
$json = json_encode($obj);
echo $json;
?>