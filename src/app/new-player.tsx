import styled from '@emotion/styled';
import React from 'react';

const NewPlayerJss = styled('div')({
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
    ' .input-name': {
        padding: 8,
        border: 'none',
        margin: '0px 8px',
        width: '100%'
    },
    ' .score-actions': {
        width: 75
    },
    ' .add-player': {
        borderRadius: 5
    },
});

interface INewPlayerProps {
    onAdd: (name: string) => void
}

const NewPlayer: React.FC<INewPlayerProps> = ({
    onAdd
}) => {

    const inputName = React.useRef<HTMLInputElement>(null)

    const handleAdd = () => {
        if (inputName.current) {
            var value = inputName.current.value;
            inputName.current.value = '';
            onAdd(value);
        }
    }

    return (<NewPlayerJss>
        <div className="score"></div>
        <div className="name"><input ref={inputName} className='input-name' placeholder="Nome do jogador" /></div>
        <div className="score-actions">
            <button className='add-player' onClick={handleAdd}>Adicionar</button>
        </div>
    </NewPlayerJss>);
};

export default NewPlayer;
