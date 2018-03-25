<?php 
$placa= ($_GET['placa']);


$name = 'valores.txt';
$file = fopen($name, 'a');
$text = $placa;
fwrite($file, $text);
fclose($file);
?>
