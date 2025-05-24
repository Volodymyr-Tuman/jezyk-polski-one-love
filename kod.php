<?php
$host = "94.198.51.12";        // або IP-адреса хостингу бази
$dbname = "gs92839";
$username = "gs92839";
$password = "JoMY9KrS9C";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Помилка підключення: " . $conn->connect_error);
}

echo "Підключення успішне!";
?>
