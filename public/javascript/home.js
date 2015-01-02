/**
* Created with LoginMenuWithFrameTest.
* User: AngelODeath
* Date: 2015-01-02
* Time: 04:33 PM
*/

$(function() {
    var homebutton = $("a#home");
    
    homebutton.click(function() {
        console.log('Sending ajax request to /users');
        $.ajax({
            url: 'users',
            type: 'GET',
            dataType: 'text/html',
            success: function(result) {
                console.log(result);
            }
        });
    });
    
})