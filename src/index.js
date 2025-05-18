import { pageLoad } from "./page-load.js";
import {newMenu} from './menu.js';
import { myContact } from "./contact.js";
const content = document.querySelector('.content');
pageLoad();
const home = document.querySelector('.home');
home.addEventListener('click', () => {
    content.innerHTML = '';
    pageLoad();
})

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    content.innerHTML = '';
    newMenu();
})

const contact = document.querySelector('.contact');
contact.addEventListener('click', () => {
    content.innerHTML = '';
    myContact();
})