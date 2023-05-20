let getImput = document.querySelector('#input1');
let getRes = document.querySelector('#input2');
let button = document.querySelector('#btn');

button.addEventListener('click', function () {
   getRes.value = Math.pow(getImput.value, 2);
})

