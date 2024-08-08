// document.getElementById('owl').onclick = function() {
//     alert('You clicked on the Owl!');
// }

// document.getElementById('owl').addEventListener('click', function() {
//     alert('You clicked on the Owl!');
// })

// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log(e);
//     console.log(e.pageX); // Get the horizontal coordinate of the mouse pointer
//     console.log(e.pageY); // Get the vertical coordinate of the mouse pointer
// }, false)


// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul")
// }, true)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked")
//     e.stopPropagation()
// }, false)


// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault(); // Prevent the default link behavior
//     e.stopPropagation() // Stop the event from bubbling up to the parent elements
//     console.log("google clicked");
    
// },false)



document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode); // Get the parent node of clicked element)
    //let displayNone = e.target.parentNode
    //displayNone.remove()// Remove the clicked element from the DOM
    
    //or

    //let displayNone = e.target.parentNode
    // displayNone.parentNode.removeChild(displayNone) // Remove the clicked element from its parent node

    //or

    console.log(e.target.tagName); // Get the tag name of clicked element
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let displayNone = e.target.parentNode
        displayNone.remove()
    }
    
}, false)