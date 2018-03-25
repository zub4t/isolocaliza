window.function ajaxcall(){
				$.ajax({
				url: 'mostra.php',
				success: function(data) {
				console.log(data);
			 }
                }
                       );
        
        }