function generateRandomNumber() {
  const randomNumber = getRndInteger(0, 10000);
  document.getElementById('numberbox').value = randomNumber;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
