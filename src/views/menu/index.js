import React, { useEffect } from 'react'
import ModeSelectorComponent from './components/modeSelector'
import menudMusic from './../../assets/music/Nice_Bit_beat.mp3'
import { useDispatch } from 'react-redux'
import { resetLevel } from '../../redux/actions/game.actions'

export default function MenuComponent() {
  const audio = new Audio(menudMusic)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetLevel())
    audio.play()
    return () => audio.pause()
  }, [])
  return (
    <div className="menu-wrapper">
      <div className="main-card-wrapper animate__animated animate__fadeInDown">
        <div className="main-card-content">
          <span className="main-card-title">BitHack</span>
          <div>
            <ModeSelectorComponent />
          </div>
        </div>
        <div className="main-card-img-side"></div>
      </div>
    </div>
  )
}
