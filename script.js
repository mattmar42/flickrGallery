$(document).ready(function(){
$('#newSearch').hide();

$('#input').submit(function(){
		var search = $('#search').val();
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	  {
	    tags: search,
	    format: "json"
	  },
	  function(data) {
	  	$('#images').empty()
	    $.each(data.items, function(i,item){
	      $("<img />").attr("src", item.media.m).appendTo("#images");
	      $('#newSearch').show();
	    });//ajax function end
	  });//ajax end
});//on submit end

$('#newSearch').click(function(){

	$('#images').empty();

});

});// document ready end