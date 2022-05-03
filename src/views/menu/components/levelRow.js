import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SlideToRight } from '../../../helpers/cssClassHelper'
import { onSelectLevel } from '../../../redux/actions/game.actions'

export default function LevelRowComponent({ data }) {
  const navigate = useNavigate() //TO NAVIGATE BETWEEN LEVELS
  const dispatch = useDispatch()

  const selectLevel = (data) => {
    //HERE WE GONNA BUILD THE LEVEL

    const {
      name,
      numberBits,
      operation,
      toggleableRows,
      expectedResult,
      secondRow,
      firstRow,
      thirdRow,
      steps,
    } = data
    
    dispatch(
      onSelectLevel({
        numberBits,
        operation,
        toggleableRows,
        expectedResult,
        secondRow,
        firstRow,
        name,
        thirdRow,
        steps,
      }),
    )
    navigate('/level')
  }

  return (
    <div className="row-level-wrapper">
      {data
        ? data.map((x, index) => {
            return (
              <div
                onMouseEnter={() => SlideToRight(index, 'enter')}
                onMouseLeave={() => SlideToRight(index, 'leave')}
                onClick={() => selectLevel(x)}
                key={index}
                id={index}
                className="row-wrapper"
              >
                <h1>{x.name}</h1>
              </div>
            )
          })
        : null}
    </div>
  )
}
