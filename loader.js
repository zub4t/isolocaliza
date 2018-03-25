
function ajax(){
        var thisForm = this;

        $.get("map.php", function(data, status){
           // alert("Data: " + data + "\nStatus: " + status);
            document.write(data);
        });

}
$(document).ready(function() {
   
    setTimeout(ajax(), 30000);
});