<?php
// Replace these with your AWS RDS database credentials
$host = "electrovers-employee";
$dbname = "EmployeeData";
$username = "admin";
$password = "passkey123";

try {
    $dbh = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    $query = "SELECT id, first_name, last_name FROM users";
    $stmt = $dbh->prepare($query);
    $stmt->execute();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<option value='{$row['id']}'>{$row['first_name']} {$row['last_name']}</option>";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
    die();
}
?>