import {useState} from 'react'

export function Player({initialName, symbol, isActive, onChangeName }: { initialName: string; symbol: string; isActive: boolean }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if (IsEditing) {
            onChangeName(symbol, playerName);
        }

    }

    function handleChange(event : {event: string}) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
        </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>

        </li>
    )
}