export default function makeMessage(msg) {
  const element = document.createElement('p')
  element.textContent = msg
  return element
}