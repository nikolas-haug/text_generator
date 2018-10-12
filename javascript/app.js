$('document').ready(function() {

    

    $('#add-text-btn').click(function() {
        var wordCount = $('#text-num').val();
        alert(wordCount);
        $('input').val("");
    });

});