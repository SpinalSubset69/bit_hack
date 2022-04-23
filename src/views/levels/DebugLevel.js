import React from "react";
import AddressBlock from "./components/AddressBlock";
import AddressBlockState from "./components/AddressBlockState";
import { nanoid } from "nanoid";

import "./levels.css";

/**
 * This component represents the debug level. This level is for game testing
 * purposes.
 * 
 * @returns {JSX} DebugLevel component.
 */
export function DebugLevel() {
  // "in" AddressBlock's starting AddressBlockState
  const addrBlockIn = new AddressBlockState(
    nanoid(),
    "in",
    [1, 0, 1, 0, 1, 0, 1, 0]
  );

  // "x" AddressBlocks's starting AddressBlockState
  const addrBlockX = new AddressBlockState(
    nanoid(),
    "x",
    [0, 0, 1, 1, 0, 0, 1, 1]
  );

  // "out" AddressBlock's starting AddressBlockState
  const addrBlockOut = new AddressBlockState(
    nanoid(),
    "out",
    [0, 0, 0, 0, 0, 0, 0, 0]
  );

  /**
   * This function flips the bit of a bitCell component, that is: if the
   * bitCell has a value of 0, then this function switches it to a 1 and
   * vice versa.
   * @param {string} id id of the bitCell component
   */
  const flipBit = (id) => {
    setAddressBlocks((oldAddressBlocks) =>
      oldAddressBlocks.map((addressBlock) => {
        var idFound = false;
        let i = 0;

        // find the bitCell id corresponding to its position in the array (0-7)
        // of its respective addressBlock
        for (i = 0; i < 8; i++) {
          if (addressBlock.id + "-" + i === id) {
            idFound = true;
            break;
          }
        }

        // if the id has ben found, flip the bit of the corresponding position
        // (0-7) of the binary array "bits" of its respective addressBlock
        if (idFound) {
          var newBits = addressBlock.bits;
          newBits[i] += 1 - 2 * newBits[i];

          // return the changed addressBlock
          return { ...addressBlock, bits: newBits };
        }

        // return the unchanged addressBlock
        return addressBlock;
      })
    );
  };

  /**
   * This function performs the OR operation on the "in" and "x" addressBlocks
   * and displays the result on the "out" addressBlock. Example: 170 | 51 = 187
   *    in: [1, 0, 1, 0, 1, 0, 1, 0] = 170
   * |   x: [0, 0, 1, 1, 0, 0, 1, 1] =  51
   * = out: [1, 0, 1, 1, 1, 0, 1, 1] = 187
   */
  const orButton = () => {
    setAddressBlocks((oldAddressBlocks) => {
      for (let i = 0; i < 8; i++)
        oldAddressBlocks[2].bits[i] =
          oldAddressBlocks[0].bits[i] | oldAddressBlocks[1].bits[i];

      return oldAddressBlocks.map((addressBlock) => {
        return addressBlock;
      });
    });
  };

  /**
   * This function performs the AND operation on the "in" and "x" addressBlocks
   * and displays the result on the "out" addressBlock. Example: 170 & 51 = 34
   *    in: [1, 0, 1, 0, 1, 0, 1, 0] = 170
   * &   x: [0, 0, 1, 1, 0, 0, 1, 1] =  51
   * = out: [0, 0, 1, 0, 0, 0, 1, 0] =  34
   */
  const andButton = () => {
    setAddressBlocks((oldAddressBlocks) => {
      for (let i = 0; i < 8; i++)
        oldAddressBlocks[2].bits[i] =
          oldAddressBlocks[0].bits[i] & oldAddressBlocks[1].bits[i];
      
      return oldAddressBlocks.map((addressBlock) => {
        return addressBlock
      })
    })
  }

  /**
   * This function performs the XOR operation on the "in" and "x" addressBlocks
   * and displays the result on the "out" addressBlock. Example: 170 ^ 51 = 153
   *    in: [1, 0, 1, 0, 1, 0, 1, 0] = 170
   * ^   x: [0, 0, 1, 1, 0, 0, 1, 1] =  51
   * = out: [1, 0, 0, 1, 1, 0, 0, 1] = 153
   */
  const xorButton = () => {
    setAddressBlocks((oldAddressBlocks) => {
      for (let i = 0; i < 8; i++)
        oldAddressBlocks[2].bits[i] =
          oldAddressBlocks[0].bits[i] ^ oldAddressBlocks[1].bits[i];
      
      return oldAddressBlocks.map((addressBlock) => {
        return addressBlock
      })
    })
  }

  /**
   * React state of the addressBlocks and the setAddressBlocks() function.
   * addressBlocks is an array of AddressBlockState objects.
   */
  const [addressBlocks, setAddressBlocks] = React.useState(() => {
    const newAddressBlocks = [];
    newAddressBlocks.push(addrBlockIn);
    newAddressBlocks.push(addrBlockX);
    newAddressBlocks.push(addrBlockOut);
    return newAddressBlocks;
  });

  /**
   * A map of addressBlock components in relation to the array of addressBlock
   * objects.
   */
  const addressBlockComponents = addressBlocks.map((addressBlock) => (
    <AddressBlock
      key={addressBlock.id}           // key property
      id={addressBlock.id}            // id property
      label={addressBlock.label}      // label property: name of the address
      bits={addressBlock.bits}        // bits property: array of 1's and 0's
      value={addressBlock.getValue()} // getValue() function property
      flipBit={flipBit}
    />
  ));

  return (
    <div className="level">
      {addressBlockComponents}
      <button onClick={orButton}>|</button>
      <button onClick={andButton}>&</button>
      <button onClick={xorButton}>^</button>
    </div>
  );
}

export default DebugLevel;
