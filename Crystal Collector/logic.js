//Global Variables

var crystal = {
  circle: {
    name: 'Circle',
    value: 0
  },
  rectangle: {
    name: 'Rectangle',
    value: 0
  },
  tear: {
    name: 'Tear',
    value: 0
  },
  heart: {
    name: 'Heart',
    value: 0
  }
};

//Scores
var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

//Functions

var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function() {
  currentScore = 0;

  targetScore = getRandom(1, 120);

  crystal.circle.value = getRandom(1, 12);
  crystal.rectangle.value = getRandom(1, 12);
  crystal.tear.value = getRandom(1, 12);
  crystal.heart.value = getRandom(1, 12);

  $('#yourScore').html(currentScore);
  $('#targetScore').html(targetScore);

  console.log('----------------------------------------------------');
  console.log('Target Score: ' + targetScore);
  console.log(
    'Circle:  ' +
      crystal.circle.value +
      '| Rectangle: ' +
      crystal.rectangle.value +
      ' | Tear: ' +
      crystal.tear.value +
      '| Heart: ' +
      crystal.heart.value
  );
  console.log('----------------------------------------------------');
};

var addValues = function(crystal) {
  currentScore = currentScore + crystal.value;
};

$('#yourScore').html(currentScore);

console.log('your Score: ' + currentScore);

var checkWin = function() {
  if (currentScore > targetScore) {
    alert('Womp Womp, You Lost!');
    console.log('Womp Womp, You Lost!');

    lossCount++;

    $('#lossCount').html(lossCount);

    startGame();
  } else if (currentScore == targetScore) {
    alert('Congratulations! Winner!!');
    console.log('Congratulations! Winner!!');

    winCount++;
    $('#winCount').html(winCount);

    startGame();
  }
};

//Main Process
startGame();
$('#circle').click(function() {
  addValues('crystal.circle');
});
$('#rectangle').click(function() {
  addValues('crystal.rectangle');
});
$('#tear').click(function() {
  addValues('crystal.tear');
});
$('#heart').click(function() {
  addValues('crystal.heart');
});

//I have tried everything. For whatever reason, the onclick function stopped working while I finished... I have done all I could for now.
