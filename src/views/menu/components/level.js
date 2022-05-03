import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SwitchRotateOut, SwitchTada } from '../../../helpers/cssClassHelper'
import { setPlayerScoreAction } from '../../../redux/actions/game.actions'
import useLevelSelector from './../hooks/useLevelSelector'
import BackArrowComponent from './backArrow'
import BinaryBlockComponent from './binaryBlock'
import levelMusic from './../../../assets/music/level.mp3'
import winMusic from './../../../assets/music/win.mp3'
import looseMusic from './../../../assets/music/lose.mp3'

export default function LevelComponent() {
  const { level, score } = useLevelSelector()
  const dispatch = useDispatch()
  const [values, setValues] = useState([])
  const navigate = useNavigate()
  const [userSteps, setUserSteps] = useState(0)
  const [looseGame, setLooseGame] = useState(0)
  const audio = new Audio(levelMusic)

  useEffect(() => {
    audio.play()
    audio.addEventListener('ended', audio.play())
    if (Object.keys(level).length === 0) navigate(-1)
    init()

    return () => audio.pause()
  }, [])

  //UPDATE PLAYER SCORE STATE
  useEffect(() => {
    dispatch(setPlayerScoreAction(values[2]))
  }, [values[2]])

  useEffect(() => {
    if (level.steps) {
      if (userSteps > level.steps) {
        setLooseGame(true)
        audio.pause()
        const loosAudio = new Audio(looseMusic)
        loosAudio.play()
        SwitchRotateOut('level-wrapper')
      }
    }
  }, [userSteps])

  useEffect(() => {
    //COMPARAR EL expected result con el score
    if (level.expectedResult === score && userSteps < level.steps) {
      audio.pause()
      const winAudio = new Audio(winMusic)
      winAudio.play()
      SwitchTada('level-wrapper')
    }
  }, [score])

  // Initialize states
  const init = () => {
    setValues([level.firstRow, level.secondRow, level.thirdRow])
  }

  // Set all the levels requirements
  const buildLevel = () => values.map((_, key) => blocksRow(_, key, key === 2))

  const setNewValue = (newValue, index) => {
    const oldValues = values
    oldValues[index] = newValue
    setValues([...oldValues])
  }

  const or = () => setNewValue(values[0] | values[1], 2)
  const and = () => setNewValue(values[0] & values[1], 2)
  const xor = () => setNewValue(values[0] ^ values[1], 2)

  const blocksRow = (data, key, isFixed) => (
    <BinaryBlockComponent
      data={data}
      key={key}
      index={key}
      rowIndex={key}
      isFixed={isFixed}
      parentValues={values}
      setParentValues={setValues}
      setSteps={setUserSteps}
      steps={userSteps}
    />
  )

  return (
    <div className="level-wrapper animate__animated animate__fadeInDownBig">
      {looseGame ? (
        <div>
          <h1>HAS PERDIDO, ¿Qué pasó bruh? ¿Desayunaste?</h1>
        </div>
      ) : null}
      <div id="level-wrapper" className="level animate__animated">
        <div className="flex justify-between">
          <div className="flex pl-10 items-center relative">
            <BackArrowComponent classCss="h-6 w-6 absolute left-0" />
            <span className="level-title">{level.name}</span>
          </div>

          <span className="text-2xl text-white font-bold">
            Expected Result: {level.expectedResult}
          </span>
        </div>
        {buildLevel()}
        <div className="button-container">
          {level.operation.toString().includes('^') ? (
            <button onClick={xor}>^</button>
          ) : null}
          {level.operation.toString().includes('&') ? (
            <button onClick={and}>&</button>
          ) : null}
          {level.operation.toString().includes('|') ? (
            <button onClick={or}>|</button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
