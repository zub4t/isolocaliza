<?php 
$date= ($_GET['date']);


$name = 'lista.txt';
$file = fopen($name, 'a');
$text = $date.',';
fwrite($file, $text);
fclose($file);
?>
