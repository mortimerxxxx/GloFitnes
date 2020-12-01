const togglePopUp = () => {
    'use strict';
    const freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        fixedGift = document.getElementById('gift'),
        formContentThanks = document.querySelector('.form-content-thanks');

        document.addEventListener ('click', (event) => {
            let target = event.target;

            if(target.classList.contains('free-visit-popup')){
                freeVisitForm.style.display = 'block';
                freeVisitForm.style.opacity = '0';
                let n = 0;
                const timer = setInterval(() => {
                    n+=0.1;
                    freeVisitForm.style.opacity = `${n}`;

                    if(freeVisitForm.style.opacity === '1') {
                        clearInterval(timer);
                    }
                }, 30);

            }else if(target.classList.contains('close_icon') || target.classList.contains('overlay') ||
            target.classList.contains('close-btn')) {
                const nameInput = document.querySelectorAll('name_input'),
                    phoneInput = document.querySelectorAll('phone_input');

                    freeVisitForm.style.opacity = "1";
                    callbackForm.style.opacity = "1";
                    fixedGift.style.opacity = "1";
                    let n = 1;
                    const timer = setInterval(() => {
                        n-=0.1;
                        freeVisitForm.style.opacity = `${n}`;
                        callbackForm.style.opacity = `${n}`;
                        fixedGift.style.opacity = `${n}`;
                        if((freeVisitForm.style.opacity === "-0.1") || (callbackForm.style.opacity === "-0.1") || 
                        (fixedGift.style.opacity === "-0.1")) {
                            nameInput.value = '';
                            phoneInput.value = '';
                            clearInterval(timer);
                            freeVisitForm.style.display = 'none';
                            callbackForm.style.display = 'none';
                            fixedGift.style.display = 'none';
                        }
                    }, 30);
            }

            else if(target.classList.contains('callback-btn')) {
                    callbackForm.style.display = 'block';
                    callbackForm.style.opacity = '0';
                    let n = 0;
                    const timer = setInterval(() => {
                        n+=0.1;
                        callbackForm.style.opacity = `${n}`;
    
                        if(callbackForm.style.opacity === '1') {
                            clearInterval(timer);
                        }
                    }, 30);
            }

            else if(target.classList.contains('image-gift')) {
                const imageGift = document.querySelector('.image-gift');
                imageGift.style.display = 'none';
                fixedGift.style.display = 'block';
                fixedGift.style.opacity = '0';
                    let n = 0;
                    const timer = setInterval(() => {
                        n+=0.1;
                        fixedGift.style.opacity = `${n}`;
    
                        if(fixedGift.style.opacity === '1') {
                            clearInterval(timer);
                        }
                }, 30);
            }

        });
        
};

export default togglePopUp;
