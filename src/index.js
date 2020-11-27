'use strict';

import maskPhone from './modules/maskPhone';
import selectClub from './modules/selectClub';
import togglePopUp from './modules/togglePopUp';
import scrollTop from './modules/scrollTop';
import getPromocode from './modules/getPromocode';
import sendForm from './modules/sendForm';
import showBurger from './modules/showBurger';
import showPopupMenu from './modules/showPopupMenu';
import fixedMenu from './modules/fixedMenu';
import carousel from './modules/carousel';
import photoGallery from './modules/photoGallery';
import topSlider from './modules/topSlider';



maskPhone('.phonecall', '+_(___)_______');

selectClub();
togglePopUp();
scrollTop();
getPromocode();
sendForm();
showBurger();
showPopupMenu();
fixedMenu();
carousel();
photoGallery();
topSlider();