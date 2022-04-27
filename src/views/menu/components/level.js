import React, { useEffect, useState } from "react";
import { // Pueda que ya no sea necesario este import
  andOperation,
  orOperation,
  xorOperation,
} from "../../../helpers/binaryOperations";
import { normalizeBinaryString } from "../../../helpers/normalizeBytesString";
import useLevelSelector from "./../hooks/useLevelSelector";
import BinaryBlockComponent from "./binaryBlock";

export default function LevelComponent() {
  const { level } = useLevelSelector();
  const [values, setValues] = useState([]);

  useEffect(() => {
    init();
  }, []);

  // Initialize states
  const init = () => {
    setValues([level.firstRow, level.secondRow, level.thirdRow]);
  };

  // Set all the levels requirements
  const buildLevel = () => values.map((_, key) => blocksRow(_, key, key === 2));

  const blocksRow = (data, key, isFixed) => (
    <BinaryBlockComponent
      data={data}
      key={key}
      rowIndex={key}
      isFixed={isFixed}
      parentValues={values}
      setParentValues={setValues}
    />
  );

  const setNewValue = (newValue, index) => {
    const oldValues = values;
    oldValues[index] = newValue;
    setValues([...oldValues]);
  };

  const or  = () => setNewValue(values[0] | values[1], 2);
  const and = () => setNewValue(values[0] & values[1], 2);
  const xor = () => setNewValue(values[0] ^ values[1], 2);

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
  );
}
