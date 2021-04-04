import React from 'react';
import Container from './container';
import Info from './info';
import NewGame from './new-game';
import NextRoundGame from './next-round-game';
import ResetGame from './reset-game';
import StartGame from './start-game';
import IPlayerModel from './player.model';
import Player from './player';
import NewPlayer from './new-player';

const ROUND_GAME_STORAGE = 'round@dutch';
const PLAYERS_GAME_STORAGE = 'players@dutch';

function App() {

  const [round, setRound] = React.useState(() => {
    return parseInt(localStorage.getItem(ROUND_GAME_STORAGE) || '0');
  });

  const [players, setPlayers] = React.useState<IPlayerModel[]>(() => {
    var storage = localStorage.getItem(PLAYERS_GAME_STORAGE) || '[]';
    return JSON.parse(storage) as IPlayerModel[];
  });

  const handleRestGame = () => {
    const newPlayers = [...players];
    newPlayers.forEach(player => {
      player.score = 0;
      player.roundScore = '';
    });
    localStorage.setItem(PLAYERS_GAME_STORAGE, JSON.stringify(newPlayers));
    localStorage.setItem(ROUND_GAME_STORAGE, '0');
    setPlayers(newPlayers);
    setRound(0);
  }

  const handleStartGame = () => {
    localStorage.setItem(ROUND_GAME_STORAGE, '1');
    setRound(1);
  }

  const handleNextRoundGame = () => {
    const t = setTimeout(() => {
      clearTimeout(t);
      const newPlayers = [...players];
      newPlayers.forEach(player => {
        player.score += parseInt(player.roundScore) || 0;
        player.roundScore = '';
      });
      console.log(newPlayers);
      localStorage.setItem(PLAYERS_GAME_STORAGE, JSON.stringify(newPlayers));
      localStorage.setItem(ROUND_GAME_STORAGE, `${round + 1}`);
      setPlayers(newPlayers);
      setRound(state => state + 1);
    }, 200);
  }

  const handleAddPlayer = (name: string) => {
    const player = { name, score: 0, roundScore: '' } as IPlayerModel;
    const newPlayers = [...players, player];
    localStorage.setItem(PLAYERS_GAME_STORAGE, JSON.stringify(newPlayers));
    setPlayers(newPlayers);
  }

  const handleDeletePlayer = (name: string) => {
    let newPlayers = [...players];
    newPlayers = newPlayers.filter(w => w.name !== name)
    localStorage.setItem(PLAYERS_GAME_STORAGE, JSON.stringify(newPlayers));
    setPlayers(newPlayers);
  }

  const handleUpdatePlayerScore = (name: string, score: string) => {
    let newPlayers = [...players];
    newPlayers.forEach(player => {
      if (player.name === name) {
        player.roundScore = score
        return;
      }
    });
    localStorage.setItem(PLAYERS_GAME_STORAGE, JSON.stringify(newPlayers));
    setPlayers(newPlayers);
  }

  return (<Container>
    <div className='topbar'>
      <Info round={round} />
      <NewGame />
    </div>
    <div className='content'>
      {players.map(player => <Player key={player.name} player={player} round={round}
        onDelete={handleDeletePlayer} onScore={handleUpdatePlayerScore} />)}
      {round === 0 && <NewPlayer onAdd={handleAddPlayer} />}
    </div>
    <div className='footer'>
      <ResetGame onClick={handleRestGame} />
      {round === 0
        ? <StartGame onClick={handleStartGame} />
        : <NextRoundGame onClick={handleNextRoundGame} round={round} />}
    </div>


  </Container>);
}

export default App;
