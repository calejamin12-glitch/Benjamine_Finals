<?php
include('db.php');

$id = $_POST['id'];
$surname = $_POST['surname'];
$name = $_POST['name'];
$middlename = $_POST['middlename'];
$address = $_POST['address'];
$contact_number = $_POST['contact_number'];

$sql = "UPDATE students 
        SET surname = ?, name = ?, middlename = ?, address = ?, contact_number = ?
        WHERE id = ?";

$stmt = $pdo->prepare($sql);
$stmt->execute([$surname, $name, $middlename, $address, $contact_number, $id]);

header("Location: ../public/index.php");
exit();
?>
