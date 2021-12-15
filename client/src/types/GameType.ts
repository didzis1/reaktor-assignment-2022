export type GameType = {
  type: 'GAME_BEGIN' | 'GAME_RESULT';
  gameId: string;
  playerA: PlayerType;
  playerB: PlayerType;
  t: number;
};

export type PlayerType = {
  name: string;
  played?: 'PAPER' | 'SCISSORS' | 'ROCK';
};
