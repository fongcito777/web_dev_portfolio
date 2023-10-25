function translateToPigLatin() {
    var inputText = document.getElementById("textToTranslate").value;
    var translatedText = igpayAtinlay(inputText);
    document.getElementById("translatedText").textContent = translatedText;
  }
  
  function igpayAtinlay(text) {
    var returnArray = [],
      wordArray = text.split(' ');
  
    for (var i = 0; i < wordArray.length; i++) {
      var word = wordArray[i];
      var beginning = word.charAt(0);
  
      if (/[aeiouAEIOU]/.test(beginning)) {
        returnArray.push(word += 'way');
        continue;
      }
  
      for (var j = 1; j < word.length; j++) {
        if (/[aeiouAEIOU]/.test(word.charAt(j))) {
          break;
        } else {
          beginning += word.charAt(j);
        }
      }
      returnArray.push(word.substr(beginning.length) + beginning + 'ay');
    }
    return returnArray.join("  ");
  }
  
  // Some examples of expected outputs
  console.log(igpayAtinlay("pizza")); // "izzapay"
  console.log(igpayAtinlay("apple")); // "appleway"
  console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"  