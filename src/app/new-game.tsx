import styled from '@emotion/styled';
import React from 'react';

const NewGameJss = styled('div')({
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    'button': {
        backgroundColor: '#4947B9',
        color: '#fff'
    }
  });

const NewGame: React.FC = () => {
    return (<NewGameJss>
        <button>
            Novo jogo
        </button>
    </NewGameJss>);
}

export default NewGame;