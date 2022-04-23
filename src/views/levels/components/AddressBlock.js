import React from "react";
import BitCell from "./BitCell";

export function AddressBlock(props) {
  function newBitCells() {
    const bitCells = [];

    for (let i = 0; i < 8; i++) {
      let uniqueId = props.id + "-" + i;
      bitCells.push({ key: uniqueId, id: uniqueId, bit: props.bits[i] });
    }

    return bitCells;
  }

  const bitCellElements = newBitCells().map((bitCell) => (
    <BitCell
      key={bitCell.id}
      id={bitCell.id}
      bit={bitCell.bit}
      flipBit={props.flipBit}
    />
  ));

  return (
    <div className="address-block">
      <div>
        <label>{props.label}</label>
      </div>
      {bitCellElements}
      <div>
        <label>{props.value}</label>
      </div>
    </div>
  );
}

export default AddressBlock;
