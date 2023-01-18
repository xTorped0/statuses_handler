const { timeScript, postgresScript, autorunScript, ipAdressesScript } = require('./scripts.js') 

window.addEventListener('DOMContentLoaded', () => {
  timeScript()
  postgresScript()
  // autorunScript()
  ipAdressesScript()
  // const replaceText = (selector, text) => {
  //   const element = document.getElementById(selector)
  //   if (element) element.innerText = text
  // }

  // for (const dependency of ['chrome', 'node', 'electron']) {
  //   replaceText(`${dependency}-version`, process.versions[dependency])
  // }

  
})