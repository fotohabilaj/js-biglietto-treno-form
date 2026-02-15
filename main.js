console.log('hello');

const nameEl = document.getElementById('name');
const distanceEl = document.getElementById('distance');
const butEl = document.getElementById('button');
const discountEl = document.getElementById('discount');
const formEl = document.querySelector('form');

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    let discount = Number(discountEl.value);
    let distanceTot = distanceEl.value;
    let name = nameEl.value;
    console.log(discount,distanceTot,name);
})

