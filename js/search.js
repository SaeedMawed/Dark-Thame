/*
$(document).ready(function() {
    $('#mydatatable').DataTable();
});
*/


/*********************/
$(document).ready(function() {
	$('#search').autocomplete({
		//source : cities.slice(0, 3)
		/*source : function(request, response) {
	        var results = $.ui.autocomplete.filter(/search, request.term);

	        response(results.slice(0, 10));
		}*/
		source : '/test/search'
	},
	{
		autoFocus:true,
		delay:300,
		minLength:2
	});
});




$('#btnSort').click(function (){
    $('.card-deck .card').sort(function(a,b) {
        return $(a).find(".card-title").text() > $(b).find(".card-title").text() ? 1 : -1;
    }).appendTo(".card-deck");
})


/*
function products-filter() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("products-container");
    cards = cardContainer.getElementsByClassName("card");
    console.log("cards.length");
    for (i = 0; i < cards.length; i++) {
    	console.log(cards.length);
        title = cards[i].querySelector(".single-blog h2.product-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
*/

$('#search').keyup(function (){
	var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("products-container");
    cards = cardContainer.getElementsByClassName("product");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".single-blog h2.product-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
})


//$('#gender').keyup(function (){
	/*
	var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("products-container");
    cards = cardContainer.getElementsByClassName("product");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".single-blog h2.product-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
    */



//})



function gender(){
	var input, filter, cards, cardContainer, h5, title, i;
	filter = document.querySelector('input[name=gender]:checked').value;
    //input = document.getElementById("search");
    filter = filter.toUpperCase();
    if (filter == "ALL" ){
    	cardContainer = document.getElementById("products-container");
        cards = cardContainer.getElementsByClassName("product");
        for (i = 0; i < cards.length; i++) {
            title = cards[i].querySelector(".single-blog h3.product-gender");
            if (title.innerText.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "";
            }
        }
    }
    else {
    	cardContainer = document.getElementById("products-container");
        cards = cardContainer.getElementsByClassName("product");
        for (i = 0; i < cards.length; i++) {
            title = cards[i].querySelector(".single-blog h3.product-gender");
            if (title.innerText.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
    
}

function category(){
	console.log("Hello category Func")
	var input, filter, cards, cardContainer, h5, title, i;
	filter =  $('#category-select option:selected').val();
    filter = filter.toUpperCase();
    
    
    
    if (filter == "ALL" ){
    	cardContainer = document.getElementById("products-container");
        cards = cardContainer.getElementsByClassName("product");
        for (i = 0; i < cards.length; i++) {
            title = cards[i].querySelector(".single-blog h3.product-category");
            if (title.innerText.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "";
            }
        }
    }
    else {
    	cardContainer = document.getElementById("products-container");
        cards = cardContainer.getElementsByClassName("product");
        for (i = 0; i < cards.length; i++) {
            title = cards[i].querySelector(".single-blog h3.product-category");
            if (title.innerText.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}


function filterProducts(){
	var gender, category, size;
	gender = document.querySelector('input[name=gender]:checked').value.toUpperCase();
	category =  $('#category-select option:selected').val().toUpperCase();
	size =  $('#size-select option:selected').val().toUpperCase();
	
	
	var filter, cards, cardContainer, title, i;
	
	filter = category.toUpperCase();
    cardContainer = document.getElementById("products-container");
    cards = cardContainer.getElementsByClassName("product");
    
    
    
    //show all 
    for (i = 0; i < cards.length; i++) {
    	cards[i].style.display = "";
    }
    
    
    
    for (i = 0; i < cards.length; i++) {
    	// filter by category 
        titleCategory = cards[i].querySelector(".single-blog h3.product-category");
        titleGender = cards[i].querySelector(".single-blog h3.product-gender");
        titleSize = cards[i].querySelector(".single-blog h3.product-size");
        
        if (gender == "ALL"){
        	//check Category
        	if (category == "ALL"){
        		//check Price
        	}
        	else {
        		// if wasn't filtered check category
        		if (!(titleCategory.innerText.toUpperCase().indexOf(category) > -1 )) {
                    cards[i].style.display = "none";
                } 
                else {
                    //check price
                }
        		
        		
        	}
        }
        else {
        	// check Gender
        	if (!(titleGender.innerText.toUpperCase().indexOf(gender) > -1 )) {
                cards[i].style.display = "none";
            } 
            else {
                //check Category
            	if (category == "ALL"){
            		//check Price
            	}
            	else {
            		// if wasn't filtered check category
            		if (!(titleCategory.innerText.toUpperCase().indexOf(category) > -1 )) {
                        cards[i].style.display = "none";
                    } 
                    else {
                        //check price
                    }
            		
            		
            	}
            }
        	
        }
        
        
        
        /*
        if (titleCategory.innerText.toUpperCase().indexOf(category) > -1 
        		&& titleGender.innerText.toUpperCase().indexOf(category) > -1
        		&& titleSize.innerText.toUpperCase().indexOf(category) > -1) {
            cards[i].style.display = "";
        } 
        else {
            cards[i].style.display = "none";
        }
        */
        /*
        if (category == "ALL"){
        	if (!(titleCategory.innerText.toUpperCase().indexOf(category) > -1 )) {
                cards[i].style.display = "";
            } 
            else {
                cards[i].style.display = "";
            }
        }
        else {
        	if (!(titleCategory.innerText.toUpperCase().indexOf(category) > -1 )) {
                cards[i].style.display = "none";
            } 
            else {
                cards[i].style.display = "";
            }
        }
        */
        
        // filter by gender 
        
        
        // filter by size 
    }
    
    
    
}
	

