const coin100 = document.querySelector('.coin img:nth-of-type(1)');
const coin500 = document.querySelector('.coin img:nth-of-type(2)');
const coin1000 = document.querySelector('.coin img:nth-of-type(3)');
const refresh = document.querySelector('.coin span');
const stack = document.querySelector('.stack');

const drink = document.querySelectorAll('.result img');
const cola = document.querySelector('.result img:nth-of-type(1)');
const sprite = document.querySelector('.result img:nth-of-type(2)');
const morning = document.querySelector('.result img:nth-of-type(3)');
const bonbon = document.querySelector('.result img:nth-of-type(4)');
const cha = document.querySelector('.result img:nth-of-type(5)');

const colaBtn = document.querySelector('.button span:nth-of-type(1)');
const spriteBtn = document.querySelector('.button span:nth-of-type(2)');
const morningBtn = document.querySelector('.button span:nth-of-type(3)');
const bonbonBtn = document.querySelector('.button span:nth-of-type(4)');
const chaBtn = document.querySelector('.button span:nth-of-type(5)');

let total = 0;
stack.textContent = total;

coin100.onclick = function(){
  total += 100;
  stack.textContent = total;
}
coin500.onclick = function(){
  total += 500;
  stack.textContent = total;
}
coin1000.onclick = function(){
  total += 1000;
  stack.textContent = total;
}
refresh.onclick = function(){
  total = 0;
  stack.textContent = total;
  drink.forEach(function(drink){
    drink.classList.remove('active');
  })
}

colaBtn.onclick = function(){
  if(total >= 600){
    cola.classList.add('active');
    total -= 600;
    stack.textContent = total;
  }else{
    alert('잔액이 부족합니다.')
  }
}
spriteBtn.onclick = function(){
  if(total >= 700){
    sprite.classList.add('active');
    total -= 700;
    stack.textContent = total;
  }else{
    alert('잔액이 부족합니다.')
  }
}
morningBtn.onclick = function(){
  if(total >= 1400){
    morning.classList.add('active');
    total -= 1400;
    stack.textContent = total;
  }else{
    alert('잔액이 부족합니다.')
  }
}
bonbonBtn.onclick = function(){
  if(total >= 800){
    bonbon.classList.add('active');
    total -= 800;
    stack.textContent = total;
  }else{
    alert('잔액이 부족합니다.')
  }
}
chaBtn.onclick = function(){
  if(total >= 1300){
    cha.classList.add('active');
    total -= 1300;
    stack.textContent = total;
  }else{
    alert('잔액이 부족합니다.')
  }
}