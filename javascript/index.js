// text variables

const melvilleText = "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me."

const calvinoText = "From there, after six days and seven nights, you arrive at Zobeide, the white city, well exposed to the moon, with streets wound about themselves as in a skein. They tell this tale of its foundation: men of various nations had an identical dream. They saw a woman running at night through an unknown city; she was seen from behind, with long hair, and she was naked. They dreamed of pursuing her. As they twisted and turned, each of them lost her. After the dream, they set out in search of that city; they never found it, but they found one another; they decided to build a city like the one in the dream. In laying out the streets, each followed the course of his pursuit; at the spot where they had lost the fugitive's trail, they arranged spaces and walls differently from the dream, so she would be unable to escape again. This was the city of Zobeide, where they settled, waiting for that scene to be repeated one night. None of them, asleep or awake, ever saw the woman again. The city's streets were streets where they went to work every day, with no link any more to the dreamed chase. Which, for that matter, had long been forgotten. New men arrived from other lands, having had a dream like theirs, and in the city of Zobeide, they recognized something from the streets of the dream, and they changed the positions of arcades and stairways to resemble more closely the path of the pursued woman and so, at the spot where she had vanished, there would remain no avenue of escape. The first to arrive could not understand what drew these people to Zobeide, this ugly city, this trap."

const homerText = "Tell me, O muse, of that ingenious hero who travelled far and wide after he had sacked the famous town of Troy. Many cities did he visit, and many were the nations with whose manners and customs he was acquainted; moreover he suffered much by sea while trying to save his own life and bring his men safely home; but do what he might he could not save his men, for they perished through their own sheer folly in eating the cattle of the Sun-god Hyperion; so the god prevented them from ever reaching home. Tell me, too, about all these things, O daughter of Jove, from whatsoever source you may know them. So now all who escaped death in battle or by shipwreck had got safely home except Ulysses, and he, though he was longing to return to his wife and country, was detained by the goddess Calypso, who had got him into a large cave and wanted to marry him. But as years went by, there came a time when the gods settled that he should go back to Ithaca; even then, however, when he was among his own people, his troubles were not yet over; nevertheless all the gods had now begun to pity him except Neptune, who still persecuted him without ceasing and would not let him get home. Now Neptune had gone off to the Ethiopians, who are at the world's end, and lie in two halves, the one looking West and the other East. He had gone there to accept a hecatomb of sheep and oxen, and was enjoying himself at his festival; but the other gods met in the house of Olympian Jove, and the sire of gods and men spoke first. At that moment he was thinking of Aegisthus, who had been killed by Agamemnon's son Orestes; so he said to the other gods: 'See now, how men lay blame upon us gods for what is after all nothing but their own folly. Look at Aegisthus; he must needs make love to Agamemnon's wife unrighteously and then kill Agamemnon, though he knew it would be the death of him; for I sent Mercury to warn him not to do either of these things, inasmuch as Orestes would be sure to take his revenge when he grew up and wanted to return home. Mercury told him this in all good will but he would not listen, and now he has paid for everything in full.'"

// make variables for buttons and text areas
const addTextButton = document.querySelector('#add-text-btn');
const textArea = document.querySelector('#main-text-area');
const textButtons = document.querySelectorAll('.btn-text-choice');
const wordCountInput = document.querySelector('#text-num');
const clearTextButton = document.querySelector('#refresh-text');
const copyTextButton = document.querySelector('#copy-text');

let chosenText = null;

// functions for event listeners
function selectText() {
    console.log(this.getAttribute('data-author'));
    let newChoice = this.getAttribute('data-author');
    switch(newChoice) {
        case 'melville':
        chosenText = melvilleText;
        break;
        case 'calvino':
        chosenText = calvinoText;
        break;
        case 'homer':
        chosenText = homerText;
        break;
        default:
        chosenText = null;
    }
}

function addText() {
    if(!chosenText) {
        alert('please choose a text!');
        return;
    }
    const wordCount = wordCountInput.value;
    textArea.innerHTML = chosenText.split(' ', wordCount).join(' ');;
    wordCountInput.value = '';
}

function clearText() {
    textArea.innerHTML = '';
}

function copyText() {
    textArea.select();
    document.execCommand('copy');
}

// function myFunction() {
//     var copyText = document.getElementById("myInput");
//     copyText.select();
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
//   }

// event listeners for buttons
textButtons.forEach(button => button.addEventListener('click', selectText));

addTextButton.addEventListener('click', addText);

clearTextButton.addEventListener('click', clearText);

copyTextButton.addEventListener('click', copyText);