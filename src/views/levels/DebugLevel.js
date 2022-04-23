import React from "react";
import AddressBlock from "./components/AddressBlock";
import AddressBlockState from "./components/AddressBlockState";
import { nanoid } from "nanoid";

import "./levels.css";

export function DebugLevel() {
  const addrBlockIn = new AddressBlockState(
    nanoid(),
    "in",
    [1, 0, 1, 0, 1, 0, 1, 0]
  );
  const addrBlockX = new AddressBlockState(
    nanoid(),
    "x",
    [0, 0, 1, 1, 0, 0, 1, 1]
  );
  const addrBlockOut = new AddressBlockState(
    nanoid(),
    "out",
    [0, 0, 0, 0, 0, 0, 0, 0]
  );

  const flipBit = (id) => {
    setAddressBlocks((oldAddressBlocks) =>
      oldAddressBlocks.map((addressBlock) => {
        var idFound = false;
        let i = 0;

        for (i = 0; i < 8; i++) {
          if (addressBlock.id + "-" + i === id) {
            idFound = true;
            break;
          }
        }

        if (idFound) {
          var newBits = addressBlock.bits;
          newBits[i] += 1 - 2 * newBits[i];
          return { ...addressBlock, bits: newBits };
        }

        return addressBlock;
      })
    );
  };

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

  const [addressBlocks, setAddressBlocks] = React.useState(() => {
    const newAddressBlocks = [];
    newAddressBlocks.push(addrBlockIn);
    newAddressBlocks.push(addrBlockX);
    newAddressBlocks.push(addrBlockOut);
    return newAddressBlocks;
  });

  const addressBlockElements = addressBlocks.map((addressBlock) => (
    <AddressBlock
      key={addressBlock.id}
      id={addressBlock.id}
      label={addressBlock.label}
      bits={addressBlock.bits}
      value={addressBlock.getValue()}
      flipBit={flipBit}
    />
  ));

  return (
    <div className="level">
      {addressBlockElements}
      <button onClick={orButton}>|</button>
      <button onClick={andButton}>&</button>
      <button onClick={xorButton}>^</button>
    </div>
  );
}

export default DebugLevel;
