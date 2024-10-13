//variables

let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');


//qoutes
const newQoutes = [{
    qoute: '"Dreams dont work unless you do!"',
    person: 'salim rahimi'
}, {

    qoute: '"Make each day your masterpiece"',
    person: 'ali kazimi'
}, {

    qoute: '"Turn your wounds into wesdom"',
    person: 'shabir salih'
}, {

    qoute: '"Every thing you can imagine is real"',
    person: 'Pablo picasso'
}, {

    qoute: '"Whatever you are, be a good one"',
    person: 'Abraham Lincoin'
},];

btn.addEventListener('click' , function() {
    let random = Math.floor(Math.random() * newQoutes.length);

    qoute.innerText = newQoutes[random].qoute;
    person.innerText = newQoutes[random].person;
})