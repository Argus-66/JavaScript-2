//generating a random color

let intervalID

const randomColor = function() {
    const hex = "0123456789ABCDEF";

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


const startChangingColor = function() {

    intervalID = setInterval(changeBgColor, 1000)

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
        console.log(document.body.style.backgroundColor)
    }
    

    
};
const stopChangingColor = function() {
    clearInterval(intervalID);
    document.body.style.backgroundColor = randomColor()
    console.log(document.body.style.backgroundColor)
    console.log('Color changing stopped')
};

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)