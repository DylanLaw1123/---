const morseCode = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
  'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
  'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
  'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..',
  '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----',
  ' ': '/'
};

const reverseMorse = Object.fromEntries(
  Object.entries(morseCode).map(([k, v]) => [v, k])
);

function convertToMorse() {
  const text = document.getElementById('inputText').value.toUpperCase();
  let result = '';
  for (let char of text) {
    if (morseCode[char]) result += morseCode[char] + ' ';
  }
  document.getElementById('output').innerText = result.trim();
}

function convertToText() {
  const morse = document.getElementById('inputText').value.trim().split(' ');
  let result = '';
  for (let code of morse) {
    if (reverseMorse[code]) result += reverseMorse[code];
    else if (code === '/') result += ' ';
  }
  document.getElementById('output').innerText = result;
}

function copyOutput() {
  const output = document.getElementById('output').innerText;
  navigator.clipboard.writeText(output);
  alert('已复制到剪贴板 ✅');
}
