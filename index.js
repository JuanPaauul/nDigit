document.addEventListener("DOMContentLoaded", function() {
  // Agrega tu código aquí
  document.getElementById("n-digit").addEventListener("submit", function(event) {
    event.preventDefault();
    var digit = document.getElementById("n-number").value;
    var theNumber = findNDigit(digit);
    document.getElementById("number").innerHTML  = theNumber.Number
    document.getElementById("belongs-to").innerHTML  =theNumber.BelongsTo
    document.getElementById("position").innerHTML  =theNumber.position
  });
});

const number = {
  Number: 0,
  BelongsTo: 0,
  position: 0
}

function findNDigit(digit){
  var currentNumber = 0;
  var counter = 0;
  for(var i = 0; i <= digit; i++){
    for(var j = 0; j < currentNumber.toString().length; j++){
      number.Number = currentNumber.toString()[j];
      number.BelongsTo = currentNumber.toString();
      number.position = j + 1;
      if(counter == digit)
        return number;
      counter++;
    }
    currentNumber++;
  }
}