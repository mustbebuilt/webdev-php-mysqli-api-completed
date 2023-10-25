<?php
header("Content-Type: application/json");

// Include the configuration file to connect to the database
require_once("../includes/config.php");

// Check if the "q" parameter (search query) is provided in the GET request
if (isset($_GET['q']) && $_GET['q'] !== "") { // Check if 'q' is set and not an empty string
    $searchQuery = '%' . $_GET['q'] . '%';

    // Prepare and execute the SQL query to search for films by title
    $stmt = $mysqli->prepare("SELECT * FROM Films WHERE filmTitle LIKE ?");
    $stmt->bind_param('s', $searchQuery);
    $stmt->execute();
    $result = $stmt->get_result();

    // Initialize an array to store search results
    $searchResults = [];

    while ($row = $result->fetch_assoc()) {
        $searchResults[] = $row;
    }

    echo json_encode($searchResults);
} else {
    // If the "q" parameter is not provided or is an empty string, return an empty array
    echo json_encode([]);
}

?>
