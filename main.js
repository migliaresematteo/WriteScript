let elements = document.querySelectorAll('[data-textScript="write"]');

function handleWriteEffect(element) {
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
}

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            handleWriteEffect(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

elements.forEach(element => {
    observer.observe(element);
});
