console.log('hello');

const ageEl = document.getElementById('age');
const distanceEl = document.getElementById('distance');
const butEl = document.getElementById('button')

butEl.addEventListener('click', function(){
    let age= ageEl.value;
    let distanceTot= distanceEl.value;
    console.log(age,distanceTot);
})

