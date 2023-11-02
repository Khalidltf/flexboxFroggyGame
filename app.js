const buttonElement = document.querySelector('button');

function addCss() {
  const textAreaElement = document.querySelector('textarea')
  const cssStyle =  textAreaElement.value
  const forefrontElement = document.getElementById('forefront')
  forefrontElement.style.cssText = cssStyle
}


buttonElement.addEventListener('click', addCss)
