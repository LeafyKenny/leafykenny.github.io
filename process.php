<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $selectedUserId = $_POST["user"];

    // Do something with the selected user ID
    // You can retrieve additional details from the database using the ID if needed
    // Example: SELECT * FROM users WHERE id = $selectedUserId;
}
?>
