var marginLeft = '280px',
    restMarginLeft = '-280px',
    marginRight = '220px',
    restMarginRight = '-220px';
    
var dashboard_top = '0px';
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var header_height = $('#header').height();




/* Start NEW Variables */
var isHeaderFullWidth = true , 
	isHeaderScrollActive = true ,
	isDashboardOpened = false,
	isDeviceWidthSmall; // get real value from below condition .

/* Style Header With Small Width */
if (width < 768){
	header_height = $('#header-sm').height();
	dashboard_top = '0';
	isDeviceWidthSmall = true;
}
else {
	isDeviceWidthSmall = false;
}

if (isDeviceWidthSmall){
	
}


/* Style Header */
if (isHeaderFullWidth){
	dashboard_top = header_height+'px';
	if (document.getElementById('sideMenu') != null){
    	document.getElementById('sideMenu').style.top = dashboard_top;
    }
	
}
else {
	dashboard_top = '0px';
	if (document.getElementById('sideMenu') != null){
    	document.getElementById('sideMenu').style.top = dashboard_top;
    }
}

/* Style Scroll Effect */ 
if (isHeaderScrollActive){
	$(document).scroll(function() {
	    var y = $(this).scrollBottom();
	    var x = Document.getElementById('filter-btn-container');
	    if (y > 800) {
	        x.style.display = "block";
	    } else {
	        $('.filter-btn-container').fadeOut();
	    }
	});

	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	    var currentScrollPos = window.pageYOffset;
	    if (prevScrollpos > currentScrollPos) {
	        document.getElementById("header").style.top = "0";
	        document.getElementById("header-sm").style.top = "0";
	        var x = document.getElementById("filter-bar");
	        if (x != null) {
	            document.getElementById("filter-bar").style.top = "65px";
	            document.getElementById("search-container").style.top = "80px";
	            
	        }
	        if (document.getElementById('sideMenu') != null){
	        	document.getElementById('sideMenu').style.top = "65px";
	        }


	    } 
	    else {
	        document.getElementById("header").style.top = "-65px";
	        document.getElementById("header-sm").style.top = "-65px";
	        var x = document.getElementById("filter-bar");
	        if (x != null) {
	            document.getElementById("filter-bar").style.top = "0";
	            document.getElementById("search-container").style.top = "-500px";
	        }
	        if (document.getElementById('sideMenu') != null){
	        	document.getElementById('sideMenu').style.top = "0";
	        }

	    }

	    prevScrollpos = currentScrollPos;
	}
	
}




/* Style Dashboard */
if (isDashboardOpened){
		openDashboard();
}





/* END NEW Variables */
	
	

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
}

function openDashboard() {
    if (document.getElementById('sideMenu') != null){
    	
    	if (!isDeviceWidthSmall){
    		document.getElementById('sideMenu').style.marginLeft = '0';
            document.getElementById('main').style.marginLeft = marginLeft;
            if (!isHeaderFullWidth){
            	document.getElementById('header').style.marginLeft = marginLeft;
            }
            document.getElementById('footer').style.marginLeft = marginLeft;
            document.getElementById("header-open-dashboard").style.display = "none";
            document.getElementById("header-close-dashboard").style.display = "block";
    	}
    	else {
    		document.getElementById('sideMenu').style.top = "0";
    	    document.getElementById('sideMenu').style.marginLeft = '0';
    	    document.getElementById('close-dashboard').style.display = 'block';
    	    document.getElementById('header-toggle-btn').style.display = 'none';
    	    document.getElementById("header-open-dashboard").style.display = "none";
    	}
    	
        
        

        //document.getElementById('close-dashboard').style.display = 'block';
        //document.getElementById('header-toggle-btn').style.display = 'none';
    }
    
}

function openDashboardWithoutMargin() {
    document.getElementById('sideMenu').style.marginLeft = '0';
    document.getElementById('close-dashboard').style.display = 'block';
    document.getElementById('header-toggle-btn').style.display = 'none';
    document.getElementById("header-open-dashboard").style.display = "none";
}

function closeDashboard() {
	
	document.getElementById('sideMenu').style.marginLeft = restMarginLeft;
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('header').style.marginLeft = '0';
    document.getElementById('footer').style.marginLeft = '0';

    document.getElementById("header-close-dashboard").style.display = "none";
    var c= document.getElementById('close-dashboard');
    if (c != null){
    	c.style.display = 'none';
    }
    var h = document.getElementById('header-toggle-btn');
    if (h != null){

        h.style.display = 'block';
    }
    var x = document.getElementById("header-open-dashboard");
    if (x != null ){
        x.style.display = "block";
    }
	
    
}

function showMenu() {
    var x = document.getElementById("main-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showShortProfile() {
    var x = document.getElementById("profile-card");
    var y = document.getElementById('profile-card-btn');

    if (y.value === "closed") {
        x.style.marginTop = '100';
        x.style.marginTop = '0';
        y.value = "open";
        document.getElementById('filter-btn').value = 'open';
        document.getElementById('filter-bar').style.marginRight = restMarginRight;
        document.getElementById('filter-btn-container').style.marginRight = '0';
        document.getElementById('main').style.marginRight = '0';
        document.getElementById('footer').style.marginRight = '0';
    } else {
        x.style.marginTop = '-525px';
        y.value = "closed";
    }
}


function showAdvancedSearch() {
    var x = document.getElementById("advance-search");
    var y = document.getElementById("advance");
    if (x.style.display === "none") {

        x.style.display = "block";
        y.value = "Hide advanced search box";
    } else {
        x.style.display = "none";
        y.value = "Show advanced search box";
    }
}

$(document).ready(function() {
    $('.search').on('keyup', function() {
        var searchTerm = $(this).val().toLowerCase();
        $('#userTbl tbody tr').each(function() {
            var lineStr = $(this).text().toLowerCase();
            if (lineStr.indexOf(searchTerm) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});



function openFilterMargin() {
    var x = document.getElementById('filter-btn');
    var y = document.getElementById('filter-btn-container');

    if (x.value === 'open') {
        x.value = 'close';
        y.style.marginRight = marginRight;
        var r = document.getElementById("profile-card");
        var z = document.getElementById('profile-card-btn');
        if (r != null ){
        	r.style.marginTop = '-525px';
        	z.value = "closed";
        } 
        document.getElementById('filter-bar').style.marginRight = '0';
        document.getElementById('main').style.marginRight = marginRight;
        document.getElementById('footer').style.marginRight = marginRight;
        closeDashboard();
    } else {
        x.value = 'open';
        document.getElementById('filter-bar').style.marginRight = restMarginRight;
        y.style.marginRight = '0';
        document.getElementById('filter-btn').style.marginRight = '0';
        document.getElementById('main').style.marginRight = '0';
        document.getElementById('footer').style.marginRight = '0';
    }
}

function openFilterWithoutMargin() {
    var x = document.getElementById('filter-btn');
    var y = document.getElementById('filter-btn-container');

    if (x.value === 'open') {
        x.value = 'close';
        y.style.marginRight = marginRight;
        document.getElementById('filter-bar').style.marginRight = '0';
        closeDashboard();
        document.getElementById('main').style.marginLeft = '0';
        document.getElementById('header').style.marginLeft = '0';
        document.getElementById('footer').style.marginLeft = '0';
    } else {
        x.value = 'open';
        document.getElementById('filter-bar').style.marginRight = restMarginRight;
        y.style.marginRight = '0';
    }
}










