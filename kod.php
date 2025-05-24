<?php
$host = "localhost";        // або IP-адреса хостингу бази
$dbname = "your_db_name";
$username = "your_db_user";
$password = "your_db_password";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Помилка підключення: " . $conn->connect_error);
}

echo "Підключення успішне!";
?>
