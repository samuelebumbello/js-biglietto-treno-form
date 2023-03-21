// prezzo del biglietto per km(0,21)
const priceKm = 0.21;

//BOTTONI
const firstbutton = document.getElementById('firstbutton');
const secondbutton = document.getElementById('secondbutton');

firstbutton.addEventListener('click' , function(){

    //nome dell'utente inserito
    const userName = document.getElementById('nameuser').value;
    //km che vuole fare l'utente
    const userKm = document.getElementById('kmuser').value;

    let age = document.getElementById('age').value;
    console.log('Fascia di età', age)

    kmuser = userKm.value;
    console.log('Km da percorrere', userKm);

    nameuser = userName.value;
    console.log('Nome e Cognome', userName);

    let standardPrice = priceKm * userKm;
    console.log('Prezzo standard', standardPrice);

    let discountPrice = standardPrice;

    if(age == 'minorenne'){
        discountPrice -= standardPrice * 20 / 100;
        console.log('Prezzo scontato 20%', discountPrice);
    }else if(age == 'over65'){
        discountPrice -= standardPrice * 40 / 100;
        console.log('Prezzo scontato 40%', discountPrice);

    }

    const text = document.querySelector('.card')

    if(text.classList.contains('hide')){
        text.classList.remove('hide')
    }

    let input = document.getElementById('ticketname');
    let output = document.getElementById('output');
    ticketname = userName.value;
    output.innerHTML = userName
    userName.value = "";
})

secondbutton.addEventListener('click' , function(){
    
    const ticket = document.querySelector('.ticket');

    if(ticket){
        ticket.classList.add('hide');
    }
})