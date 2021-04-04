import styled from '@emotion/styled';
import React from 'react';
import IPlayerModel from './player.model';
import { maskNumber00 } from './util';

const PlayerJss = styled('div')({
    backgroundColor: '#c4c4c4',
    alignItems: 'center',
    borderRadius: '10px',
    padding: 8,
    marginTop: 16,
    ' .score': {
        width: '20px',
        textAlign: 'center'
    },
    ' .name': {
        flex: 1,
        flexGrow: 5,
        margin: '0px 8px'
    },
    ' .score-actions': {
        width: 75
    },
    ' .delete-player': {
        borderRadius: 5,
        backgroundColor: '#b63319',
        color: '#fff',
    },
    ' .round-score': {
        width: '100%',
        padding: 8,
        border: 'none',
        borderRadius: 5
    }
});

interface IPlayerProps {
    player: IPlayerModel;
    round: number;
    onDelete: (name: string) => void,
    onScore: (name: string, score: string) => void,
}

const Player: React.FC<IPlayerProps> = ({
    player, round, onDelete, onScore
}) => {

    const [roundScore, setRoundScore] = React.useState(player.roundScore);

    React.useEffect(() => {
        setRoundScore(player.roundScore);
    }, [player.roundScore]);

    const handleDelete = () => {
        onDelete(player.name);
    }

    const handleChange = (e: any) => {
        setRoundScore(e.target.value);
    }

    const handleScore = () => {
        onScore(player.name, roundScore);
    }

    return (<PlayerJss>
        <div className="score">{round > 0 ? maskNumber00(player.score) : '--'}</div>
        <div className="name">{player.name}</div>
        <div className="score-actions">
            {round > 0 && player.score < 40 &&
                <input className='round-score' type="tel" name='score' value={roundScore}
                    onChange={handleChange} onBlur={handleScore} />}
            {round === 0 && <button className='delete-player' onClick={handleDelete}>Remover</button>}
        </div>
    </PlayerJss>);
};

export default Player;
