// Player
function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

// Game
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.rules = {
    rock:     { scissors: "crushes", lizard:     "crushes" },
    paper:    { rock:      "covers", spock:    "disproves" },
    scissors: { paper:       "cuts", lizard: "decapitates" },
    lizard:   { paper:       "eats", spock:      "poisons" },
    spock:    { rock:  "vapourises", scissors:   "smashes" }
  }
  this.player1Wins = this.winnerGenerator(this.player1, this.player2);
  this.player2Wins = this.winnerGenerator(this.player2, this.player1);
};

Game.prototype.winner = function() {
  if(this.player1Wins()) return this.player1;
  if(this.draw()) return null;
  return this.player2;
};

Game.prototype.result = function() {
  if(this.player1Wins()) return this.player1WinsResult();
  if(this.player2Wins()) return this.player2WinsResult(); 
  return "draw"
};

Game.prototype.winnerGenerator = function(player1, player2) {
  return function() {
    return this.rules[player1.pick][player2.pick];
  };
};

Game.prototype.draw = function() {
  return this.player1.pick == this.player2.pick;
};

Game.prototype.player1WinsResult = function() {
  return [this.player1.pick, this.player1Wins(), this.player2.pick].join(' ');
};

Game.prototype.player2WinsResult = function() {
  return [this.player2.pick, this.player2Wins(), this.player1.pick].join(' ');
};
