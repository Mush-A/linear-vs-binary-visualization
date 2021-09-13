import linear from './linear.js'
import binary from './binary.js'

let button = document.getElementById('play');

button.addEventListener('click', async () => {
    let number = document.getElementById('number').value;
    number = Number.parseFloat(number);

    let speed  = document.getElementById('speed').value;
    speed  = Number.parseInt(speed);

    console.log(number, speed)
    if (number && speed) {
        await linear(number, speed);
        await binary(number, speed);
    } else {
        alert('Please enter a number')
    }
})