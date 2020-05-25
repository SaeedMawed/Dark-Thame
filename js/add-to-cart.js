function displaySelectedSizeColors(list){
	
	
	
	var link = document.getElementById('add-to-cart');
    
	
	var size =  $('#size-select option:selected').val();
	var thymeleaf = document.getElementById('thymeleaf-color');
	var js = document.getElementById('js-color');
	var select = document.getElementById('js-color-select');
	select.options.length = 0;
	thymeleaf.style.display= "none";
	js.style.display= "block";
	
	var count = 0;
	var option ;
	var id ;
	for(i=0; i<list.length; i++){
		if (list[i].productDetails.size == size){
			option = document.createElement('option');
			option.value =  list[i].productDetails.color;
			option.text = list[i].productDetails.color;
			option.style.background=list[i].productDetails.color;
			select.add(option);
			if(count == 0){
				id = list[i].productDetails.id;
			}
			count++;
		}
	}
	
	
	select.options[0].selected = 'selected';
	link.setAttribute('href', '/cart/'+id+'/addCart');
	
	
}



function selectColor(stocks){
	


	var action = document.getElementById('action-cart');
	if (document.getElementById('thymeleaf-color').style.display != "none"){
		var color =  $('#thymeleaf-color-select option:selected').val();
	}
	else {
		var color =  $('#js-color-select option:selected').val();
	}
	var link = document.getElementById('add-to-cart');
	var size =  $('#size-select option:selected').val();
	
	
	var price = document.getElementById("product-price");
	
	for (i = 0 ; i < stocks.length ; i++){
		if (color === stocks[i].productDetails.color && size === stocks[i].productDetails.size){
			link.setAttribute('href', '/cart/'+stocks[i].productDetails.id+'/addCart');
			action.action = '/cart/'+stocks[i].productDetails.id+'/addCart';
			price.innerHTML = stocks[i].productDetails.price;
			console.log(action);
			console.log(stocks[i].productDetails.price);
			
			break;
		}
	}
}




function updateCart(id){
	var quantity = document.getElementById('cart-'+id).value;
	console.log(quantity);
	$.ajax({
		type : "GET",
		contentType : "application/json",
		dataType : "json",
		url : '/cart/'+id+'/update/'+quantity,
		success : function(response) {
			  if(response.status == "done"){
				  window.location.href = '/cart';
			      
			  }
			  //fire off other ajax calls
			  //$(document).ajaxStop(function() { location.reload(true); });
		},
	     error : function(e) {
	    	 if(e.status == "done"){

	    		 console.log("done");
	    	 }
	    	 else {
	    		 console.log(e.status);
	    	 }
	     }
	});
	
	

}

function deleteCart(id){
	
	$.ajax({
		type : "GET",
		contentType : "application/json",
		dataType : "json",
		url : '/cart/'+id+'/delete',
		success:function(result){
			alert('22');
		}
	});
	
	window.onload = function() {
		console.log('123');
	    if(!window.location.hash) {
	        window.location = window.location + '#loaded';
	        window.location.reload();
	    }
	}

}


