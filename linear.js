let canvas = document.getElementById("canvas1");
let CH     = canvas.height;
let CW     = canvas.width;

let context = canvas.getContext('2d');

let bar = context;
    bar.fillStyle = 'black';
    bar.fillRect(0, CH/2 - 25, CW, 50);

const linear = async (num, speed) => {
    const epsilon = 0.01;

    let iterations = 0;
    let ans = 0;

    let point = context;

    while (Math.abs(ans**2 - num) >= epsilon && ans**2 <= num) {
        ans += epsilon

        bar.fillStyle = 'black';
        bar.fillRect(0, CH/2 - 25, CW, 50);

        point.fillStyle = 'white';
        
        if (num > 1) {
            point.fillRect(ans*(CW/num), CH/2 - 25, 2, 50)
        } else {
            point.fillRect(ans*(CW), CH/2 - 25, 2, 50)
        }  
        


        iterations++
        await new Promise(r => setTimeout(r, speed));
    }
    return {ans: ans, iterations: iterations};
}

export default linear;