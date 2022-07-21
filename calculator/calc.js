
const buttons = document.querySelectorAll('.button');
const amount = document.querySelector('.amount');
const total = document.querySelector('.total');


var percentage;
var tipAmount;
let tipTotal = 0;

buttons.forEach(function (btn){
  btn.addEventListener('click', function(){
    let button = btn.innerText.replace('%', '');
    //console.log(button);
    //let billInput = document.querySelector('.bill-input').value;
    let dollar = document.querySelector('.dollar-input').value;
    let nop = document.querySelector('.person-input').value;
    
    let peopleInput = document.querySelector('.people-input');
    
    
    percentage = (button/100);
    //console.log(dollar, nop)
    tipAmount = (percentage*dollar)*nop;
    tipAmount = Math.floor(tipAmount * 100) /100;
    amount.innerText = '$' + tipAmount.toFixed(2);
    
    
    tipTotal += tipAmount;
    total.innerText = '$' + tipTotal.toFixed(2);
    
    if(nop == '0'){
        //console.log(true);
        //console.log(nop);
      peopleInput.classList.add('danger');
      alert('Number of persons cannot be 0');
    } else{
      //console.log(false);
      peopleInput.classList.remove('danger');
    }
    
  });
});


const reset = document.querySelector('.reset-button');

reset.addEventListener('click', function(){
  document.querySelector('.person-input').value = '';
  document.querySelector('.dollar-input').value = '';
  amount.innerText = '$0.00';
  total.innerText = '$0.00';
})
