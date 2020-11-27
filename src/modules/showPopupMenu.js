'use strict';

const showPopupMenu = () => {

    const burgerBtn = document.getElementById('burger-icon'),
    popupMenu = document.querySelector('.popup-menu');

    burgerBtn.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    });

    document.addEventListener('click', (event) => {

        let target = event.target;
        if(target.classList.contains('close-menu-btn') || target.classList.contains('scroll-list')){
            popupMenu.style.display = 'none';
        
        }
    });
};


export default showPopupMenu;

