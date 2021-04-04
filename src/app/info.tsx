import React from 'react';
import IStatusGameModel from './status-game.model';
import { maskNumber00 } from './util';

interface IInfo {
    statusGame: IStatusGameModel
}

const Info: React.FC<IInfo> = (props) => {
    const { statusGame } = props;
    const [dateTime, setDateTime] = React.useState('');

    React.useEffect(() => {
        setInterval(() => {
            const date = new Date();
            const y = date.getFullYear();
            const mo = maskNumber00(date.getMonth() + 1);
            const d = maskNumber00(date.getDate());
            const h = maskNumber00(date.getHours());
            const mi = maskNumber00(date.getMinutes());
            const s = maskNumber00(date.getSeconds());

            setDateTime(`${y}/${mo}/${d} ${h}:${mi}:${s}`);
        }, 1000);
    }, []);

    return (<div>
        <p id='clock'>{dateTime}</p>
        <p id='title'>{statusGame.round === 0 ? 'Bom jogo' : `Round ${maskNumber00(statusGame.round)}`}</p>
    </div>);
}

export default Info;