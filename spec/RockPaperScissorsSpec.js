describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;
  
  beforeEach(function() {
    player1 = new Player('Player 1');
    player2 = new Player('Player 2');
    game = new Game(player1, player2);
  });

  describe('(winning and losing)', function() {
    describe('rock', function() {
      beforeEach(function() {
        player1.picks('rock');
      });

      it('should beat scissors', function() {  
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should beat lizard', function() {
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to spock', function() {
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('paper', function() {
      beforeEach(function() {
        player1.picks('paper');
      });

      it('should beat rock', function() {
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to scissors', function() {
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

      it('should beat spock', function() {
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to lizard', function() {
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('scissors', function() {
      beforeEach(function() {
        player1.picks('scissors');
      });

      it('should beat paper', function() {
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should beat lizard', function() {
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to spock', function() {
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('lizard', function() {
      beforeEach(function() {
        player1.picks('lizard');
      });

      it('should beat paper', function() {
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should beat spock', function() {
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to scissors', function() {
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('spock', function() {
      beforeEach(function() {
        player1.picks('spock');
      });

      it('should beat rock', function() {
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should beat scissors', function() {
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to lizard', function() {
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
      });
    });
  });

  describe('(draws)', function() {
    describe('any identical picks', function() {
      it('should return no winner', function() {
        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });
        expect(drawGameResults).toEqual([null, null, null]);
      });

      it('should result in a draw', function() {
        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.result();
        });
        expect(drawGameResults).toEqual(["draw", "draw", "draw"]);
      });
    });
  });

  describe('(results)', function() {
    describe('rock', function() {
      beforeEach(function() {
        player1.picks('rock');
      });

      it('should crush scissors', function() {  
        player2.picks('scissors');
        expect(game.result()).toBe("rock crushes scissors");
      });

      it('should crush lizard', function() {
        player2.picks('lizard');
        expect(game.result()).toBe("rock crushes lizard");
      });

      it('should be covered by paper', function() {
        player2.picks('paper');
        expect(game.result()).toBe("paper covers rock");
      });

      it('should be vapourised by spock', function() {
        player2.picks('spock');
        expect(game.result()).toBe("spock vapourises rock");
      });
    });

    describe('paper', function() {
      beforeEach(function() {
        player1.picks('paper');
      });

      it('should cover rock', function() {
        player2.picks('rock');
        expect(game.result()).toBe("paper covers rock");
      });

      it('should disprove spock', function() {
        player2.picks('spock');
        expect(game.result()).toBe("paper disproves spock");
      });

      it('should be cut by scissors', function() {
        player2.picks('scissors');
        expect(game.result()).toBe("scissors cuts paper");
      });

      it('should be eaten by lizard', function() {
        player2.picks('lizard');
        expect(game.result()).toBe("lizard eats paper");
      });
    });

    describe('scissors', function() {
      beforeEach(function() {
        player1.picks('scissors');
      });

      it('should cut paper', function() {
        player2.picks('paper');
        expect(game.result()).toBe("scissors cuts paper");
      });

      it('should decapitate lizard', function() {
        player2.picks('lizard');
        expect(game.result()).toBe("scissors decapitates lizard");
      });
    });

    describe('lizard', function() {
      beforeEach(function() {
        player1.picks('lizard');
      });

      it('should beat paper', function() {
        player2.picks('paper');
        expect(game.result()).toBe("lizard eats paper");
      });

      it('should poison spock', function() {
        player2.picks('spock');
        expect(game.result()).toBe("lizard poisons spock");
      });
    });

    describe('spock', function() {
      beforeEach(function() {
        player1.picks('spock');
      });

      it('should vapourise rock', function() {
        player2.picks('rock');
        expect(game.result()).toBe("spock vapourises rock");
      });

      it('should smash scissors', function() {
        player2.picks('scissors');
        expect(game.result()).toBe("spock smashes scissors");
      });
    });
  });
});