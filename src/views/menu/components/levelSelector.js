import React from "react";
import useLevelSelector from "../hooks/useLevelSelector";
import { easyLevels, hardLevels, mediumLevels } from "./dummyData";
import LevelRowComponent from "./levelRow";

export default function LevelSelectorComponent() {
  const { mode } = useLevelSelector();
  return (
    <div className="level-selector-wraper">
      {mode === "easy" ? <LevelRowComponent data={easyLevels} /> : null}
      {mode === "medium" ? <LevelRowComponent data={mediumLevels} /> : null}
      {mode === "hard" ? <LevelRowComponent data={hardLevels} /> : null}
    </div>
  );
}
