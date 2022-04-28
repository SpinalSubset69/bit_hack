import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SwitchTada } from '../../../helpers/cssClassHelper'
import { setPlayerScoreAction } from '../../../redux/actions/game.actions'
import useLevelSelector from './../hooks/useLevelSelector'
import BackArrowComponent from './backArrow'
import BinaryBlockComponent from './binaryBlock'

export default function LevelComponent() {
  const { level, score } = useLevelSelector()
  const dispatch = useDispatch()
  const [values, setValues] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (Object.keys(level).length === 0) navigate(-1)
    init()
  }, [])

  //UPDATE PLAYER SCORE STATE
  useEffect(() => {
    dispatch(setPlayerScoreAction(values[2]))
  }, [values[2]])

  useEffect(() => {
    //COMPARAR EL expected result con el score
    if (level.expectedResult === score) SwitchTada('level-wrapper')
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
    />
  )

  return (
    <div className="level-wrapper animate__animated animate__fadeInDownBig">
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
