import { getDecimalValueFromBinary } from './normalizeBytesString'

export const orOperation = (data) => {
  return (
    getDecimalValueFromBinary(data[0].join('')) |
    getDecimalValueFromBinary(data[1].join(''))
  )
}


export const andOperation = (data) => {
    return (
      getDecimalValueFromBinary(data[0].join('')) &
      getDecimalValueFromBinary(data[1].join(''))
    )
  }

  export const xorOperation = (data) => {
    return (
      getDecimalValueFromBinary(data[0].join('')) ^
      getDecimalValueFromBinary(data[1].join(''))
    )
  }
