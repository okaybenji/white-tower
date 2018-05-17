const $ = query => document.querySelector(query);
const $$ = query => [].slice.call(document.querySelectorAll(query));

const sfx = new Howl({
  src: ['./sounds/sfx.webm', './sounds/sfx.mp3'],
  sprite,
});

const a = [
  [`I look up to Twenty One Pilots`,
  `Because they’re wildly talented`,
  `I admire the efficiency of a two-piece band`],

  [`But I also look at them and see a straight, white man`,
  `And his straight, white friend`,
  `Saying: <i>If&nbsp;we&nbsp;can&nbsp;make&nbsp;it,&nbsp;anyone&nbsp;can</i>`,
  `And I’m sad`],

  [`I have to wonder how much of their success is due to talent`,
  `How much of it is luck`,
  `And how much of it is due to racism`,
   `Sexism`,
   `Homophobia`,
   `Transphobia`],

  [`And I think about how their music is built on top of the creativity of black Americans`],

  [`Tyler Joseph can say <i>This&nbsp;is&nbsp;not&nbsp;rap&nbsp;/&nbsp;this&nbsp;is&nbsp;not&nbsp;hip&nbsp;hop</i>`,
  `But saying so doesn’t make it true`,
  `Even if it were, we can thank black America for rock and roll, too`],

  [`And we can thank them for jazz`,
  `Read up on Dixieland`,
  `Then ask me how I feel about La La Land`],

  [`Something can be a great work of art and also problematic`,
  `Emblematic of the dark history of this country`,
  `Brought about by its light-skinned denizens`,
  `And highlighted, openly and gleefully, by the white nationalist in the oval office`,
  `Spouting American neo-Nazi slogans from the day he was sworn in`,
  `“America first”`],

  [`I think a lot of our problems as a society come from a need to see things in black and white`,
   `We want to put every person, place, thing, idea, and feeling into a box:`,
   `This is good; this is bad`,
   `I go here; you go there`],

  [`We can make rules that feel obvious and simple`,
   `Like, <i>discrimination&nbsp;based&nbsp;on&nbsp;race&nbsp;is&nbsp;wrong</i>`,
   `We can apply these rules with a heavy hand`,
   `We can feel justified in our anger towards anyone who violates them`],

  [`Why is Colin Kaepernick so divisive?`,
   `The answer is cognitive dissonance`],

   [`“This country is good`,
   `Therefore criticizing this country is bad`,
   `If I were complicit in a racist system, that would make me bad`,
   `But I am good, so the system is not racist”`],

  [`There's no room in this thinking for subtlety`,
   `It makes us comfortable`,
   `But to take comfort in this, you must already be comfortable`,
   `The grayness of the world is a cold morning`,
   `But the warm blanket wrapped around you is black, and it is white`],

  [`I think James Damore was too comfortable at Google`,
   `I think maybe he wrapped himself up so tightly in his black-and-white blanket`,
   `That he cut off circulation to his well-paid brain`],

  [`The Beatles are the greatest band of all time...`,
  `I want to tell people`,
  `I want to tell people about my favorite director`,
  `My favorite author`,
  `But then I realize they all have three things in common`],

  [`I have a bookshelf four feet wide and six feet tall`,
  `Full of books I love`,
  `Written by men`,
  `And it took me thirty years to realize this was happening`],
  
  [`Growing up, people told me I could be anything I wanted`,
   `My 5th grade homeroom teacher said that I was going to be a star`,
   `I believed her`,
   `I swallowed the American dream whole`,
   `But even now that I've thrown it back up`,
   `I'm still under its spell`,
   `Still climbing that white tower`,
   `With its endless steps`],
  
  [`Straight, white, male, middle class`,
   `If I <i>can't</i> make it, what chance does anyone else have?`],
  
  [`Like the bigshot producer in The Disaster Artist says,`,
   `<i>Just&nbsp;because&nbsp;you&nbsp;want&nbsp;it&nbsp;doesn't&nbsp;mean&nbsp;it's&nbsp;going&nbsp;to&nbsp;happen</i>`,
   `<i>Even&nbsp;with&nbsp;the&nbsp;talent&nbsp;of&nbsp;Brando&nbsp;it's&nbsp;one&nbsp;in&nbsp;a&nbsp;million</i>`,
   `Well, Brando's talent and skin color anyway`],
  
  [`Don't tell people they can “make it”`,
   `You're setting us up for failure`,
   `Tell us we can do something we <i>actually&nbsp;have&nbsp;a&nbsp;decent&nbsp;shot&nbsp;at&nbsp;doing<i>`],
  
  [`We can do work that is fulfilling`,
   `We can do work that is cathartic`,
   `We can do work that we can share with our loved ones`,
   `Some of them might even come around to seeing things the way we do`],
  
  [`We can give opportunities to those who don't come across them so often as we do`],
  
  [`We can strip the paint off of this tower`,
   `We can show people who laid these bricks`]
];

const b = [
  [`You see a white tower on a hill.`,
  `The hill seems so tall, and the tower so far.`,
  `There are other things around, but you can't bring yourself to see them.`,
  `So you walk towards the hill.`],

  [`You surprise yourself. Before you know it you're at the foot of the hill and already climbing.`,
  `It's like you were born for this. You haven't broken a sweat.`],

  [`You close your eyes. You bring your focus to the breeze on your skin.`,
  `You look at your feet and think about nothing at all.`,
  `Every time it crosses your mind to look up, you can't believe how far you've come.`],

  [`You can see now that the tower is built up of a <i>million</i> bricks.`,
  `It doesn't yet occur to you to ponder who laid the bricks.`,
  `Who painted them.`],

  [`The closer you get, the more imposing the tower becomes.`,
  `But also, looking back, the hill doesn't seem quite so tall as it used to.`],

  [`An oak door sits at the base of the tower.`,
  `What can you do but approach it?`],

  [`You reach out and grasp the knob.`,
  `You're not sure what to expect,`,
  `But you turn it, and the door opens.`],

  [`There's not much inside the tower.`,
  `A staircase corkscrews along the walls,`,
  `&nbsp;&nbsp;&nbsp;&nbsp;Up`,
  `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and up`,
  `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and up...`],

  [`So you climb.`,
   `And once again, the climb is effortless.`,
   `You're no longer surprised that things are so easy.`,
   `You're just <i>good</i> at this.`,
   `And that's okay, you think. It's okay to take pride in your talents.`],

  [`Every so often, you pass a window.`,
   `You glance outside to gauge your progress.`,
   `There are others coming up the hill now.`,
   `It's not so easy for everyone, you can see.`,
   `But it's the same hill. The same climb. You put in the work, and so can they.`],

  [`You think about how it will feel at the top.`,
   `All these flights and you're not even winded.`,
   `It's only a matter of time now.`],

  [`It feels just like a dream.`,
   `In your dreams, you can soar as a bird.`,
   `You can flap your wings as long as you want. They'll never tire.`,
   `You can spend hours beneath the surface of the ocean.`,
   `As soon as it occurs to you how long you've held your breath,`,
   `You realize you've been breathing all this time.`],

  [`Time, time, time.`,
   `Funny thing, time.`,
   `Only goes in one direction. Never stops, never falters.`,
   `It's like you, on these stairs.`],

  [`Will the steps never end?`,
   `You've been climbing ever since you can remember`,
   `Ah well, you've come this far. No sense stopping now...`],
];

const left = $('#left .poem');
const right = $('#right .poem');
const hint = $('#hint');
const br = () => document.createElement('br');

let isLeft = true;
let el = isLeft ? left : right;
let poem = a;
let i = 0;
let j = 1;
let soundId;
let stanza = poem.shift();
let hintTimeout;

const next = () => {
  // Immediately unhide previously added words.
  $$('span').forEach((w) => {
    w.classList.remove('fade');
    w.classList.remove('hidden');
  });

  hint.classList.add('hidden');
  clearTimeout(hintTimeout);
  hintTimeout = setTimeout(() => {
    hint.classList.remove('hidden');
  }, 5000);

  isLeft ? i++ : j++;

  if (i === 19) {
    $('img').src = 'images/a2.png';
  }

  if (!stanza || !stanza.length) {
    el.appendChild(br());
    el.classList.remove('active');
    isLeft = !isLeft;
    el = isLeft ? left : right;
    poem = isLeft ? a : b;
    stanza = poem.shift();
  }

  if (!stanza) {
    if (a.length || b.length) {
      next();
    } else {
      clearTimeout(hintTimeout);
    }
    return;
  }

  sfx.stop(soundId);
  if (isLeft) { // Temporarily disable narration of story.
    soundId = sfx.play((isLeft ? 'a' + i : 'b' + j));
    sfx.stereo(isLeft ? -0.5 : 0.5, soundId);
  }
  el.classList.add('active');
  const line = document.createElement('div');
  el.appendChild(line);

  const words = stanza.shift().split(' ');
  words.forEach((word, i) => {
    const timePerWord = 150;
    const wordSpan = document.createElement('span');

    wordSpan.classList.add('hidden');
    wordSpan.innerHTML = word + ' ';
    line.appendChild(wordSpan);

    setTimeout(() => {
      if (wordSpan.classList.contains('hidden')) {
        wordSpan.classList.remove('hidden');
        wordSpan.classList.add('fade');
      }
    }, timePerWord * i);

    // Scroll to bottom.
    el.scrollTop = el.scrollHeight;
  });
};

sfx.on('load', () => {
  next(); // Reveal first line.
  document.addEventListener('click', next);
  const id = sfx.play('ambient-loop');
  sfx.volume(0.25, id);
});
