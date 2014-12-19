$(document).ready(function () {
    $('#add-to-list').click(function() {
                console.log('clicked');
        $('ul').append('<li>test</li>');
        });
}); 