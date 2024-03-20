function hideImage() {
  document.getElementById("noMessage").style.visibility = "hidden";
  document.getElementById("withMessage").style.visibility = "visible";
}

function encode() {
  let inputText = document.getElementById("inputText").value;

  hideImage();
  inputText = inputText.replaceAll("e", "enter");
  inputText = inputText.replaceAll("i", "imes");
  inputText = inputText.replaceAll("a", "ai");
  inputText = inputText.replaceAll("o", "ober");
  inputText = inputText.replaceAll("u", "ufat");

  document.getElementById("resultText").innerHTML = inputText;
}

function decode() {
  let inputText = document.getElementById("inputText").value;

  hideImage();
  inputText = inputText.replaceAll("enter", "e");
  inputText = inputText.replaceAll("imes", "i");
  inputText = inputText.replaceAll("ai", "a");
  inputText = inputText.replaceAll("ober", "o");
  inputText = inputText.replaceAll("ufat", "u");

  document.getElementById("resultText").innerHTML = inputText;
}

function copyText(){
  var encryptedText = resultText.value;
  if (navigator.clipboard.writeText(encryptedText)) {
      document.getElementById('copyButton').textContent = "Copiado!";
  }

  setInterval(function() {
      document.getElementById('copyButton').textContent = "Copiar";
  } , 6000);
}