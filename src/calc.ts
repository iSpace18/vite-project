import './style.css'


const historyValue = document.getElementById('history-value') as HTMLElement
const outputValue = document.getElementById('output-value') as HTMLElement
const keyboadr = document.getElementById('keyboard')
keyboadr?.addEventListener('click', (e)=>{
  const target = e.target as HTMLElement
  if (target.tagName!='BUTTON') return
  if (target.id == 'empty') return
  if (target.id == 'clear') {
    outputValue.textContent = ''
    return
  }
  if (target.id == 'backspace') {
    if (outputValue.textContent) outputValue.textContent = outputValue.textContent.slice(0, outputValue.textContent.length-1)
    return
}
if (target.id == '=') {
    if (outputValue.textContent) {
      const result = eval(outputValue.textContent) 
      historyValue.textContent = result
      outputValue.textContent = ''
    }
    return
  }
  outputValue.textContent += target.id
})