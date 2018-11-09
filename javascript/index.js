// text variables

const melvilleText = "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me."

const calvinoText = "From there, after six days and seven nights, you arrive at Zobeide, the white city, well exposed to the moon, with streets wound about themselves as in a skein. They tell this tale of its foundation: men of various nations had an identical dream. They saw a woman running at night through an unknown city; she was seen from behind, with long hair, and she was naked. They dreamed of pursuing her. As they twisted and turned, each of them lost her. After the dream, they set out in search of that city; they never found it, but they found one another; they decided to build a city like the one in the dream. In laying out the streets, each followed the course of his pursuit; at the spot where they had lost the fugitive's trail, they arranged spaces and walls differently from the dream, so she would be unable to escape again. This was the city of Zobeide, where they settled, waiting for that scene to be repeated one night. None of them, asleep or awake, ever saw the woman again. The city's streets were streets where they went to work every day, with no link any more to the dreamed chase. Which, for that matter, had long been forgotten. New men arrived from other lands, having had a dream like theirs, and in the city of Zobeide, they recognized something from the streets of the dream, and they changed the positions of arcades and stairways to resemble more closely the path of the pursued woman and so, at the spot where she had vanished, there would remain no avenue of escape. The first to arrive could not understand what drew these people to Zobeide, this ugly city, this trap."

// make variables for buttons and text areas
const addTextButton = document.querySelector('#add-text-btn');
const textArea = document.querySelector('#main-text-area');
const textButtons = document.querySelectorAll('.btn-text-choice');
const wordCountInput = document.querySelector('#text-num');
const clearTextButton = document.querySelector('#refresh-text');

// functions for event listeners
function addText() {
    const wordCount = wordCountInput.value;
    chosenText = melvilleText.split(' ', wordCount).join(' ');
    textArea.innerHTML = chosenText;
    wordCountInput.value = '';
}

function selectText() {
    alert("slected!");
}

function clearText() {
    textArea.innerHTML = '';
}

textButtons.forEach(button => button.addEventListener('click', selectText));

addTextButton.addEventListener('click', addText);

clearTextButton.addEventListener('click', clearText);