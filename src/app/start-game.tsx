import styled from '@emotion/styled';
import React from 'react';

const StartGameJss = styled('div')({
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    'button': {
        backgroundColor: '#4947B9',
        color: '#fff'
    }
});

interface IStartGameProps {
    onClick: () => void;
}

const StartGame: React.FC<IStartGameProps> = (props) => {
    const { onClick } = props;

    return (<StartGameJss>
        <button onClick={onClick}>
            Comerçar
        </button>
    </StartGameJss>);
}

export default StartGame;