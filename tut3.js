let internalID;

const sayDate = function(str) {
    console.log(str, Date.now());
}

const changeText = function (text) {
    document.querySelector('h1').innerHTML = text;
}

document.querySelector('#start').addEventListener('click', function () {
    if (!internalID) {  // Only start if not already running
        changeText("Ghost Affermative");  // Set h1 text to "Ghost" when interval starts
        internalID = setInterval(sayDate, 1000, "Ghost ");
        console.log("Interval started");
    }
})

document.querySelector('#stop').addEventListener('click', function () {
    if (internalID) {
        clearInterval(internalID);
        internalID = null;  // Reset the interval ID
        changeText("Ghost Over and Out!");  // Change text to "Ghost Over and Out!" when stopped
        console.log("Interval stopped");
    }
})