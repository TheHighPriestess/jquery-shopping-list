$(document).ready(function () {
    $('#add-to-list').click(function() {
       var userInput = $("#new-list-item").val();
		$('ul').append("<li>" + userInput + "</li>");
		$('#new-list-item').val("");
        });

    $('ul').on('click','li',function(){
	$(this).toggleClass('strike');
	});

	$('ul').on('dblclick', 'li', function() {
	$(this).remove();
    });	

	});
