import { useNavigate } from 'react-router-dom'
import { SlideToRightMinimun } from '../../../helpers/cssClassHelper'

export default function BackArrowComponent({ classCss }) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(-1)} id="back-arrow" className={`back-arrow bg-white ${classCss}`}></div>
  )
}
