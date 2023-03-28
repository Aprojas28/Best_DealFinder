<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

$editar= "UPDATE ventas SET Fo_CodigoProductos='$params->Fo_CodigoProductos', Cantidad= '$params->Cantidad', Fo_Usuario= '$params->Fo_Usuario', Subtotal= '$params->Subtotal', Total='$params->Total' WHERE ID_Ventas= $params-> ID_Ventas";

mysqli_query($conexion, $editar) or die ('No edito');

class Result {}

$response = new Result ();
$response -> resultado = 'OK';
$response -> mensaje = 'Datos modificados';

header('Content-Type: application/json');
echo json_encode($response);

?>