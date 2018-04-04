    window.flagSpeed=true;
    window.flagSpeed1=true;
    window.flagCar=true;
    window.flagDrwaer=true;
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
            console.log("entrei");
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






        $(".velocidade-mobile").click(function(){
            console.log("entrei");
            if(flagSpeed1){
                $(".Atego").removeClass("Speed");
                $(".Atego").removeClass("SpeedOut");

                $(".Atego").addClass("SpeedAtego");
            
                $(".Atron").removeClass("Speed");
                $(".Atron").removeClass("SpeedOut");

                $(".Atron").addClass("SpeedAtron");
            
                $(".Omega").removeClass("Speed");
                $(".Omega").removeClass("SpeedOut");

                $(".Omega").addClass("SpeedOmega");
                        flagSpeed1=false; 
                    console.log(flagSpeed1);
            }else{
                
                $(".Atego").removeClass("SpeedAtego");
                $(".Atego").addClass("SpeedOut");
            
                $(".Atron").removeClass("SpeedAtron");
                $(".Atron").addClass("SpeedOut");
            
                $(".Omega").removeClass("SpeedOmega");
                $(".Omega").addClass("SpeedOut");
                flagSpeed1=true; 

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
        



function AumentarVelocidade (New) { 
                setTimeout(function () {    //  call a 3s setTimeout when the loop is called
                    $(".SpeedAtego").attr('data-conteudo', New+"Km/h");
                    New++;   
                    if (New < Speed) {            //  if the counter < 10, call the loop function
                         AumentarVelocidade(New);             //  ..  again which will trigger another 
                    }                        //  ..  setTimeout()
                }, 200);
            }




function DiminuirVelocidade (New) { 
                setTimeout(function () {    //  call a 3s setTimeout when the loop is called
                    $(".SpeedAtego").attr('data-conteudo', New+"Km/h");
                    New--;   
                    if (New > Speed) {            //  if the counter < 10, call the loop function
                         DiminuirVelocidade(New);             //  ..  again which will trigger another 
                    }                        //  ..  setTimeout()
                }, 200);
            }

        function callSpeed(){ 
            var old = String($(".SpeedAtego").attr('data-conteudo')).split("K");
    
            if( typeof  $(".SpeedAtego").attr('data-conteudo') === "undefined"){
                old[0] = 0;
            }
            if(parseInt(old[0])<Speed){
                AumentarVelocidade(parseInt(old[0]));
            }else{
                DiminuirVelocidade(parseInt(old[0]));
 
            }
        }
        setInterval(callSpeed,3000);
        
        function callSpeed1(){ 
        }
        setInterval(callSpeed1,3000);
    
        function callSpeed2(){ 

        }
        setInterval(callSpeed2,3000);
    
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
   
    



    $( "#radio" ).change(function() {
        switch($(this).val()) {
            case 'atego' :
                console.log('atego selecionado');
                foco=1;
                break;
            case 'atron' :
                console.log('atron selecionado');
                foco=2;
               
                break;
            case 'omega' :
                console.log('omega selecionado');
                foco=3;
                break;
        }            
    });


    $(".hamburger").click(function(){
        $(".hamburger").toggleClass("is-active");
        if(flagDrwaer){
            $(".drawer-mobile").fadeIn(500);
            flagDrwaer = false;
        }else{

            $(".drawer-mobile").fadeOut(500);
            flagDrwaer = true;
        }

    });







});

