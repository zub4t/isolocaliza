<?php 
$placa= ($_GET['placa']);


$name = 'valores.txt';
$file = fopen($name, 'a');
<<<<<<< HEAD
$text = $placa.'\r\n';
=======
$text = $placa."\r\n";
>>>>>>> 56bde2f8c5be70f1d9d744e0d5e286e1a3632890
fwrite($file, $text);
fclose($file);
?>
