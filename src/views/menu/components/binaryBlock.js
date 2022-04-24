import React, { useEffect, useState } from "react";

export default function BinaryBlockComponent({
  data,
  rowIndex,
  isFixed,
  parentValues,
  setParentValues,
}) {

  const [value, setValue] = useState(data);

  useEffect(() => {
    setValue(data);
  }, [data]);

  const decimalToBinaryArray = (data) => [...data.toString(2).padStart(8, "0")];

  const flipValue = (index) => {
    if (isFixed) return;

    let newValue = value;
    let newParentValues = parentValues;

    newValue ^= 1 << (7 - index); // MAGIA NEGRA!
    newParentValues[rowIndex] = newValue;
    setValue(newValue);
    setParentValues(newParentValues);
  };

  function BitCellComponents() {
    return (
      <>
        {Array(8).fill(0).map((_, key) => (
            <div
              key={key}
              className="bit-cell"
              onClick={() => (isFixed ? null : flipValue(key))}
            >
              {decimalToBinaryArray(value)[key]}
            </div>
          ))}
      </>
    );
  }

  return (
    <div className="address-block">
      <BitCellComponents />
      <div>
        <span>{value}</span>
      </div>
    </div>
  );
}
