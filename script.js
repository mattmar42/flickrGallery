$(document).ready(function(){
$('#newSearch').hide();

 $('form').submit(function (evt) {
 	evt.preventDefault();
	var search = $('#search').val();
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	  {
	    tags: search,
	    format: "json"
	  },
	function(data) {
	  	$('#images').empty()
	    $.each(data.items, function(i,photo){
	    $("<img />").attr("src", photo.media.m).appendTo("#images");
	    
  });//ajax function end
 });//ajax end
});//on submit end


});// document ready end