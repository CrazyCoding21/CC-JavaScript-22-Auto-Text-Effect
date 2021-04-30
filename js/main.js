const textBlock = document.getElementById('text');
const speedBlock = document.getElementById('speed');
const text = 'Entering the Matrix...';

let index = 1;
let speed = 200 / speedBlock.value;

writeText();

function writeText(){
    textBlock.innerText = text.slice(0, index);

    index++;

    if(index > text.length){
        index = 1;
    }

    setTimeout(writeText, speed);

}

speedBlock.addEventListener('input', (e) => speed = 300 / e.target.value);