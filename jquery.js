var timeoutId;
$('form input, form textarea').on('input propertychange change', function() {
    console.log('Textarea Change');
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
        // Runs 1 second (1000 ms) after the last change    
        saveToDB();
    }, 1000);
});

function saveToDB()
{
    console.log('Saving to the db');
    
    // Now show them we saved and when we did
    var d = new Date();
    $('.form-status-holder').html('Saved! Last: ' + d.toLocaleTimeString());
}