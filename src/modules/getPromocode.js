'use strict';

const getPromocode = () => {
    let oneMonth = document.getElementById('m1'),
        sixMonth = document.getElementById('m2'),
        nineMonth = document.getElementById('m3'),
        twelveMonth = document.getElementById('m4'),
        time = document.querySelector('.time'),
        inputPromo = document.getElementById('promo'),
        priceTotal = document.getElementById('price-total');
    
        time.addEventListener('click', () => {
        if(oneMonth.checked){
            priceTotal.innerHTML = 1999;
        }
        if(sixMonth.checked){
            priceTotal.innerHTML = 9900;
        }
        if(nineMonth.checked) {
            priceTotal.innerHTML = 13900;
        }
        if(twelveMonth.checked){
            priceTotal.innerHTML = 19900;
        }
    });
    
    inputPromo.addEventListener('input', () => {
        if(inputPromo.value === 'ТЕЛО2020' && oneMonth.checked) {
            priceTotal.innerHTML = Math.floor(1999 - (1999 * 0.3)) ;
        }
        if(inputPromo.value === 'ТЕЛО2020' && sixMonth.checked) {
            priceTotal.innerHTML = Math.floor(9900 - (9900 * 0.3)) ;
        }
        if(inputPromo.value === 'ТЕЛО2020' && nineMonth.checked) {
            priceTotal.innerHTML = Math.floor(13900 - (13900 * 0.3)) ;
        }
        if(inputPromo.value === 'ТЕЛО2020' && twelveMonth.checked) {
            priceTotal.innerHTML = Math.floor(19900 - (19900 * 0.3)) ;
        }
    });

};

export default getPromocode;