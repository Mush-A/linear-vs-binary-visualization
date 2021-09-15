import linear from './linear.js'
import binary from './binary.js'

let button = document.getElementById('play');

button.addEventListener('click', async () => {
    let number = document.getElementById('number').value;
    number = Number.parseFloat(number);

    let speed  = document.getElementById('speed').value;
    speed  = Number.parseInt(speed);

    if (number && speed) {
        let b = await binary(number, speed);
        let l = await linear(number, speed);
        console.log('linear', l,'binary', b)
    } else {
        alert('Please enter a number')
    }
})