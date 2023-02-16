function genPin() {
  const pinGet = Math.round(Math.random() * 10000);
  const pinString = pinGet + "";
  const pinLength = pinString.length;
  if (pinLength == 4) {
    return pinGet;
  } else {
    return genPin();
  }
}
document.getElementById("pin-gen-btn").addEventListener("click", function () {
  const pin = genPin();
  document.getElementById('pin-field').value = pin;
});

document.getElementById('number-btn').addEventListener('click', function (e) {
  const number = e.target.innerText
  const inputNumber = document.getElementById('pin-matching-field');
  const previousNumber = inputNumber.value;
  if (number == 'C') {
    inputNumber.value = ''
  } else if (number == '<'){
    const digits = previousNumber.split('');
    digits.pop()
    const newDigits = digits.join('')
    inputNumber.value = newDigits
  }
  else {
    const newNumber = previousNumber + number
    inputNumber.value = newNumber;
  }
})

document.getElementById('verify-pin').addEventListener('click', function(){
  const currentPin = document.getElementById('pin-field').value;
  const inputPin = document.getElementById('pin-matching-field').value;
  const notMatch = document.getElementById('not-matched');
  const matched = document.getElementById('matched')
  if(currentPin === inputPin){
    matched.style.display = 'block'
    notMatch.style.display = 'none'
  } else {
    matched.style.display = 'none'
    notMatch.style.display = 'block'
  }
})