let element = document.querySelector('[data-write="true"]');
let elementContent = element.innerHTML;
let index = 0;

element.innerHTML = '';

let writeSpeed = parseInt(element.getAttribute('data-write-speed')) || 1000;

    function iterate() {
    let intervallo = setInterval(() => {
        if (index < elementContent.length) {
        element.innerHTML += elementContent[index];
        index++;
        } else {
        clearInterval(intervallo);
        }
    }, writeSpeed);
    }

iterate();
