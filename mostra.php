<?php
//ABRE O ARQUIVO TXT
$arquivo="valores.txt";
$linha = file_get_contents("valores.txt",FILE_TEXT,NULL,0,28);
    echo ($linha);

$arquivo1 = file_get_contents("valores.txt",FILE_TEXT,NULL);
$cont;
$novoconteudo = str_replace($linha, '', $arquivo1, $cont);

$gravar = fopen($arquivo, "w"); // abre o arquivo para escrita 
fwrite($gravar, $novoconteudo); // grava o arquivo novamente, mas sem a linha 
fclose($gravar); // fecha o arquivo 

?>