<?php
header ('Access-Control-Allow-Origin: *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ('php://input');

$params = json_decode ($json);
$id = $_GET ['id'];

require("../conexion.php");

$editar = "UPDATE usuario SET usuario='$params->Usuario', nombre='$params->Nombre', clave=sha1('$params->Clave'), tipo='$params->Tipo' WHERE ID_Usuario=$id";

mysqli_query($conexion, $editar) or die ('No edito');

class Result{}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'Datos modificados';

header ('Content-Type: application/json');
echo json_encode ($response);

?>