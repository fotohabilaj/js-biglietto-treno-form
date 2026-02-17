console.log('hello');

const nameEl = document.getElementById('name');
const distanceEl = document.getElementById('distance');
const discountEl = document.getElementById('discount');
const formEl = document.querySelector('form');

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    const discount = Number(discountEl.value);
    const distanceTot = distanceEl.value;
    const name = nameEl.value;
    const ticketPrice = (distanceTot*0.21*discount).toFixed(2)
    let ticketType;
    if(discount==0.8){ticketType=('Biglietto under 18')}
    else if (discount==1){ticketType=('Biglietto adulti')}
    else{ticketType=('Biglietto over 65')}
    console.log(discount,distanceTot,name,ticketPrice);
    
    const personEl = document.getElementById('person');
    const ticketEl = document.getElementById('ticket');
    const carrEl = document.getElementById('carr');
    const cpcodeEl = document.getElementById('cpcode');
    const priceEl = document.getElementById('price');
   

    personEl.innerHTML = `Biglietto di: ${name}` ;
    ticketEl.innerHTML = ticketType;
    carrEl.innerHTML = `Carrozza:  ${Math.floor(Math.random() * 10)}`;
    cpcodeEl.innerHTML = `Codice CP: ${Math.floor(Math.random() * 100000)}`;
    priceEl.innerHTML = `${ticketPrice}€`;
    document.getElementById('card').classList.remove('d-none')
})
