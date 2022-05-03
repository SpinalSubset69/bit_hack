import React, { useEffect, useState } from 'react'
import {
  SwitchBounce,
  SwitchPulse,
  SwithcHeadShakeX,
} from '../../../helpers/cssClassHelper'

export default function BinaryBlockComponent({
  data,
  rowIndex,
  isFixed,
  parentValues,
  setParentValues,
  index,
  setSteps,
  steps,
}) {
  const [value, setValue] = useState(data)
  const [valueId, setValueId] = useState(index + 69)

  useEffect(() => {
    setValue(data)
  }, [data])

  useEffect(() => {
    SwitchBounce(valueId)
  }, [value])

  const decimalToBinaryArray = (data) => [...data.toString(2).padStart(8, '0')]

  const flipValue = (index, uniqueId) => {
    if (isFixed) {
      SwithcHeadShakeX(uniqueId)
      return
    }
    SwitchPulse(uniqueId).then(() => {
      let newValue = value
      let newParentValues = parentValues
      newValue ^= 1 << (7 - index) // MAGIA NEGRA!
      newParentValues[rowIndex] = newValue
      setValue(newValue)
      setParentValues(newParentValues)
      setSteps(steps + 1)
    })
  }

  function BitCellComponents() {
    return (
      <>
        {Array(8)
          .fill(0)
          .map((_, key) =>
            Array.from(decimalToBinaryArray(value)[key]).map((x) => {
              const uniqueId = Math.floor(Math.random() * (5000 - 1 + 1) + 1)
              return (
                <div
                  key={key}
                  id={uniqueId}
                  className={`bit-cell animate__animated  ${
                    x === '1' ? 'green-cell' : 'red-cell'
                  }`}
                  onClick={() => flipValue(key, uniqueId)}
                >
                  {x}
                </div>
              )
            }),
          )}
      </>
    )
  }

  return (
    <div className="address-block">
      <BitCellComponents />
      <div id={valueId} className="value-cell animate__animated">
        <span>{value}</span>
      </div>
    </div>
  )
}
