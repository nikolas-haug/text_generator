$('document').ready(function() {

    var mobyText = "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me."

    var calvinoText = "From there, after six days and seven nights, you arrive at Zobeide, the white city, well exposed to the moon, with streets wound about themselves as in a skein. They tell this tale of its foundation: men of various nations had an identical dream. They saw a woman running at night through an unknown city; she was seen from behind, with long hair, and she was naked. They dreamed of pursuing her. As they twisted and turned, each of them lost her. After the dream, they set out in search of that city; they never found it, but they found one another; they decided to build a city like the one in the dream. In laying out the streets, each followed the course of his pursuit; at the spot where they had lost the fugitive's trail, they arranged spaces and walls differently from the dream, so she would be unable to escape again. This was the city of Zobeide, where they settled, waiting for that scene to be repeated one night. None of them, asleep or awake, ever saw the woman again. The city's streets were streets where they went to work every day, with no link any more to the dreamed chase. Which, for that matter, had long been forgotten. New men arrived from other lands, having had a dream like theirs, and in the city of Zobeide, they recognized something from the streets of the dream, and they changed the positions of arcades and stairways to resemble more closely the path of the pursued woman and so, at the spot where she had vanished, there would remain no avenue of escape. The first to arrive could not understand what drew these people to Zobeide, this ugly city, this trap."

    var selectedText = null;

    $('.btn-text-choice').on('click', function() {
        var newChoice = $(this).attr('data-author');
        // alert(newChoice);
        switch(newChoice) {
            case "melville":
            selectedText = mobyText;
            break;
            case "calvino":
            selectedText = calvinoText;
            break;
            default:
            selectedText = null;
        }
    });

    // $('input:radio').change(
    //     function(){
    //         if($(this).val() == 'calvino'){
    //             alert($(this).val());
    //             selectedText = calvinoText;
    //         }
    //         else{
    //             selectedText = mobyText;
    //         }
    //     }
    // ); 

    // event for selecting amount of text to add to text area
    $('#add-text-btn').click(function() {
        var wordCount = $('#text-num').val();

        if(!selectedText) {
            $('#main-text-area').val("Please select an author's text.");
            $('input').val("");
            return
        }

        var chosenText = selectedText.split(" ", wordCount).join(" ");

        $('#main-text-area').val(chosenText);

        $('input').val("");
    });

    // event for refreshing the text area
    $('#refresh-text').click(function() {
        $('#main-text-area').val("");
    });

    // get value of radio button
    // var radioInputVal = $("input[type='radio']:checked").val();
    // alert(radioInputVal);

    // $('input:radio').change(function(){
    //     var value = $("input[type='radio']:checked").val();
    //     alert("Value of Changed Radio is : " + value);
    // });

});