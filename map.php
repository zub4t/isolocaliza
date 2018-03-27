<!DOCTYPE>


<html>
    <head>
         <meta charset="UTF-8"> 
        <title>isolocaliza</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="scrpitCss.js"></script>
        <script type="text/javascript" src="scrpitMpa.js"></script>

        <script type="text/javascript" src="jquery-3.3.1.min.js"></script>

    </head>
    <body id="body">
        <div id="map" class="map">
          
        </div>
        <div class="GeneralSpeeds">
            <div class="Atego Speed">  
            </div>
             <div class="Atron Speed">
            </div>
             <div class="Omega Speed">
            </div>
        
        </div>
        
        
        <div class="wraped">   
            <div class="drawer" id="drawer"> 
                <!-- drawer is where the icons shall stay --> 
                
                <a class="icon termo" value="isotech, manaus" onclick="getRoute('Termotécnica, manaus')"> </a>
                <a class="icon honda" value="honda, manaus" onclick="getRoute('honda, manaus')"> </a>
                <a class="icon philco" value="philco, manaus" onclick="getRoute('philco, manaus')"> </a>

                
                <!-- here should be the icon for sherch the car on the map--><a class="icon car" onclick="drop()"> </a>
                <!-- here should be the icon for help the user anderstand how the plataform works--><a  class="icon help"> </a>
                <!-- here should be the icon which can customazing some preferes of the users--><a class="icon tools"> </a>
                <!-- here shloud be the icon which show for the users some statics of the cars--><a  class="icon  book"> </a>
            </div>
        </div>
        
            <div id="warnings-panel"> <div class="chat">
                <div class="ategoSerch" onclick="centralized(1)"></div>
                <div class="atronSerch" onclick="centralized(2)"></div>
                <div class="omegaSerch" onclick="centralized(3)"></div>
                </div></div>

        
        
        
        
        
        
        
        
        
        
    </body>
     <script async defer
             src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEQsqujVt5jhubQjf545HO9e2hNtR8API&callback=initMap">
    </script>
    
    
 <?php
    
if(empty($_GET['lat'])){
        $lat = 0;$lng=0;
}else{
    $lat= ($_GET['lat']);
    $lng= ($_GET['lng']);

}
//$time= ($_GET['time']);
//$date= ($_GET['date']);
//$speed= ($_GET['speed']);

if(empty($_GET['lat1'])){
        $lat1 = 0;$lng1=0;
}else{
    $lat1= ($_GET['lat1']);
    $lng1= ($_GET['lng1']);

}
//$time= ($_GET['time']);
//$date= ($_GET['date']);
//$speed= ($_GET['speed']);
    
    
if(empty($_GET['lat2'])){
        $lat2 = 0;$lng2=0;
}else{
    $lat2= ($_GET['lat2']);
    $lng2= ($_GET['lng2']);

}
//$time= ($_GET['time']);
//$date= ($_GET['date']);
//$speed= ($_GET['speed']);

echo("<script> 
    window.markers = [];
    window.markers1 = [];
    window.markers2 = [];

    window.Clocationlat=0;
    window.Clocation1lat=0;
    window.Clocation2lat=0;
 
    window.Clocationlng=0;
    window.Clocation1lng=0;
    window.Clocation2lng=0;
    
    window.Speed=0;
    window.Speed1=0;
    window.Speed2=0;
    
    window.onload = initPage;

  



function initPage(){
    window.image = 'http://localhost/adiciona/png/jeep.png';
    window.image1= 'http://localhost/adiciona/png/jeep1.png';
    window.image2= 'http://localhost/adiciona/png/jeep2.png';
    //$('.car').bind('click',drop());
 

    

}
 document.addEventListener('DOMContentLoaded', function(){
        setInterval(function(){
            //here is where the code for call the functio which will get date from the my file.
        var p;
        
                ajaxcall();
              
            }, 3000);//
   
   
   
   });
    
    
      function drop() {
        console.log('apertei');
     
      }

  

      function clearMarkers(markers) {
        console.log('LIMPANDO');
        if(markers!=null){
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }
}
    function addMarker(myLatLng){
    
        markers.push(new google.maps.Marker({
            position: myLatLng,
            title:'ADDMARKER',
            icon:image ,
            map: map
            }));
    }



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
       
function setValues(x){

   if(x[4]==1){
   
        clearMarkers(markers);
    
    }
    if(x[4]==2){
        clearMarkers(markers1);
    }
    if(x[4]==3){
        clearMarkers(markers2);
    }

            if(x[1]!=x[2] ){
             
            }
    if(x[4]==1){
    
    
    
     
                console.log('to add '+x[1]+' - '+x[2]);
                p= new google.maps.LatLng(x[1],x[2]);  
                marcador = new google.maps.Marker({
                    position:p,
                    map: map,
                    icon:image

                });
    
    
    
        markers.push(marcador);
        Speed=x[3];
    
    }
    if(x[4]==2){
    
    
    
    
     
                console.log('to add '+x[1]+' - '+x[2]);
                p= new google.maps.LatLng(x[1],x[2]);  
                marcador = new google.maps.Marker({
                    position:p,
                    map: map,
                    icon:image1

                });
    
         markers1.push(marcador);

        Speed1=x[3];
    }
    if(x[4]==3){
    
     
                console.log('to add '+x[1]+' - '+x[2]);
                p= new google.maps.LatLng(x[1],x[2]);  
                marcador = new google.maps.Marker({
                    position:p,
                    map: map,
                    icon:image2

                });
    
    
            markers2.push(marcador);

            Speed2=x[3];
    }
}

function  ajaxcall(){
				$.ajax({
				url: 'mostra.php',
				success: function(data) {
                   // console.log(data.split('T'));
                   	setValues(data.split('T'));
			 }
                }
                       );
        
        }

function  centralized(x){
    if(x==1){      
    try{                        map.setCenter(markers[markers.length -1].getPosition());
    }catch (e) {
                                alert('alvo nao encontrado');
    }
    }else{ 

        if(x==2){
        try{                    map.setCenter(markers1[markers1.length -1].getPosition());
        }catch(e){
                                alert('alvo nao encontrado');
        }

        }else    try{   map.setCenter(markers2[markers2.length -1].getPosition());
                }catch(e){ alert('alvo nao encontrado');
                }   
    }

}
  
  
  
  </script>");



?>
    
    
    
    
    
    
    
  
</html>




    

        
  