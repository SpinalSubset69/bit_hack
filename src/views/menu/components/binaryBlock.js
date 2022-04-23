import React, { useEffect, useState } from 'react'
import { getDecimalValueFromBinary } from '../../../helpers/normalizeBytesString'

export default function BinaryBlockComponent({
  data,
  isFixed,
  setRows,
  rows,
  rowKey,
}) {
  const [result, setResult] = useState(getDecimalValueFromBinary(data.join('')))
  const [binary, setBinary] = useState(data)

  useEffect(() => {
    setBinary(data)
    setResult(getDecimalValueFromBinary(data.join('')))
  }, [data])

  const flipValue = (index) => {
    //If the row is not fixed allow changes on the state
    if (!isFixed) {
      const newBinary = binary
      newBinary[index] = newBinary[index] === '1' ? '0' : '1'
      setBinary([...newBinary])
      setResult(getDecimalValueFromBinary(binary.join('')))
    }

    //SET PARENT ROWS TO PERFORM OPERATIONS
    const parentRows = rows
    rows[rowKey] = binary
    setRows(parentRows)
  }

  return (
    <div className="address-block">
      {binary.map((x, key) => (
        <div
          onClick={() => (isFixed ? null : flipValue(key))}
          key={key}
          className="bit-cell"
        >
          {x}
        </div>
      ))}
      <div>
        <span>{result}</span>
      </div>
    </div>
  )
}
