    window.focus = 4;
    function  centralized(x){
        if(x==1){      
        try{                        
            map.setCenter(atego.getPosition());
            
            infowindow.setContent("<strong>Minha velocidade atual é :</strong> <font size='3'> "+Speed+"KM/h</font>");
            infowindow.open(map, atego);
            console.log("procurando atego");
        }catch (e) {
            //alert('alvo nao encontrado');
        }
        }else{ 

            if(x==2){
                try{
                    map.setCenter(atron.getPosition());
                    infowindow.setContent("<strong>Minha velocidade atual é :</strong> <font size='3'> "+Speed1+"KM/h</font>");
                    infowindow.open(map, atron);
                    console.log("procurando atron");
                }catch(e){
                    //alert('alvo nao encontrado');
            }

            }if(x==3){    
                try{   
                    map.setCenter(omega.getPosition());
                    infowindow.setContent("<strong>Minha velocidade atual é :</strong> <font size='3'> "+Speed2+"KM/h</font>");
                    infowindow.open(map, omega);
                    
                    
                    console.log("procurando omega");
                    }catch(e){ //alert('alvo nao encontrado');
                    }   
            }
        }
        if(x==4){
    
            console.log("unfollow");
        }




    }

