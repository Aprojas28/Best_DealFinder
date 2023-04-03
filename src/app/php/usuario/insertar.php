<?php
header ('Access-Control-Allow-Origin: *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ('php://input');

$params = json_decode ($json);

require ("../conexion.php");

//$ins = "insert into usuario (usuario, nombre, clave, tipo) values ('Prueba', 'prueba', sha1 ('123456'), 'Invitado')";
$ins = "insert into usuario (usuario, nombre, clave, tipo) values ('$params->Usuario', '$params->Nombre', sha1('$params->Clave'), '$params->Tipo')";

mysqli_query($conexion, $ins) or die ('no inserto');


class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>