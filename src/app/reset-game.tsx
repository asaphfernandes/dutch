import styled from '@emotion/styled';
import React from 'react';

const ResetGameJss = styled('div')({
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    'button': {
        backgroundColor: '#B66419',
        color: '#fff'
    }
});

interface IRessetGameProps {
    onClick: () => void
};

const ResetGame: React.FC<IRessetGameProps> = (props) => {
    const { onClick } = props;

    return (<ResetGameJss>
        <button onClick={onClick}>
            Recomeçar jogo
        </button>
    </ResetGameJss>);
}

export default ResetGame;