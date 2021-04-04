import styled from '@emotion/styled';
import React from 'react';
import { maskNumber00 } from './util';

const InfoJss = styled('div')({
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  });

interface IInfo {
    round: number
}

const Info: React.FC<IInfo> = (props) => {
    const { round } = props;
    const [dateTime, setDateTime] = React.useState('01/01/2021 00:00:00');

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

    return (<InfoJss>
        <span>{dateTime}</span>
        <span>{round === 0 ? 'Bom jogo' : `Round ${maskNumber00(round)}`}</span>
    </InfoJss>);
}

export default Info;