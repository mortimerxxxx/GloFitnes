"use strict";

const showBurger = () => {
    const burger = document.querySelector('.hidden-large'),
        hiddenSmall = document.querySelector('.hidden-small');

    window.addEventListener('resize', function() {
        let x = window.innerWidth;
            if(x < 769){
                burger.style.display = 'block';
                hiddenSmall.style.display = 'none';
            }
            if (x > 768){
                burger.style.display = 'none';
                hiddenSmall.style.display = '';
            }
        });
};

export default showBurger;