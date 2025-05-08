window.onload = function() {
    const button = document.getElementById('myButton');

    // click event listener
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
}
// 
// function buttonClicked() {
//     alert('Button was clicked!');
// }


// 2. Hover effecr
const button = document.getElementById('myButton');
       // hover event listener
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'red';
}
);
button.addEventListener('mouseout', function() {
    setTimeout(() => {
        button.style.backgroundColor = '';
    },1000);
});
// Keypress event
const Keypress = document.getElementById('keypress');
// keypress event listener
document.addEventListener('keypress', function(event) { // event: Contains information about which key was pressed.
    if (event.key === 'Enter') { //event: Contains information about which key was pressed.
        alert('Enter key was pressed!');
    }
}); 

// double click event
const doubleClick = document.getElementById('doubleClick');
// double click event listener
document.addEventListener('dblclick', function() {
    alert('Double click event was triggered!');
}
);

// 2. interactive Elements
const img = document.getElementById('myImage');

// on click move the ball to the right gradually

let pos = 0;
function moveRight() {
    if (pos < 350) {
        pos++;
        img.style.left = pos + 'px';
        // img.style.transition = 'left 0.1s';
        requestAnimationFrame(moveRight);
    }
}
img.addEventListener('click', moveRight);




