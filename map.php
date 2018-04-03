<!DOCTYPE>


<html>
    <head>
         <meta charset="UTF-8"> 
        <title>isolocaliza</title>
         <!-- SlidingMarker hides details from you - your markers are just animated automagically -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEQsqujVt5jhubQjf545HO9e2hNtR8API"></script>
    
        <script src="SlidingMarker.min.js"></script>
        <script src="markerAnimate.js"></script>    
        <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="jquery.easing.1.3.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="scrpitCss.js"></script>
        <link rel="stylesheet" type="text/css" href="hamburgers.css">
       
        <!-- we use markerAnimate to actually animate marker -->


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
        
        <!-- mobile hambunguer-->
        <button class="hamburger menu hamburger--collapse" type="button">

            <span class="hamburger-box">
                <span class="hamburger-inner" ></span>
            </span>
        </button>  
        <div class="drawer-mobile"> 
        <div class="icons-mobile"> 
            <div class="atego-mobile" onclick="centralized(1)" > </div> 
            <div class="atron-mobile" onclick="centralized(2)"> </div>
            <div class="omega-mobile" onclick="centralized(3)"> </div>
            <div class="velocidade-mobile"> </span>
        </div>


        </div>
        <div class="wraped">   
            <div class="drawer" id="drawer"> 
                <!-- drawer is where the icons shall stay --> 
                
                <a class="icon termo" value="isotech, manaus" onclick="getRoute('Termotécnica, manaus')"> </a>
                <a class="icon honda" value="honda, manaus" onclick="getRoute('honda, manaus')"> </a>
                <a class="icon philco" value="philco, manaus" onclick="getRoute('philco, manaus')"> </a>

                <div class="icon caminhao">
                <label class="radio"> <input type="radio" name="caminhao" value="atego" id="radio"> atego </label>
                <label class="radio">  <input type="radio" name="caminhao" value="atron" id="radio"> atron</label>
                <label class="radio"> <input type="radio" name="caminhao" value="omega" id="radio"> omega</label>
                </div>
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

        
        
        
        
        
        
        
        
        
                    <script type="text/javascript" src="ScrpitMap.js"></script>

    </body>

    
 <?php
    


?>
    
    
    
    
    
    
    
  
</html>




    

        
  