'use strict';

const showPopupMenu = () => {

    const popupMenu = document.querySelector('.popup-menu');

    document.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('burger-icon')) {
            popupMenu.style.display = 'flex';
        }

        if(target.classList.contains('close-menu-btn') || target.classList.contains('scroll-list')){
            popupMenu.style.display = 'none';
        
        }
    });
};


export default showPopupMenu;

