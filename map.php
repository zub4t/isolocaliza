<!DOCTYPE>
<html>
    <head>
         <meta charset="UTF-8"> 
        <title>isolocaliza</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="scrpitMpa.js"></script>
        <script type="text/javascript" src="scrpitCss.js"></script>


    </head>
    <body>
        <div id="map">
          
        </div>
        <div class="wraped">   
            <div class="drawer" id="drawer"> 
                <!-- drawer is where the icons shall stay --> 
                
                <a href="" class="icon isotech"> </a>
                
                
                <!-- here should be the icon for sherch the car on the map--><a href="" class="icon car"> </a>
                <!-- here should be the icon for help the user anderstand how the plataform works--><a href="" class="icon help"> </a>
                <!-- here should be the icon which can customazing some preferes of the users--><a href="" class="icon tools"> </a>
                <!-- here shloud be the icon which show for the users some statics of the cars--><a href="" class="icon  book"> </a>
            </div>
        </div>
        
<?php 
$lat= ($_GET['lat']);
$lng= ($_GET['lng']);
//$time= ($_GET['time']);
//$date= ($_GET['date']);
//$speed= ($_GET['speed']);

echo(" var myLatLng = {lat: ".$lat." , lng: ".$lng."};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });");



?>

        
        
        
        
        
        
        
        
        
        
        
        
    </body>
     <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEQsqujVt5jhubQjf545HO9e2hNtR8API&callback=initMap">
    </script>
    
</html>