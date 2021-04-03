let progress = document.getElementById('progress');
let circles = document.querySelectorAll('.circle');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let currentActive = 0;
next.addEventListener('click', function () {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener('click', function () {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 0
    }

    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    let actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive === circles.length) {
        next.disabled = true;
    } else if (currentActive === 0) {
        prev.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}
