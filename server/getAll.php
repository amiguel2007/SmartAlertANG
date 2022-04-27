<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$sentencia = $bd->query("select id, nombre, raza, edad from alertas");
$alertas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($alertas);
