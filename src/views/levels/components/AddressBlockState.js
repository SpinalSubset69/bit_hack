class AddressBlockState {
  constructor(id, label, bits) {
    this.id = id;
    this.label = label;
    this.bits = bits;
  }

  getValue = () => {
    let sum = 0;

    for (let i = 0; i < 8; i++) sum += this.bits[7 - i] * Math.pow(2, i);

    return sum;
  };
}

export default AddressBlockState;
