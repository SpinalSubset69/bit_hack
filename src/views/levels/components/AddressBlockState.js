/**
 * This class represents an AddressBlock's internal state. An instantiated
 * object of this class is required to build an AddressBlock component.
 */
export class AddressBlockState {
  /**
   * @param {string} id id of the AddressBlockState.
   * @param {string} label name of the AddressBlockState.
   * @param {Array(num)} bits array of 1's and 0's. Length 8.
   */
  constructor(id, label, bits) {
    this.id = id;
    this.label = label;
    this.bits = bits;
  }

  /**
   * Calulates the value of the binary array "bits" in decimal.
   * @returns {num} the value of the binary array "bits" in decimal.
   */
  getValue = () => {
    let value = 0;

    for (let i = 0; i < 8; i++) value += this.bits[7 - i] * Math.pow(2, i);

    return value;
  };
}

export default AddressBlockState;
