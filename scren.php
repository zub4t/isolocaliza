<?php 
//$valor=($_GET['valor']);
$types = array( 'txt' );
$path = '.';

$file = fopen("lista.txt","r");

$flag= False;
$valores= explode(',',fgets($file));
$texto='';
$dir = new DirectoryIterator($path);
foreach ($dir as $fileInfo) {
    $ext = strtolower( $fileInfo->getExtension() );
    if( in_array( $ext, $types ) ){ 
        $texto='';
        $flag=False;
    	for($i=0;$i<sizeof($valores); $i++){
    		if($fileInfo->getFilename() == $valores[$i]){
                    $flag=True;
            }
        }
                
    	if($fileInfo->getFilename() !='valores.txt' && $fileInfo->getFilename() !='lista.txt' && !$flag)
    		$texto = $fileInfo->getFilename();
    				
    	echo $texto.'T';
    	$texto=' ';
    }
}











?>