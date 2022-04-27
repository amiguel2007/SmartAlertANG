<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonalerta = json_decode(file_get_contents("php://input"));
if (!$jsonalerta) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into alertas(nombre, raza, edad) values (?,?,?)");
$resultado = $sentencia->execute([$jsonalerta->nombre, $jsonalerta->raza, $jsonalerta->edad]);
echo json_encode([
    "resultado" => $resultado,
]);
