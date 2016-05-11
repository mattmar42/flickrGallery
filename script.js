$(document).ready(function(){
$('#newSearch').hide();
//on submitting user search, the following function will occur
 $('form').submit(function (evt) {
 	evt.preventDefault();
 	//Stores search context in a variable, calls it as a paramater of what tags to search for in JSON request
	var search = $('#search').val();
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	  {
	  	method: 'flickr.photosets.getphotos',
	  	per_page: '12',
	    tags: search,
	    format: "json",
	  },
	  //Removes any currently posted images in case of a second+ search, for each item parsed it creates an image attribute and appends it to the div with an id of 'images'
	function(data) {
		var images = $('#images');
	  	$('#images').empty();
	  	$(images).empty();
		    $.each(data.items, function(i,item){
				$("<img />").attr("src", item.media.m).appendTo("#images");
				if ( i === 14 ) return false;
	});//ajax function end
 });//ajax end
});//on submit end


});// document ready end