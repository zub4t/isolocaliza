$(document).ready(function(){
var flagDisplayDrawer = false;
$(".drawer-icon").click(function(){
    
    $(".drawer").slideToggle("slow",function(){
        if(!flagDisplayDrawer){
            flagDisplayDrawer = true;
            $(".drawer").css('display','flex');
            $(".drawer-icon").animate({top:'25%'},"1000");
            
        }else{
            $(".drawer-icon").animate({top:'3%'},"1000");
            $(".drawer").css('display','none');
            flagDisplayDrawer = false;
        }

    });
    console.log("click");
});
    
    
    
});