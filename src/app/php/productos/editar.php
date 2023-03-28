<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

$editar= "UPDATE productos SET Nombre='$params->Nombre',Cantidad= '$params->Cantidad', Valor_Venta= '$params->Valor_Venta' WHERE ID_CodigoProductos= $params-> ID_CodigoProductos";

mysqli_query($conexion, $editar) or die ('No edito');

class Result {}

$response = new Result ();
$response -> resultado = 'OK';
$response -> mensaje = 'Datos modificados';

header('Content-Type: application/json');
echo json_encode($response);

?>