import React, { useState } from 'react';
import { IMessageEvent } from 'websocket';
import { rpsLive } from '../services/rpsLive';
import { GameType } from '../types/GameType';
import { determineWinner } from '../utils/determineWinner';

const CurrentGamesBar = () => {
  const [currentGames, setCurrentGames] = useState<[] | GameType[]>([]);
  // Web socket for live games
  rpsLive.onmessage = (message: IMessageEvent) => {
    if (typeof message.data === 'string') {
      const newData: GameType = JSON.parse(JSON.parse(message.data));
      console.log(newData);
      const gameExists = currentGames.find(
        (currentGame) => currentGame.gameId === newData.gameId
      );
      if (gameExists) {
        // If the game exists in the state, update the game results
        const updatedGames = currentGames.map((currentGame) => {
          if (currentGame.gameId === newData.gameId) {
            return newData;
          }
          return currentGame;
        });
        setCurrentGames(updatedGames);
      } else {
        // Game doesn't exist in the state -> add it
        setCurrentGames(() => [...currentGames, newData]);
      }
    }
  };

  return (
    <div>
      <p className='underline'>Current games</p>
      {currentGames.reverse().map((currentGame) => {
        return (
          <div>
            <p className='font-bold'>
              {currentGame.playerA.name} VS {currentGame.playerB.name} ---{' '}
              {currentGame.type === 'GAME_RESULT'
                ? determineWinner(currentGame.playerA, currentGame.playerB)
                : 'Match in progress!'}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentGamesBar;
