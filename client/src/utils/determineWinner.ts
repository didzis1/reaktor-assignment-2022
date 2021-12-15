import { PlayerType } from '../types/GameType';

export const determineWinner = (
  playerA: PlayerType,
  playerB: PlayerType
): string => {
  let winner;
  if (playerA.played === playerB.played) return 'Tie';
  if (playerA.played === 'PAPER') {
    if (playerB.played === 'ROCK') {
      winner = `${playerA.name} wins!`;
    } else {
      winner = `${playerB.name} wins!`;
    }
  }

  if (playerA.played === 'SCISSORS') {
    if (playerB.played === 'PAPER') {
      winner = `${playerA.name} wins!`;
    } else {
      winner = `${playerB.name} wins!`;
    }
  }

  if (playerA.played === 'ROCK') {
    if (playerB.played === 'SCISSORS') {
      winner = `${playerA.name} wins!`;
    } else {
      winner = `${playerB.name} wins!`;
    }
  }

  winner = `${playerA.name} wins!`;
  return winner;
};
