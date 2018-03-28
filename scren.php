<?php 
$valor=($_GET['valor']);
$types = array( 'txt' );
$path = '.';

$file = fopen("lista.txt","r");


$valores= explode(',',fgets($file));
$texto='';
$dir = new DirectoryIterator($path);
foreach ($dir as $fileInfo) {
    $ext = strtolower( $fileInfo->getExtension() );
    if( in_array( $ext, $types ) ){ 

    	for($i=0;$i<sizeof($valores); $i++){
    		//echo $i.' ';
    		if($fileInfo->getFilename() != $valores[$i]){
    			if($fileInfo->getFilename() !='valores.txt' && $fileInfo->getFilename() !='lista.txt')
    				$texto = $fileInfo->getFilename();
    				
    		}else{
    			echo('Nao '.$valores[$i].' ');
    		}
    	}

    	echo $texto.'<br/>';
    	$texto=' ';
    }
}











?>