import { getDecimalValueFromBinary } from "./normalizeBytesString";

export const orOperation = (data) => {
  return data[0] | data[1];
};

export const andOperation = (data) => {
  return data[0] & data[1];
};

export const xorOperation = (data) => {
  return data[0] ^ data[1];
};
