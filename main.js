const scores = [];
let gameNumber = 1;

function makeRandom(min, max) {
  let random = Math.round(Math.random() * (max - min + 1) + min);
  return random;
}
const game = {
  randomNumber: makeRandom(0, 10),
  attempts: 0,
};

function play() {
  console.log(game.randomNumber);
  game.answer = parseInt(prompt('Choisissez un chiffre entre 0 et 10'), 10);
  game.attempts++;

  if (game.answer === game.randomNumber) {
    let scorePhrase = ` Game ${gameNumber} : ${game.attempts} tries. `;
    scores.push(scorePhrase);
    alert(
      `Well done! You've tried ${game.attempts} time(s). Your scores so far: ${scores}`
    );
    gameNumber++;
    if (window.confirm('Play again ?')) {
      play();
    } else {
      alert(`Your scores : ${scores}`);
    }
  } else if (game.answer > game.randomNumber) {
    alert('Maybe you should try lower');
  } else {
    alert('Maybe you should try higher');
  }
}

play();
