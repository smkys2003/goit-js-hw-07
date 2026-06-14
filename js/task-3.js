const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', getOutputText);

function getOutputText(event) {
  const currentInputText = event.currentTarget.value.trim();
  if (currentInputText === '') {
    outputText.textContent = 'Anonymous';
  } else {
    outputText.textContent = currentInputText;
  }
}
