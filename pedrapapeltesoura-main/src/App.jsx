import { Fragment, useState } from 'react'

import './App.css'

import PaperHandTransparent from './assets/moves/paper-hand-transparent.png'
import RockHandTransparent from './assets/moves/rock-hand-transparent.png'
import ScissorHandTransparent from './assets/moves/scissor-hand-transparent.png'

function App() {
  const [currentplay, setCurrentPlay] = useState({
computer: '',
    player: '',

  })
  const [winnersCounter, setWinnersCounter] = useState({
    player:0,
    computer: 0,
    ties: 0
  })
  const [winner, setWinner] = useState('')
  const [possibleMoves, setPossibleMoves] = useState([
    {
      type: 'paper',
      label: 'Papel',
      wins: 'rock',
      loses: 'scissor'
    },
    {
      type: 'rock',
      label: 'Pedra',
      wins: 'scissor',
      loses: 'paper'
    },
    {
      type: 'scissor',
      label: 'Tesoura',
      wins: 'paper',
      loses: 'rock'
    }
  ])

  const makeMove = playerMove => {
    const minimumMachineMoveNumber = 1
    const maximumMachineMoveNumber = 3

    const randomMachineMove =
      Math.floor(
        Math.random() *
          (maximumMachineMoveNumber - minimumMachineMoveNumber + 1)
      ) + minimumMachineMoveNumber

    let machineMoveType = ''

    switch (randomMachineMove) {
      case 1:
        machineMoveType = 'paper'
        break
      case 2:
        machineMoveType = 'rock'
        break
      case 3:
        machineMoveType = 'scissor'
        break
    }

    if (machineMoveType === playerMove) {
      setWinner('Empate')
      setWinnersCounter((currentCounter) =>{
        return({
          ...currentCounter,
          ties: currentCounter.ties++
        })
      } )
      return
    }

    const playerMoveValidation = possibleMoves.find(
      currentMove => currentMove.type === playerMove
    )

    const isPlayerTheWinner = playerMoveValidation.wins === machineMoveType

    if (isPlayerTheWinner) {
      setWinner('Jogador')
      setWinnersCounter((currentCounter) =>{
        return({
          ...currentCounter,
          player: currentCounter.player++
        })
      } )
      return
    }

    setWinner('Computador')
    setWinnersCounter((currentCounter) =>{
      return({
        ...currentCounter,
        computer: currentCounter.computer++
      })
    } )
  }

  return (
    <Fragment>
      {winner && <h1>{winner}</h1>}
      

      <p>Jogador:{winnersCounter.player}</p>
      <p>Computador: {winnersCounter.computer}</p>
      <p>Empate: {winnersCounter.ties}</p>

      <button onClick={() => makeMove('paper')}>
        <img src={PaperHandTransparent} />
      </button>

      <button onClick={() => makeMove('rock')}>
        <img src={RockHandTransparent} />
      </button>

      <button onClick={() => makeMove('scissor')}>
        <img src={ScissorHandTransparent} />
      </button>
    </Fragment>
  )
}

export default App
