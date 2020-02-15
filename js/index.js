// Your code goes here
//body and stop propagation
const body = document.querySelector('body');
body.addEventListener('click', ()=> {
    body.style.backgroundColor = 'deepSkyBlue';
});

const contentSec = document.querySelector('.content-section.inverse-content');
contentSec.addEventListener('click', (e) => {
    contentSec.style.background = 'whiteSmoke';

    e.stopPropagation();
});

const contentDes = document.querySelector('.content-destination');
contentDes.addEventListener('dblclick', (e) => {
    contentDes.style.background = 'whiteSmoke';

    e.stopPropagation();
});

//stopDefault
const stopNav = document.querySelector('.nav-link');
stopNav.addEventListener('click', (e) => {
    console.log('stop nav');
    e.preventDefault();
});

// .img-fluid.rounded events
const venice = document.querySelector('.img-fluid.rounded');
venice.addEventListener('mouseenter', () => {
    venice.style.transform = 'scale(1.2)';
    venice.style.transition = 'all 0.3s';
});
venice.addEventListener('mouseleave', () => {
    venice.style.transform = 'scale(1)';
});

// nav events
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('scroll', () => {
    mainNav.style.zIndex = '500';
});

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', () => {
    logo.style.color = 'blue';
});
logo.addEventListener('mouseleave', () => {
    logo.style.color = 'black';
});

//button events
const bttn = document.querySelector('.btn');
bttn.addEventListener('mouseenter', () => {
    bttn.style.transform = 'rotate(180deg)';

    setTimeout(() => {
        bttn.style.transform = '';
    }, 1000);
});

