const keyInput = document.getElementById("key");
const textArea = document.getElementById("text");
const resultDiv = document.getElementById("result");

function encrypt() {
  const key = keyInput.value;
  const text = textArea.value;
  const encryptedText = encryptText(text, key);
  resultDiv.innerHTML = `Encrypted Text: ${encryptedText}`;
}

function decrypt() {
  const key = keyInput.value;
  const encryptedText = resultDiv.innerText;
  const originalText = decryptText(encryptedText, key);
  resultDiv.innerHTML = `Original Text: ${originalText}`;
}

function encryptText(text, key) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    encryptedText += String.fromCharCode((charCode + key[i % key.length]) % 255);
  }
  return encryptedText;
}


function decryptText(encryptedText, key) {
  let originalText = "";
  for (let i = 0; i < encryptedText.length; i++) {
    const charCode = encryptedText.charCodeAt(i);
    originalText += String.fromCharCode((charCode - key[i % key.length]) % 255);
  }
  return originalText;
}
