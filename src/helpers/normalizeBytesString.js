export const normalizeBinaryString = (dataToNormalize) =>
  dataToNormalize.padStart(8, "0");

export const getDecimalValueFromBinary = (data) => parseInt(data, 2);
