window.contx='';
document.addEventListener('DOMContentLoaded', function(){
mannegerFiles();
setInterval(function(){
    centralized(focus);
    ajaxcall();
},3000);
    
function setValues(x){
    if(x[1]!=x[2] ){
             
        
        if(x[4]==1){
          if(typeof atego.getPosition() != 'undefined'){
            var old = (new google.maps.LatLng(atego.getPosition().lat(),atego.getPosition().lng()));
          } 
            console.log(' Atego position '+x[1]+' - '+x[2]);
            atego.setPosition(new google.maps.LatLng(x[1],x[2]));
            var distance = google.maps.geometry.spherical.computeDistanceBetween(old,atego.getPosition());
            Speed=x[3];


        
            
    
        }
        if(x[4]==2){
            //console.log(' Atron position '+x[1]+' - '+x[2]);
            atron.setPosition(new google.maps.LatLng(x[1],x[2]));
            console.log(atron.getPosition().lat());
        
            Speed1=x[3];
    
        }
        if(x[4]==3){
            //console.log(' Atron position '+x[1]+' - '+x[2]);
            omega.setPosition(new google.maps.LatLng(x[1],x[2]));
            console.log(omega.getPosition().lat());
        
            Speed2=x[3];
    
        }
    }
}







function  ajaxcall(){
				$.ajax({
				url: 'mostra.php?nome='+contx,
				success: function(data) {
                    console.log(data.split('T'));
                   	setValues(data.split('T'));
			 }
                }
                       );
        
        }




function  mannegerFiles(){
        $.ajax({
          url: 'scren.php',
          success: function(data) {
            ChoseFile(data.split('T'));
                    
          },error: function() {
            console.log('erro');
      }
        });
        
}

function  addOnlist(date){
        $.ajax({
          url: 'addList.php?date='+date,
          success: function(data) {                    
          }
        });
        
}

function  ChoseFile(dados){
  for (var i = dados.length - 1; i >= 0; i--) {
    if(dados[i]!=''){
      contx=dados[i];
      console.log('Meu arq é '+dados[i]);
      addOnlist(dados[i]);
      return dados[i];
    }
  }
  return '';
}

      
  });