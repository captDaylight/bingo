pragma solidity ^0.4.2;

contract ChickenShitBingo {
  struct Player {
    address addr;
    uint amount;
    bool flag;
  }

  struct Game {
    uint pool;
    uint amountOfSquares;
    uint numPlayers;
    bool ended;
    uint[] purchasedSquares;
    mapping (uint => Player) players;
  }

  uint public numGames;
  mapping(uint => Game) public games;

  function newGame(uint amountOfSquares) returns (uint) {
    numGames = numGames++;
    games[numGames] = Game(0, amountOfSquares, 0, false, new uint[](0));
    return numGames;
  }

  function purchaseSquare(uint gameID, uint squareLocation) payable {
    Game g = games[gameID];

    // check if square is already taken
    if (!g.players[squareLocation].flag) {
      g.players[squareLocation] = Player(msg.sender, msg.value, true);
      g.numPlayers++;
      g.pool += msg.value;
      g.purchasedSquares.push(squareLocation);

      // if all squares are filled, choose a winner and move funds
      if (g.numPlayers == g.amountOfSquares) {
        endGame(gameID);
      }
    }
  }

  function getPurchasedSquares(uint gameID) constant returns(uint[]) {
    Game g = games[gameID];

    return g.purchasedSquares;
  }

  function endGame(uint gameID) {
    Game g = games[gameID];

    /*if (g.ended)
      return false;*/

    g.ended = true;
  }
}
