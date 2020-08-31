const menu = document.querySelector('.icon-menu');
const subMenu = document.querySelector(".sub-menu");

menu.addEventListener('click', open);

function open() {

window.navigator.vibrate(200);
    subMenu.style.visibility = 'visible';
    setTimeout(function() {
        subMenu.id = 'open';
    }, 200)



};
menu.addEventListener('click', close);

function close() {
    if (subMenu.id === 'open') {
        subMenu.style.visibility = 'hidden';
        setTimeout(function() {
            subMenu.id = 'close';

        }, 200)
    }
};
const arrow = document.querySelector('.arrow')

window.addEventListener('scroll', foo);

function foo() {
    if (window.scrollY == 0) {


        setTimeout(function() {
            arrow.style.visibility = 'hidden';

        }, 100)
    }
};

window.addEventListener("scroll", show);

function show() {
    subMenu.style.visibility = "hidden";
    subMenu.id = 'close';
    arrow.style.visibility = "visible";

}

arrow.addEventListener('click', scrollUp);

function scrollUp() {
    scrollTo(top = 0, left = 0);
    setTimeout(function() {
        arrow.style.visibility = 'hidden';
    }, 100)


};
