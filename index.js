const $ = query => document.querySelector(query);

const a = [
  [`I look up to Twenty One Pilots`,
  `Because they’re crazy talented`,
  `I admire the efficiency of a two-piece band`],

  [`But I also look at them and see a straight, white man`,
  `And his straight, white friend`,
  `Saying “If we can make it, anyone can”`,
  `And I’m sad`],

  [`I have to wonder how much of their success is due to talent`,
  `How much of it is luck`,
  `And how much of it is due to racism`,
   `Sexism`,
   `Homophobia`,
   `Transphobia`],

  [`And I think about how their music is built on top of the creativity of black Americans`],

  [`Tyler Joseph can say “This is not rap / this is not hip hop”`,
  `But saying so doesn’t make it true`,
  `Even if it were, we can thank black America for rock and roll, too`],

  [`And we can thank them for jazz`,
  `Read up on Dixieland`,
  `Then ask me how I feel about La La Land`],

  [`Something can be a great work of art and also problematic`,
  `Emblematic of the dark history of this country`,
  `Brought about by its light-skinned denizens`,
  `And highlighted, openly and gleefully, by the white nationalist in the oval office`,
  `Spouting american neo-Nazi slogans from the day he was sworn in`,
  `“America first”`],

  [`The Beatles are the greatest band of all time...`,
  `I want to tell people`,
  `I want to tell people about my favorite director`,
  `My favorite author`,
  `But then I realize they all have three things in common`],

  [`I have a bookshelf four feet wide and six feet tall`,
  `Full of books I love`,
   `Written by men`,
  `And it took me thirty years to realize this was happening`],
];

const b = [
  [`You see a white tower on a hill.`],
  [`The hill seems so tall, and the tower so far.`],
  [`There are other things around, but you can't bring yourself to see them.`],
  [`So you walk towards the hill.`],
  [`You surprise yourself. Before you know it you're at the foot of the hill and already climbing.`],
];

const left = $('#left');
const right = $('#right');
const hint = $('#hint');

let isLeft = true;
let el = isLeft ? left : right;
let poem = a;
let stanza = poem.shift();
let allowClick = true;
let hintTimeout;

const next = () => {
  if (!allowClick) {
    return;
  }

  allowClick = false;

  hint.classList.add('hidden');
  clearTimeout(hintTimeout);
  hintTimeout = setTimeout(() => {
    hint.classList.remove('hidden');
  }, 5000);

  if (!stanza.length) {
    el.innerHTML += `<br>`;
    isLeft = !isLeft;
    el = isLeft ? left : right;
    poem = isLeft ? a : b;
    stanza = poem.shift();
  }

  if (!stanza) {
    allowClick = true;
    return;
  }

  const line = stanza.shift();

  line.split(``).forEach((character, i) => {
    setTimeout(() => {
      el.innerHTML += character;
      if (i + 1 === line.length) {
        el.innerHTML += `<br>`;
        allowClick = true;
      }
    }, 50 * i);
  });
};

next(); // Reveal first line.
document.addEventListener('click', next);
