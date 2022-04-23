import React from "react";
import BitCell from "./BitCell";

/**
 * This component is currently composed of 3 parts:
 * 1) label: contains the name of the address block
 * 2) bitCellComponents: a binary array of 8 bitCell components
 * 3) value: the decimal value of the binary array
 *
 * @param {Object} props parent component properties.
 * @returns {JSX} AddressBlock component.
 */
export function AddressBlock(props) {
  /**
   * This function creates an array of bitCell objects and assigns to each of
   * them a unique key and id that have the following form:
   * id of the AddressBlock + - + a number from 0 to 7 in ascending order.
   * @returns {Array(Object)} an array of bitCell objects.
   */
  function newBitCells() {
    const bitCells = [];

    for (let i = 0; i < 8; i++) {
      let uniqueId = props.id + "-" + i;
      bitCells.push({ key: uniqueId, id: uniqueId, bit: props.bits[i] });
    }

    return bitCells;
  }

  /**
   * A map of bitCell components in relation to the array of bitCell objects
   * returned by the newBitCells() function.
   */
  const bitCellComonents = newBitCells().map((bitCell) => (
    <BitCell
      key={bitCell.id}        // key property
      id={bitCell.id}         // id property
      bit={bitCell.bit}       // bit property: 1 or 0
      flipBit={props.flipBit} // flipBit(id) funtion property
    />
  ));

  return (
    <div className="address-block">
      {/* 1) label */}
      <div>
        <label>{props.label}</label>
      </div>

      {/* 2) bitCellComponents */}
      {bitCellComonents}

      {/* 3) value */}
      <div>
        <label>{props.value}</label>
      </div>
    </div>
  );
}

export default AddressBlock;
