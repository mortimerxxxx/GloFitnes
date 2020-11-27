'use strict';
const sendForm = () => {
    document.addEventListener('input', event => {
        const target = event.target;
        if (target.matches('.nameClass')) {
            target.value = target.value.replace(/[^А-Яа-яЁе ]/gi, '');
        }
    });

    const errorMessage = 'Что-то пошло не так... Возможно сервер не отвечает!',
        successMessage = 'Спасибо, мы скоро с Вами свяжемся!',
        submitMessage = 'Вам необходимо подтвердить согласие!';

    let loadMessage = `<div class="loadMessage"></div>`;

    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        bannerForm = document.getElementById('banner-form'),
        cardOrder = document.getElementById('card_order'),
        footerForm = document.getElementById('footer_form');

    const statusMessage = document.createElement('div');
    
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        let shell;
        const target = event.target;
        if (target === form1) {
            shell = form1;
        } else if (target === form2) {
            shell = form2;
        } else if (target === bannerForm) {
            shell = bannerForm;
        } else if (target === cardOrder) {
            shell = cardOrder;
        } else if (target === footerForm) {
            shell = footerForm;
        }

        shell.appendChild(statusMessage);

        statusMessage.innerHTML = loadMessage;
        const removeStatusMessage = () => {
            setTimeout(() => {
                const popup = document.querySelector('.popup');
                popup.style.display = "none";
            }, 2000);
            statusMessage.remove();
        };
        setTimeout(removeStatusMessage, 5000);

        const formData = new FormData(shell);
        let body = {};
        for (let value of formData.entries()) {
            body[value[0]] = value[1];
        }

        const check = document.getElementById('check'),
            check1 = document.getElementById('check1'),
            check2 = document.getElementById('check2'),
            cardCheck = document.getElementById('card_check'),
            footerLetoMozaika = document.getElementById('footer_leto_mozaika'),
            footerLetoSchelkovo = document.getElementById('footer_leto_schelkovo');

        const thanks = document.getElementById('thanks'),
            formContentThanks = document.querySelector('.form-content-thanks');

        postData(body)
            .then((response) => {
                if (response.status !== 200) {                    
                    throw new Error('status network not 200');
                } 
                if (check.checked || check2.checked || cardCheck.checked) {
                    statusMessage.textContent = successMessage;
                    statusMessage.style.color = `green`;
                } else if (check1.checked || footerLetoMozaika.checked || footerLetoSchelkovo.checked) {
                    thanks.style.display = 'block';
                    formContentThanks.style.opacity = "0";
                    let x = 0;
                    const timer = setInterval(() => {
                        x += 0.1;
                        formContentThanks.style.opacity = `${x}`;
                        if (formContentThanks.style.opacity === "1.1") {
                            clearInterval(timer);
                        }
                    }, 20);
                } else {
                    statusMessage.textContent = submitMessage;
                    statusMessage.style.color = `red`;
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
            })
            .catch(error => {                
                statusMessage.textContent = errorMessage;
                statusMessage.style.color = `red`;
                console.log(error);
            })
            .then(() => {
                document.querySelectorAll('.phonecall').forEach((elem) => {
                    elem.value = '';
                });
                document.querySelectorAll('.nameClass').forEach((elem) => {
                    elem.value = '';
                });
                document.getElementById('promo').value = '';
                document.getElementById('check').checked = false;
                document.getElementById('check2').checked = false;
                document.getElementById('check1').checked = false;
                document.getElementById('card_check').checked = false;
                document.getElementById('footer_leto_mozaika').checked = false;
                document.getElementById('footer_leto_schelkovo').checked = false;
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