// defining variables
var one = document.querySelector('.one');
var Display = document.querySelector('#Display');
let currentDisplay = '';
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');
var mul = document.querySelector('.mul');
var divide = document.querySelector('.divide');
var zero = document.querySelector('.zero');
var clear = document.querySelector('.c');
var equal = document.querySelector('.equal');
var dot = document.querySelector('.dot');

//functioning of buttons

one.addEventListener('click',function(){
    currentDisplay = currentDisplay + '1';
    document.querySelector('#display').value =  currentDisplay;
})
two.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '2';
     document.querySelector('#display').value =  currentDisplay;
});

three.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '3';
     document.querySelector('#display').value =  currentDisplay;
})
four.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '4';
    document.querySelector('#display').value =  currentDisplay;
})
five.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '5';
    document.querySelector('#display').value =  currentDisplay;
})
six.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '6';
    document.querySelector('#display').value =  currentDisplay;
})
seven.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '7';
    document.querySelector('#display').value =  currentDisplay;
})
eight.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '8';
    document.querySelector('#display').value =  currentDisplay;
})
nine.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '9';
    document.querySelector('#display').value =  currentDisplay;
})
plus.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '+';
     document.querySelector('#display').value =  currentDisplay;
})

minus.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '-';
     document.querySelector('#display').value =  currentDisplay;
})
mul.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '*';
     document.querySelector('#display').value =  currentDisplay;
})
divide.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '/';
     document.querySelector('#display').value =  currentDisplay;
})

zero.addEventListener('click',function(){
     currentDisplay =  currentDisplay + '0';
     document.querySelector('#display').value =  currentDisplay;
})

dot.addEventListener('click',function(){
    currentDisplay =  currentDisplay + '.';
    document.querySelector('#display').value =  currentDisplay;
})


clear.addEventListener('click',function(){

    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
})

equal.addEventListener('click',function(){
    currentDisplay =  eval(currentDisplay);
   document.querySelector('#display').value =  currentDisplay;
})