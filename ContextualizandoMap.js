
setTimeout(function(){
    SlidingMarker.initializeGlobally();

/* First i will define the cars */
    window.atego = new google.maps.Marker({
            title:'ATEGO',
            icon:'png/jeep.png',
            map: map});
    window.atron= new google.maps.Marker({
            title:'ATRON',
            icon:'jeep1.png',
            map:map});
    window.omega = new google.maps.Marker({
            title:'OMEGA',
            icon:'jeep2.png',
            map:map});
/*Second i will define the Principal companys */
    var philcoLocation = { lat: -3.06923803, lng: -59.915690059} ;
       var icon = {
        url: "png/philco.png", // url
        scaledSize: new google.maps.Size(100, 100), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    window.philco = new google.maps.Marker({
            title:'plhico',
            icon:icon,
            map: map,
            position :philcoLocation,
            animation: google.maps.Animation.DROP
            
    });
    
           google.maps.event.addListener(philco, 'click', function() {
              infowindow.setContent("<strong>Está é a maldita philco </strong>");
              infowindow.open(map, this);
            });
    
    
    
    
    var termoLocation = { lat: -3.11501003, lng: -59.9514520} ;
    var icon = {
        url: "png/termo.png", // url
        scaledSize: new google.maps.Size(100, 100), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    window.termo= new google.maps.Marker({
            title:'termo',
            icon:icon,
            map:map,
            position: termoLocation,
            animation: google.maps.Animation.DROP
    });
    
    
            google.maps.event.addListener(termo, 'click', function() {
              infowindow.setContent("<strong> Entregadora de bloco </strong>");
              infowindow.open(map, this);
            });
    
    
    var isotechLocation = { lat: -3.0372510 ,lng: -59.9895000} ;
    var icon = {
        url: "png/factory.png", // url
        scaledSize: new google.maps.Size(100, 100), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    window.isotech = new google.maps.Marker({
            title:'isotech',
            icon:icon,
            map:map,
            position: isotechLocation,
            animation: google.maps.Animation.DROP
    });
    
    
            google.maps.event.addListener(isotech, 'click', function() {
              infowindow.setContent("<strong> MInha querida ISOTECH <3 </strong>");
              infowindow.open(map, this);
            });
    
 },3000);