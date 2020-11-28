'use strict';

const getPromocode = () => {
    let oneMonth = document.getElementById('m1'),
        sixMonth = document.getElementById('m2'),
        nineMonth = document.getElementById('m3'),
        twelveMonth = document.getElementById('m4'),
        inputPromo = document.getElementById('promo'),
        priceTotal = document.getElementById('price-total'),
        cardLetoMozaika = document.getElementById('card_leto_mozaika'),
        cardLetoSchelkovo = document.getElementById('card_leto_schelkovo'),
        club = document.getElementById('card_order');

        club.addEventListener('click', () => {
            if(cardLetoMozaika.checked){
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
            }
            if(cardLetoSchelkovo.checked) {
                    if(oneMonth.checked){
                        priceTotal.innerHTML = 1999 + 1000;
                    }
                    if(sixMonth.checked){
                        priceTotal.innerHTML = 9900 + 5000;
                    }
                    if(nineMonth.checked) {
                        priceTotal.innerHTML = 13900 + 7000;
                    }
                    if(twelveMonth.checked){
                        priceTotal.innerHTML = 19900 + 5000;
                    }
            }

            inputPromo.addEventListener('input', () => {
                if(inputPromo.value === 'ТЕЛО2020' && oneMonth.checked && cardLetoMozaika.checked) {
                    priceTotal.innerHTML = Math.floor(1999 - (1999 * 0.3)) ;
                }
                if(inputPromo.value === 'ТЕЛО2020' && sixMonth.checked && cardLetoMozaika.checked) {
                    priceTotal.innerHTML = Math.floor(9900 - (9900 * 0.3)) ;
                }
                if(inputPromo.value === 'ТЕЛО2020' && nineMonth.checked && cardLetoMozaika.checked) {
                    priceTotal.innerHTML = Math.floor(13900 - (13900 * 0.3)) ;
                }
                if(inputPromo.value === 'ТЕЛО2020' && twelveMonth.checked && cardLetoMozaika.checked) {
                    priceTotal.innerHTML = Math.floor(19900 - (19900 * 0.3)) ;
                }
        
        
                if(inputPromo.value === 'ТЕЛО2020' && oneMonth.checked && cardLetoSchelkovo.checked) {
                    priceTotal.innerHTML = Math.floor(2999 - (2999 * 0.3)) ;
                }
                if(inputPromo.value === 'ТЕЛО2020' && sixMonth.checked && cardLetoSchelkovo.checked) {
                    priceTotal.innerHTML = Math.floor(14900 - (14900 * 0.3)) ;
                }
                if(inputPromo.value === 'ТЕЛО2020' && nineMonth.checked && cardLetoSchelkovo.checked) {
                    priceTotal.innerHTML = Math.floor(21900 - (21900 * 0.3)) ;
                }
                if(inputPromo.value === 'ТЕЛО2020' && twelveMonth.checked && cardLetoSchelkovo.checked) {
                    priceTotal.innerHTML = Math.floor(24900 - (24900 * 0.3)) ;
                }
        
            });
    });
};

export default getPromocode;