function countCharacters() {
    const textInput = document.getElementById('text');
    const includePunctuationCheckbox = document.getElementById('includePunctuation');
  
    const text = textInput.value;
    const includePunctuation = includePunctuationCheckbox.checked;
  
    // 句読点を含まないとき
    const regex = includePunctuation ? /./gu : /[^\p{P}\p{S}]/gu;
    const characterCount = (text.match(regex) || []).length;
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `文字数: ${characterCount}`;
  }
  
