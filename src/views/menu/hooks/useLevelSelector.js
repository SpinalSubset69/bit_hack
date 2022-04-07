import { useSelector } from "react-redux";

export default function useLevelSelector() {
  const mode = useSelector(({ game: { mode } }) => mode);
  const level = useSelector(({ game: { level } }) => level);

  return {
    mode,
    level,
  };
}
