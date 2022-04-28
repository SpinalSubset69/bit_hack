import React, { useEffect, useState } from "react";
import {
  SwitchBounce,
  SwitchPulse,
  SwithcHeadShakeX,
} from "../../../helpers/cssClassHelper";

export default function BinaryBlockComponent({
  data,
  level,
  index,
  rowIndex,
  isFixed,
  isToggleable,
  setNewParentValue,
}) {
  const [value, setValue] = useState(data);
  const [valueId, setValueId] = useState(index + 69);

  useEffect(() => {
    setValue(data);
  }, [data]);

  useEffect(() => {
    SwitchBounce(valueId);
  }, [value]);

  const decimalToBinaryArray = (data) => [...data.toString(2).padStart(8, "0")];

  const flipValue = (index, uniqueId) => {
    if (isFixed || !isToggleable) {
      SwithcHeadShakeX(uniqueId);
      return;
    }

    SwitchPulse(uniqueId);

    setTimeout(() => {
      let newValue = value;
      newValue ^= 1 << (7 - index); // MAGIA NEGRA!
      setValue(newValue);
      setNewParentValue(newValue, rowIndex);
    }, 400);
  };

  const leftShift = () => {
    let newValue = (value << 1) & 255;
    setValue(newValue);
    setNewParentValue(newValue, rowIndex);
  }

  const rightShift = () => {
    let newValue = value >> 1;
    setValue(newValue);
    setNewParentValue(newValue, rowIndex);
  }

  const not = () => {
    let newValue = value;

    for(let i = 0; i < 8; i++)
      newValue ^= 1 << i;
    
    setValue(newValue);
    setNewParentValue(newValue, rowIndex);
  }

  const BitCellComponents = () => {
    return (
      <>
        {Array(8)
          .fill(0)
          .map((_, key) =>
            Array.from(decimalToBinaryArray(value)[key]).map((x) => {
              const uniqueId = Math.floor(Math.random() * (5000 - 1 + 1) + 1);
              return (
                <div
                  key={key}
                  id={uniqueId}
                  className={`bit-cell animate__animated  ${
                    x === "1" ? "green-cell" : "red-cell"
                  }`}
                  onClick={() => flipValue(key, uniqueId)}
                >
                  {x}
                </div>
              );
            })
          )}
      </>
    );
  }

  return (
    <div className="address-block">
      <BitCellComponents />
      <div id={valueId} className="value-cell animate__animated">
        <span>{value}</span>
      </div>
      <div className="button-container">
        {isToggleable ? (
          <>
            {level.operation.toString().includes("<<") ? (
              <button onClick={leftShift}>&#60;&#60;</button>
            ) : null}
            {level.operation.toString().includes(">>") ? (
              <button onClick={rightShift}>&#62;&#62;</button>
            ) : null}
            {level.operation.toString().includes("~") ? (
              <button onClick={not}>~</button>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
