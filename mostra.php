<?php
//ABRE O ARQUIVO TXT
$nome="valores.txt";


$linhas = explode("\n", file_get_contents($nome)); 
$flag=true;
//Ler somente o conteudo da linha [0] do array ou seja linha 1 do texto 
//Para linha "2" e so colocar [1] assim. 
$i=0;
	while($linhas[$i]==''){
		$i++;
		if(sizeof($linhas)==$i){
				$flag=false;
				break;
		}
	}
	
if($flag){
$linha_n = $linhas[$i]; 

echo($linha_n);
// Abre o arquivo e coloca o ponteiro no final 
$arquivo = fopen($nome,'r+'); 
$linha='';
$string='';
if ($arquivo) { 
	while(true) { 
		$linha = fgets($arquivo); 
		if ($linha==null) break; 

// Busca o conteudo que vai ser alterado 
if(preg_match("/$linha_n/", $linha)) { 
$string .= str_replace("$linha_n", "", $linha); 
} else { 
// Vai colocando tudo numa nova string 
$string.= $linha; 
} 
} 
// Move o ponteiro para o inicio pois o ftruncate() nao fara isso 
rewind($arquivo); 

// Apagar todo o conteudo 
ftruncate($arquivo, 0); 

// reescreve o conteudo do arquivo 

if (!fwrite($arquivo, $string)) die('Não foi possível atualizar o arquivo.'); 
str_replace('\n', '\r', $arquivo);
//echo 'Arquivo atualizado com sucesso'; 
fclose($arquivo); 
}
}

?>