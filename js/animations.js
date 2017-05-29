var characterLength = this.length;
var characterCount = 140;

$(document).ready(function() {
    
// $('.tweet-compose').click(function(){
//     $('.tweet-compose').animate({height:'+=50'}, 500);
// });

$('.tweet-compose').focus(function(){
    $(this).animate({ height: '+=50' }, 'slow');
}).blur(function(){
    $(this).animate({ height: '-=50' }, 'slow');
});

$('.tweet-compose').keypress(function(e) {
    if($(this).val().length >= 140) {
        e.preventDefault();
    }
    $('#char-count').text(characterCount--)
    
})

// $('.tweet-compose').keypress(function(e) {
//     $('#char-count').text(characterCount--)
//     if(characterCount < 0) {
//         characterCount = 0;
//         e.preventDefault();
//     }
// });



});



