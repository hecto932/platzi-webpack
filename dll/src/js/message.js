'use strict'

import renderToDOM from './render-to-dom'
import makeMessage from './make-message'

const waitTime = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve('Han pasado los 3 segundos... OMG!')
    }, 3000)
  } catch (e) {
    reject(e)
  }
})

module.exports = {
  firstMessage : 'Hola mundo desde un modulo',
  delayedMessage: async () => {
    const message = await waitTime;
    console.log(message)
    renderToDOM(makeMessage(message))
  }
}
