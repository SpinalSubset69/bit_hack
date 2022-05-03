export const SwithcHeadShakeX = (uniqueId) => {
  const binaryBlock = document.getElementById(uniqueId)
  binaryBlock.classList.remove('animate__headShake')
  setTimeout(() => {
    binaryBlock.classList.add('animate__headShake')
  }, 100)
}

export const SwitchPulse = (uniqueId) => {
  return new Promise((resolve, reject) => {
    const binaryBlock = document.getElementById(uniqueId)
    console.log(uniqueId)
    binaryBlock.classList.remove('animate__flipInX')
    binaryBlock.classList.add('animate__flipOutX')
    setTimeout(() => {
      binaryBlock.classList.add('animate__flipInX')
      binaryBlock.classList.remove('animate__flipOutX')
      resolve()
    }, 500)
  })
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

export const SwitchRotateOut = (uniqueId) => {
  const binaryBlock = document.getElementById(uniqueId)
  binaryBlock.classList.remove('animate__rotateOutDownLeft')
  setTimeout(() => {
    binaryBlock.classList.add('animate__rotateOutDownLeft')
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
