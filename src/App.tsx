import {useState} from "react";
import {Player} from './components/Player.tsx';
import GameBoard from './components/GameBoard'
import Log from './components/Log.tsx'


function App() {
    const [gameTurns, setGameTurns] = useState([])
    const [activePlayer, setActivePlayer] = useState('X')


    function handleSelectSquare(rowIndex, colIndex) {
        console.log('here')
        setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"))
        debugger
        setGameTurns( (prevTurns) => {
            let currentPlayer = "X"
            debugger
            if (prevTurns.length > 0 && prevTurns[0].player === "X") {
                currentPlayer = "O"
            }
            debugger
            const updatedTurns = [
                { square: {row: rowIndex, col: colIndex}, player: currentPlayer },
                ...prevTurns,
            ]
            debugger
            return updatedTurns
        })

    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="player1" symbol="X" isActive={activePlayer === "X"}/>
                    <Player initialName="player2" symbol="O" isActive={activePlayer === "O"}/>
                </ol>
                <GameBoard onSelectSquare={() => handleSelectSquare()} turns={gameTurns} />
            </div>
            <Log/>
        </main>
    )
}

export default App
