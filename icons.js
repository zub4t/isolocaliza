$(document).ready(function(){

$(".cars").click(function(){
var txt;
   var car = prompt("Qual caminhao voce quer encontrar ? ", "");

    if (car == null || car == "") {
        txt = "Nenhum Selecionado";
    } else {
        txt = car;
    } 
    console.log(txt);
    if(txt == "atego"){
            focus= 1;
        
    }else{
         if( txt == "atron"){
            focus=2;
    }if( txt == "omega"){
            focus=3;
    }
    if( txt == "none"){
            focus=4;
    }
        
}

});
    
    $("#location").keypress(function(e) {
        if(e.which == 13) {
               getRoute($("#location").val()); 
        }
    });
    
    function getRoute(x){
    calculateAndDisplayRoute(directionsService, directionsDisplay,x);
    }

      
      function calculateAndDisplayRoute(directionsService, directionsDisplay,x) {
        var destino =x;
        directionsService.route({
         origin: 'Isotech, manaus',
          destination:destino ,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            
            
     
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
}
    
});