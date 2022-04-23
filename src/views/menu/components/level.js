import React, { useEffect, useState } from 'react'
import {
  andOperation,
  orOperation,
  xorOperation,
} from '../../../helpers/binaryOperations'
import { normalizeBinaryString } from '../../../helpers/normalizeBytesString'
import useLevelSelector from './../hooks/useLevelSelector'
import BinaryBlockComponent from './binaryBlock'

export default function LevelComponent() {
  const { level } = useLevelSelector()
  const [rows, setRows] = useState([])

  useEffect(() => {
    init()
  }, [])

  //Initialize states
  const init = () => {
    setRows([                              
      [...normalizeBinaryString(level.firstRow.toString('2'))].map((x) => x),
      [...normalizeBinaryString(level.secondRow.toString('2'))].map((x) => x),
      [...normalizeBinaryString(level.thirdRow.toString('2'))].map((x) => x),
    ])
  }

  //Set all the levels requirements
  const buildLevel = () => rows.map((_, key) => blocksRow(_, key, key === 2))

  const blocksRow = (data, key, isFixed) => (
    <BinaryBlockComponent
      key={key}
      rows={rows}
      rowKey={key}
      data={data}
      isFixed={isFixed}
      setRows={setRows}      
    />
  )

  const setNewRows = (data) => {
    const oldRows = rows
    oldRows[2] = [...normalizeBinaryString(data.toString('2'))].map((x) => x)
    setRows([...oldRows])
  }

  const or = () => setNewRows(orOperation(rows))

  const and = () => setNewRows(andOperation(rows))

  const xor = () => setNewRows(xorOperation(rows))

  return (
    <div className="level-wrapper">
      <div className="level">
        <span className="level-title">{level.name}</span>
        {buildLevel()}
        <div className="button-container">
          <button onClick={or}>|</button>
          <button onClick={and}>&</button>
          <button onClick={xor}>^</button>
        </div>
      </div>
    </div>
  )
}
