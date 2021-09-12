let canvas = document.getElementById("canvas1");
let CH     = canvas.height;
let CW     = canvas.width;

let context   = canvas.getContext('2d');

let bar = context;
    bar.fillStyle = 'black';
    bar.fillRect(0, CH/2 - 25, CW, 50);

const linear = async (num, epsilone) => {

    let step = epsilone;
    let iterations = 0;
    let ans = 0;

    let point = context;

    while (Math.abs(ans**2 - num) >= epsilone && ans**2 <= num) {

        bar.fillStyle = 'black';
        bar.fillRect(0, CH/2 - 25, CW, 50);

        point.fillStyle = 'white';
        if (num >= 1) {
            point.fillRect(ans*(CW/num), CH/2 - 25, 1, 50)
        } else {
            point.fillRect(ans*(CW), CH/2 - 25, 1, 50)
        }  
        
        ans += step
        iterations++

        await new Promise(r => setTimeout(r, 1));
    }
    return {ans: ans, iterations: iterations};
}

document.getElementById('start1').addEventListener('click', () => {linear(0.88888, 0.01).then(result => console.log(result))})