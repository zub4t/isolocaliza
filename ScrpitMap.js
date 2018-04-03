    
    initMap();
    SlidingMarker.initializeGlobally();
    
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

    window.contx=' ';
    window.foco=4;
    mannegerFiles();



    window.atego = new google.maps.Marker({
            title:'ATEGO',
            icon:'http://isotechcameras.ddns.net/isolocaliza/png/jeep.png',
            map: map});
    window.atron= new google.maps.Marker({
            title:'ATRON',
            icon:'http://isotechcameras.ddns.net/isolocaliza/png/jeep1.png',
            map:map});
    window.omega = new google.maps.Marker({
            title:'OMEGA',
            icon:'http://isotechcameras.ddns.net/isolocaliza/png/jeep2.png',
            map:map});

  



 document.addEventListener('DOMContentLoaded', function(){
        setInterval(function(){
            //here is where the code for call the functio which will get date from the my file.
        var p;
        
                ajaxcall();
                centralized(foco);

              
            }, 3000);//
   
   
   
   });
    
    
      function drop() {
        console.log('apertei');
     
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

  
    if(x[1]!=x[2] ){
             
        
        if(x[4]==1){
            console.log(' Atego position '+x[1]+' - '+x[2]);
            atego.setPosition(new google.maps.LatLng(x[1],x[2]));
            console.log(atego.getPosition().lat());
        
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
      console.log('Meu arq e'+dados[i]);
      addOnlist(dados[i]);
      return dados[i];
    }
  }
  return '';
}




function  centralized(x){
    if(x==1){      
    try{                        
        map.setCenter(atego.getPosition());
        console.log("procurando atego");
    }catch (e) {
        //alert('alvo nao encontrado');
    }
    }else{ 

        if(x==2){
            try{
                map.setCenter(atron.getPosition());
                console.log("procurando atron");
            }catch(e){
                //alert('alvo nao encontrado');
        }

        }else    
            try{   
                map.setCenter(omega.getPosition());
                console.log("procurando omega");
                }catch(e){ //alert('alvo nao encontrado');
                }   
    }
}








  
   
function initMap() {
        console.log('iniciando');
        var uluru = {lat: -3.117034, lng: -60.025780};
        window.directionsService = new google.maps.DirectionsService;
        window.directionsDisplay = new google.maps.DirectionsRenderer;
        window.Display = new google.maps.InfoWindow;
        window.map = new google.maps.Map(document.getElementById('map'), {
            
          zoom: 14, styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ],center: uluru
        });        
        directionsDisplay.setMap(map);

    
}


 
 