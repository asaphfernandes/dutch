import React from 'react';
import styled from '@emotion/styled';
import Container from './container';
import Info from './info';
import NewGame from './new-game';
import IStatusGameModel from './status-game.model';


interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const ButtonNewGame = styled('button')<IButtonProps>({
  color: 'red',
  width: 'initial'
});

const STATUS_GAME_STORAGE = 'status@dutch';

function App() {

  const [statusGame] = React.useState(() => {
    var storage = localStorage.getItem(STATUS_GAME_STORAGE);
    if(storage === null){
      return {
        round: 0,
        players: []
      } as IStatusGameModel;
    }else{
      return JSON.parse(storage) as IStatusGameModel;
    }
  });

  return (<Container>
    <div className='topbar'>
      <Info statusGame={statusGame} />
      <NewGame />
      <ButtonNewGame>Novo Jogo</ButtonNewGame>
    </div>
    <div className='content'>Participantes</div>
    <div className='footer'>Ações</div>


  </Container>);
}

export default App;
