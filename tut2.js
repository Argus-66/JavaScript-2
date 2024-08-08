const sayArgus = function () {
  console.log("Argus");
}
const changeText = function () {
    document.querySelector('h1').innerHTML = "Ghost Over and Out!";
}

const changeMe = setTimeout(changeText, 2000);

document.querySelector('#stop').addEventListener('click', function () {
    clearTimeout(changeMe)
    console.log("Timeout cleared");
})