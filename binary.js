let canvas = document.getElementById("canvas2");
let CH     = canvas.height;
let CW     = canvas.width;

let context   = canvas.getContext('2d');

let bar = context;
    bar.fillStyle = 'black';
    bar.fillRect(0, CH/2 - 25, CW, 50);

const binary = async (num, epsilon) => {
    let low = 0.0
    let high = Math.max(1.0, num) 
    let iterations = 0;

    let ans = (low + high)/2

    let point = context;

    while (Math.abs(ans**2 - num) > epsilon) {        
        bar.fillStyle = 'black';
        bar.fillRect(0, CH/2 - 25, CW, 50); 

        if (ans**2 > num) {
            high = ans
        } else {
            low = ans
        }

        ans = (low + high)/2

        point.fillStyle = 'white';

        if (num >= 1) {
            point.fillRect(ans*(CW/num), CH/2 - 25, 1, 50)
        } else {
            point.fillRect(ans*(CW), CH/2 - 25, 1, 50)
        }
        
        iterations++;
        await new Promise(r => setTimeout(r, 1));
    }
    return {ans: ans, iterations: iterations};
}

document.getElementById('start2').addEventListener('click', () => {binary(0.88888, 0.01).then(result => console.log(result))})