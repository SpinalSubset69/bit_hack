import React from "react";
import BitCell from "./BitCell";

class AddressBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0 };
    this.bits = [0, 0, 0, 0, 0, 0, 0, 0];
  }

  updateAddressBlock = (i) => {
    this.bits[i] = this.bits[i] + 1 - 2 * this.bits[i];

    var newSum = 0;
    for (var i = 0; i < 8; i++) {
      newSum += this.bits[i] * Math.pow(2, i);
    }
    this.setState({ sum: newSum });
  };

  render() {
    var bitArray = [];

    for (var i = 0; i < 8; i++) {
      bitArray.push(
        <div
          className="BitCell"
          key={i}
          onClick={this.updateAddressBlock.bind(this, i)}
        >
          <BitCell />
        </div>
      );
    }

    return (
      <div className="AddressBlock">
        {bitArray}
        <label>{this.state.sum}</label>
      </div>
    );
  }
}

export default AddressBlock;
