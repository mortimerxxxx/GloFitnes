'use strict';

const scrollTop = () => {

    let btnToTop = document.getElementById('totop');

    btnToTop.style.display = 'none';
    window.addEventListener('scroll', () => {
        
        if(window.pageYOffset > 680) {
            btnToTop.style.display = 'block';
        }else {
            btnToTop.style.display = 'none';
        }
    });

    btnToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

};


export default scrollTop;