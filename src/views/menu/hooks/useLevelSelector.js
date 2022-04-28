import { useSelector } from 'react-redux'

export default function useLevelSelector() {
  const mode = useSelector(({ game: { mode } }) => mode)
  const level = useSelector(({ game: { level } }) => level)
  const score = useSelector(({ game: { score } }) => score)

  return {
    mode,
    level,
    score,
  }
}
