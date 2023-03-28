<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//$json = file_get_contents('php://input');

//$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into productos (Nombre, Cantidad, Valor_venta) values('prueba', '1', '15000')";

$ins= "insert into productos (Nombre, Cantidad, Valor_Venta) values ('$params->Nombre', '$params->Cantidad', '$params->Valor_Venta')";

mysqli_query($conexion, $ins) or die ('No inserto');

class Result {}

$response = new Result ();
$response -> resultado = 'Ok';
$response -> mensaje = 'Datos grabados';

header('Content-Type: application/json');
echo json_encode($response);

?>