function setShortProfile() {
	$.ajax({
		type : "GET",
		contentType : "application/json",
		dataType : "json",
		url : "/home/setSession/setShortProfile"
	/*
	 * success : function (data, status) { },
	 */
	});
	/*window.onload = function() {
	    if(!window.location.hash) {
	        window.location = window.location + '#loaded';
	        window.location.reload();
	    }
	}*/
	location.reload();

}