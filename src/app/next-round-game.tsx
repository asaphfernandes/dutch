import styled from '@emotion/styled';
import React from 'react';
import { maskNumber00 } from './util';

const NextRoundGameJss = styled('div')({
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    'button': {
        backgroundColor: '#4947B9',
        color: '#fff'
    }
});

interface INextRondGameProps {
    onClick: () => void;
    round: number
}

const NextRoundGame: React.FC<INextRondGameProps> = (props) => {
    const { onClick, round } = props;

    return (<NextRoundGameJss>
        <button onClick={onClick}>
            Salvar Round {maskNumber00(round)}
        </button>
    </NextRoundGameJss>);
}

export default NextRoundGame;