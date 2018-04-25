import './css/estilos.css'
import { firstMessage, delayedMessage } from './js/message'
import platziImg from './images/platzi.png'

document.write(firstMessage)
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', 50)
img.setAttribute('height', 50)
document.body.append(img)
console.log(`Hola mundo desde external.webpack.config!`)
