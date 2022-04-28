export const SwithcHeadShakeX = (uniqueId) => {
  const binaryBlock = document.getElementById(uniqueId)
  binaryBlock.classList.remove('animate__headShake')
  setTimeout(() => {
    binaryBlock.classList.add('animate__headShake')
  }, 100)
}

export const SwitchPulse = (uniqueId) => {
  const binaryBlock = document.getElementById(uniqueId)
  binaryBlock.classList.remove('animate__flip')
  setTimeout(() => {
    binaryBlock.classList.add('animate__flip')
  }, 100)
}

export const SwitchBounce = (uniqueId) => {
  const binaryBlock = document.getElementById(uniqueId)
  binaryBlock.classList.remove('animate__bounce')
  setTimeout(() => {
    binaryBlock.classList.add('animate__bounce')
  }, 100)
}

export const SwitchTada = (uniqueId) => {
  const binaryBlock = document.getElementById(uniqueId)
  binaryBlock.classList.remove('animate__tada')
  setTimeout(() => {
    binaryBlock.classList.add('animate__tada')
  }, 100)
}

export const SlideToRight = (index, event) => {
  const row = document.getElementById(index)
  switch (event) {
    case 'enter':
      row.classList.remove('to-right')
      row.classList.add('to-left')
      break
    case 'leave':
      row.classList.remove('to-left')
      row.classList.add('to-right')
      break
  }
}
