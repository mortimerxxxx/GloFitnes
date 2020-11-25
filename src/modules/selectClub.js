const selectClub = () => {
    'use strict';

    let selectClub = document.getElementById('select-club');


    document.addEventListener('click', (event) => {

        let target = event.target;
        if(target.classList.contains('clubs-list-text')){
            selectClub.classList.toggle('active');
        }
    });
};


export default selectClub;