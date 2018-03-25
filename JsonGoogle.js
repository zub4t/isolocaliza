document.addEventListener('DOMContentLoaded', function(){  
$.ajax({
          type: "POST",
          url: "[https://maps.googleapis.com/maps/api/directions/json?origin=isotech%20manaus&destination=philco%20manaus&key=AIzaSyCEQsqujVt5jhubQjf545HO9e2hNtR8API]",
          data: {      'latlng' : =41.6149395,-88.1372692  },
          complete: function(e, xhr, settings){
              switch(e.status){
                  case 500:
                     alert('500 internal server error!');
                     break;
                  case 404:
                      alert('404 Page not found!');
                     break;
                  case 401:
                      alert('401 unauthorized access');     
                     break;       
              }
          }           
        }).done(function( data ) {
            var obj = jQuery.parseJSON(data)

            if (obj.success == 1){

                  $('div#insert_html_div').html(obj.html);

            }else if (obj.error == 1){


                            }


            // etc

        });
});