'use strict';
const sendForm = () => {
    document.addEventListener('input', event => {
        const target = event.target;
        if (target.matches('.nameClass')) {
            target.value = target.value.replace(/[^А-Яа-яЁе ]/gi, '');
        }
    });

    const submitMessage = 'Вам необходимо подтвердить согласие!',
        chooseClubPlease = 'Выберите клуб!';

    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        bannerForm = document.getElementById('banner-form'),
        cardOrder = document.getElementById('card_order'),
        footerForm = document.getElementById('footer_form');

    let statusMessage = document.createElement('div');
    let loadMessage = `<div class="loadMessage"></div>`;
    
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        let shell,
            checkOut,
            target = event.target,
            check = document.getElementById('check'),
            check1 = document.getElementById('check1'),
            check2 = document.getElementById('check2'),
            cardCheck = document.getElementById('card_check'),
            thanks = document.getElementById('thanks'),
            formContentThanks = document.querySelector('.form-content-thanks');
        
        if (target === form1) {
            shell = form1;
            checkOut = check;
        } else if (target === form2) {
            shell = form2;
            checkOut = check2;
        } else if (target === bannerForm) {
            shell = bannerForm;
            checkOut = check1;
        } else if (target === cardOrder) {
            shell = cardOrder;
            checkOut = cardCheck;
        } else if (target === footerForm) {
            shell = footerForm;
        }

        shell.appendChild(statusMessage);

        if (target !== footerForm) {
            if (checkOut.checked === false) {
                statusMessage.textContent = submitMessage;
                statusMessage.style.color = 'red';
                statusMessage.style.textAlign = 'center';
                return;
            }
        }

        if (target === footerForm) {
            if (document.getElementById('footer_leto_mozaika').checked === false && 
            document.getElementById('footer_leto_schelkovo').checked === false) {
                statusMessage.textContent = chooseClubPlease;
                statusMessage.style.color = 'red';
                return;
            }
        }
        
        document.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('close_icon') || 
            target.classList.contains('overlay') ||
            target.classList.contains('close-btn')) {
                let x = 1;
                const timer = setInterval(() => {
                    x -= 0.1;
                    formContentThanks.style.opacity = `${x}`;
                    if (formContentThanks.style.opacity === "-0.1") {
                        clearInterval(timer);
                        thanks.style.display = "none";
                    }
                }, 1);
            }
        });
        
        statusMessage.innerHTML = loadMessage;
        const removeStatusMessage = () => {
            setTimeout(() => {
                const popup = document.querySelector('.popup');
                popup.style.display = "none";
            }, 2000);
            statusMessage.remove();
        };
        setTimeout(removeStatusMessage, 3000);

        const formData = new FormData(shell);
        let body = {};
        for (let value of formData.entries()) {
            body[value[0]] = value[1];
        }


        postData(body)
            .then((response) => {
                if (response.status !== 200) {                    
                    throw new Error('status network not 200');
                }
                thanks.style.display = 'block';
                formContentThanks.style.opacity = "0";
                let x = 0;
                const timer = setInterval(() => {
                    x += 0.1;
                    formContentThanks.style.opacity = `${x}`;
                    if (formContentThanks.style.opacity === "1") {
                        clearInterval(timer);
                        }
                }, 20);
                thanks.innerHTML = `
                <div class="overlay">
                </div>
                <div class="form-wrapper">
                    <div class="close-form">
                        <img src="images/close-icon.png" alt="close" class="close_icon">
                    </div>
                    <div class="form-content form-content-thanks">
                        <h4>Спасибо!</h4>
                        <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
                        <button class="btn close-btn">OK</button>
                    </div>
                </div>`;
            })
            .catch((error) => {       
                thanks.style.display = 'block';  
                formContentThanks.style.opacity = "0";
                let x = 0;
                const timer = setInterval(() => {
                    x += 0.1;
                    formContentThanks.style.opacity = `${x}`;
                    if (formContentThanks.style.opacity === "1") {
                        clearInterval(timer);
                        }
                }, 20);       
                thanks.innerHTML = `
                <div class="overlay">
                </div>
                <div class="form-wrapper">
                    <div class="close-form">
                        <img src="images/close-icon.png" alt="close" class="close_icon">
                    </div>
                    <div class="form-content form-content-thanks">
                        <h4>Извините!</h4>
                        <p>Ваша заявка не отправлена...<br> Возможно возникла ошибка с сервером</p>
                        <button class="btn close-btn">OK</button>
                    </div>
                /div>`;
                console.error(error);
            })
            .then(() => {
                if (document.querySelectorAll('.phonecall')) {
                    document.querySelectorAll('.phonecall').forEach((elem) => {
                        elem.value = '';
                    });
                }
                
                if (document.querySelectorAll('.nameClass')) {
                    document.querySelectorAll('.nameClass').forEach((elem) => {
                        elem.value = '';
                    });
                }
                
                if (document.getElementById('promo')) {
                    document.getElementById('promo').value = '';
                }
                
                if (target !== footerForm) {
                    if (checkOut.checked) {
                        checkOut.checked = false;
                    }
                }
                if (target === footerForm) {
                    if (document.getElementById('footer_leto_mozaika').checked) {
                        document.getElementById('footer_leto_mozaika').checked = false;
                    }
                    if (document.getElementById('footer_leto_schelkovo').checked) {
                        document.getElementById('footer_leto_schelkovo').checked = false;
                    }
                }
            });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });     
    };
};

export default sendForm;