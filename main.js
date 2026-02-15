console.log('hello');

const ageEl = document.getElementById('age');
const distanceEl = document.getElementById('distance');
const butEl = document.getElementById('button')
const formEl = document.querySelector('form')

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    let age= ageEl.value;
    let distanceTot= distanceEl.value;
    console.log(age,distanceTot);
})

