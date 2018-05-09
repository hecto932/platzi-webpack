import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message'
import platziImg from '../images/platzi.png'
import data from './teachers.json'
import renderToDom from './render-to-dom'

import React from 'react'
import { render } from 'react-dom'
import Teachers from '../components/teachers'

const body = document.getElementById('container')

console.log(data)
console.log(document.getElementById('container'))

render(<Teachers data={data} />, body)

data.teachers.forEach((teacher) => {
  const element = document.createElement('li')
  element.textContent = teacher.name
  renderToDom(element)
})

document.write(firstMessage)
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', 50)
img.setAttribute('height', 50)
document.body.append(img)
console.log(`Hola mundo desde external.webpack.config!`)
