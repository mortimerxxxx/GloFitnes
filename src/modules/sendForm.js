'use strict';
const sendForm = () => {
    //Валидация номера телефона
    document.addEventListener('input', event => {
        const target = event.target;
        if (target.matches('#callback_form2-phone') || 
        target.matches('#callback_form1-phone') ||
        target.matches('#callback_form-phone') ||
        target.matches('#phone') ||
        target.matches('#callback_footer_form-phone')) {
            target.value = target.value.replace(/^[\+]?[0-9]{1}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{17}$/im, '');
            document.addEventListener('change', event => {
                if (target.matches('#callback_form2-phone') || 
                target.matches('#callback_form1-phone') ||
                target.matches('#callback_form-phone') ||
                target.matches('#phone') ||
                target.matches('#callback_footer_form-phone')) {
                    target.value = target.value.replace(/^\D/gi, '');
                    target.value = target.value.replace(/\D$/gi, '');
                    if (target.value.length < 5) {
                        target.value = '';
                    } 
                }
            });
        } else if (target.matches('#callback_form2-name') || 
        target.matches('#callback_form1-name') ||
        target.matches('#name')) {
            target.value = target.value.replace(/[^А-Яа-яЁе ]/gi, '');
        }
    });

    const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо, мы скоро с Вами свяжемся!';

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

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                statusMessage.style.color = `green`;
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                statusMessage.style.color = `red`;
                console.log(error);
            })
            .then(() => {
                document.querySelectorAll('#callback_form1-phone').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('#callback_form-phone').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('#callback_form1-name').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('#callback_form2-phone').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('#callback_form2-name').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('#name').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('#promo').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('#phone').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('#callback_footer_form-phone').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('#check').forEach((elem)=> {
                    elem.checked = false;
                });
                document.querySelectorAll('#check2').forEach((elem)=> {
                    elem.checked = false;
                });
                document.querySelectorAll('#check1').forEach((elem)=> {
                    elem.checked = false;
                });
                document.querySelectorAll('#card_check').forEach((elem)=> {
                    elem.checked = false;
                });
                document.querySelectorAll('#footer_leto_mozaika').forEach((elem)=> {
                    elem.checked = false;
                });
                document.querySelectorAll('#footer_leto_schelkovo').forEach((elem)=> {
                    elem.checked = false;
                });
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