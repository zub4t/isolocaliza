 window.flagSpeed=true;
window.flagCar=true;
$(document).ready(function(){
    

                callSpeed();
                callSpeed1();
                callSpeed2();
    
    $(".drawer").hover(function(){
        $(".icon").removeClass("iconUnshow");

        $(".icon").addClass("iconShow");
        
    
           

    
    });
    
    $( ".drawer" ).mouseleave(function() {
                $(".icon").removeClass("iconShow");
                setTimeout(function(){
                      $(".chat").css({display: "none"});            
                        flagCar=true;
                }, 2500);
              
                $(".icon").addClass("iconUnshow");

        
    });

    
        $(".help").click(function(){
            if(flagSpeed){
                $(".Atego").removeClass("Speed");
                $(".Atego").removeClass("SpeedOut");

                $(".Atego").addClass("SpeedAtego");
            
                $(".Atron").removeClass("Speed");
                $(".Atron").removeClass("SpeedOut");

                $(".Atron").addClass("SpeedAtron");
            
                $(".Omega").removeClass("Speed");
                $(".Omega").removeClass("SpeedOut");

                $(".Omega").addClass("SpeedOmega");
                        flagSpeed=false; 
                    console.log(flagSpeed);
            }else{
                
                $(".Atego").removeClass("SpeedAtego");
                $(".Atego").addClass("SpeedOut");
            
                $(".Atron").removeClass("SpeedAtron");
                $(".Atron").addClass("SpeedOut");
            
                $(".Omega").removeClass("SpeedOmega");
                $(".Omega").addClass("SpeedOut");
                flagSpeed=true; 

                console.log('no else');
            }
        
         /*  if(markers.length>0){
                $(".ategoSerch").css({display:"block"});
            }else{$(".ategoSerch").css({display:"none"});}
            if(markers1.length>0){
                $(".atronSerch").css({display:"block"});
            }else{$(".atronSerch").css({display:"none"});}
            if(markers2.length>0){
                $(".omegaSerch").css({display:"block"});
            }else{$(".omegaSerch").css({display:"none"});}*/
        
        });
        
        function callSpeed(){ $(".SpeedAtron").attr('data-conteudo', Speed1+"Km/h");}
        setInterval(callSpeed,1500);
        
        function callSpeed1(){ $(".SpeedAtego").attr('data-conteudo', Speed+"Km/h");}
        setInterval(callSpeed1,1500);
    
        function callSpeed2(){ $(".SpeedOmega").attr('data-conteudo', Speed2+"Km/h");}
        setInterval(callSpeed2,1500);
    
      $(".Omega").hover(function(){
        //$(".Omega").removeClass("SpeedOmega");

        });
    
    
     
    
    $(".car").click(function(){
                    if(flagCar){
                        $(".chat").css({display: "flex"} );            
                        flagCar=false;
                    }else{
                        $(".chat").css({display: "none"});            
                        flagCar=true;
                    }
                    
                   console.log("To aqui"); });
   
    

});

