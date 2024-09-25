const leftBtn = document.querySelector('.arrow-left');
const rightBtn = document.querySelector('.arrow-right');
const imageSlider = document.querySelector('.slider');
const numberOfImages = imageSlider.children.length;
const messageBox = document.querySelector('.message');

let transValue = 0;
let currentImage = 1;

// get bullets
const navBullets = document.querySelector('.nav-bullets');
// creating bullet buttons
for (let i = 1; i <= numberOfImages; i++) {
    const bulletBtn = document.createElement('span');
    bulletBtn.classList.add('btn');
    bulletBtn.id = `${i}`;
    if (i === currentImage) bulletBtn.classList.add('active');
    navBullets.appendChild(bulletBtn);
}
const bulletButtons = Array.from(navBullets.children);

// navigating usingleft arrow button
leftBtn.addEventListener('click', () => {
    if (currentImage === 1) {
        messageBox.classList.add('active');
        setTimeout(() => {
            messageBox.classList.remove('active');
        }, 2500)
    }
    else {
        messageBox.classList.remove('active');
    }
    if (currentImage > 1) {
        currentImage--;
        transValue = -((currentImage - 1) * 600);
        imageSlider.style.transform = `translateX(${transValue}px)`;
        // activating current bullet button
        bulletButtons.forEach(btn => btn.classList.remove('active'));
        bulletButtons[currentImage-1].classList.add('active');
    }
});

// navigating usingleft right button
rightBtn.addEventListener('click', () => {
    if (currentImage === numberOfImages) {
        messageBox.classList.add('active');
        setTimeout(() => {
            messageBox.classList.remove('active');
        }, 2500)
    }
    else {
        messageBox.classList.remove('active');
    }
    if (currentImage < numberOfImages) {
        transValue = -(currentImage * 600);
        imageSlider.style.transform = `translateX(${transValue}px)`;
        currentImage++;
        // activating current bullet button
        bulletButtons.forEach(btn => btn.classList.remove('active'));
        bulletButtons[currentImage-1].classList.add('active');
    }
});

// navigating using bullet buttons
bulletButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        bulletButtons.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        if (+btn.id > currentImage) {
            while(currentImage != +btn.id) {
                rightBtn.click();
            }
        }
        else if (+btn.id < currentImage) {
            while(currentImage != +btn.id) {
                leftBtn.click();
            }
        }
        else {
            return;
        }
    });
});
