<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idalerta"])) {
    exit("No hay id de alerta");
}
$idalerta = $_GET["idalerta"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select id, nombre, ubicacion, raza, edad from alertas where id = ?");
$sentencia->execute([$idalerta]);
$alerta = $sentencia->fetchObject();
echo json_encode($alerta);
