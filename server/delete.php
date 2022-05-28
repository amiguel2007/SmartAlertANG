<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idalerta"])) {
    exit("No hay id de alerta para eliminar");
}
$idalerta = $_GET["idalerta"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM alertas WHERE id = ?");
$resultado = $sentencia->execute([$idalerta]);
echo json_encode($resultado);
