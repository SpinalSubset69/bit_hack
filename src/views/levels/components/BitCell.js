import React from "react";

const BitCell = () => {
  const [bit, setBit] = React.useState(0);
  const [pos] = React.useState(0);

  return <label onClick={() => setBit(bit + 1 - 2 * bit)}>{bit}</label>;
};

export default BitCell;
