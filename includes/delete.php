<?php
include('db.php');

$id = $_POST['id'];

$sql = "DELETE FROM students WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$id]);

header("Location: ../public/index.php");
exit();
?>
