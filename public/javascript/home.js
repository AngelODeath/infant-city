/**
* Created with LoginMenuWithFrameTest.
* User: AngelODeath
* Date: 2015-01-02
* Time: 04:33 PM
*/

$(function() {
    var homebutton = $("a#home");
    var musicbutton = $("a#music");
    
    var content_region = $('.content');
    var sidebar = $('.sidebar');
    
    homebutton.click(function() {
//         window.location = '/';
    });
    
    musicbutton.click(function() {
         $.ajax({
            url: '/content/page=music',
            type: 'GET',
            dataType: 'text/html',
            success: function(result) {
                console.log(result);
            }
        });
    });
})