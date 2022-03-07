const money = document.querySelectorAll('.money');
const stack = document.querySelector('.stack');
const result = document.querySelector('.result');

const refresh = document.querySelector('.refresh');
const btn = document.querySelectorAll('.btn');

let total = 0;
stack.textContent = total;

money.forEach((value) => {
  value.onclick = () => {
    total += Number(value.getAttribute('data-value'));
    stack.textContent = total;
  }
});

refresh.onclick = function(){
  total = 0;
  stack.textContent = total;
  result.innerHTML = '';
};

btn.forEach((value) => {
  value.onclick = () => {
    switch(value.getAttribute('data-value')) {
      case 'cola': if(total >= 600) {
        const img = document.createElement('img');
        img.setAttribute('src', '/img/cola.png');
        result.appendChild(img);
        total -= 600;
        stack.textContent = total;
        break;
      } else {
        alert('잔액이 부족합니다.');
        break;
      }
      case 'sprite': if(total >= 700) {
        const img = document.createElement('img');
        img.setAttribute('src', '/img/sprite.png');
        result.appendChild(img);
        total -= 700;
        stack.textContent = total;
        break;
      } else {
        alert('잔액이 부족합니다.');
        break;
      }
      case 'morning': if(total >= 1400) {
        const img = document.createElement('img');
        img.setAttribute('src', '/img/morning.png');
        result.appendChild(img);
        total -= 1400;
        stack.textContent = total;
        break;
      } else {
        alert('잔액이 부족합니다.');
        break;
      }
      case 'bonbon': if(total >= 800) {
        const img = document.createElement('img');
        img.setAttribute('src', '/img/bonbon.png');
        result.appendChild(img);
        total -= 800;
        stack.textContent = total;
        break;
      } else {
        alert('잔액이 부족합니다.');
        break;
      }
      case '17cha': if(total >= 1300) {
        const img = document.createElement('img');
        img.setAttribute('src', '/img/17cha.png');
        result.appendChild(img);
        total -= 1300;
        stack.textContent = total;
        break;
      } else {
        alert('잔액이 부족합니다.');
        break;
      }
      default: null
    }
  }
})