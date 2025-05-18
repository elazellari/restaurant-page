
export function newMenu() {

const myMenu = ['Steak', 'Lasagna', 'Pizza'];
const content = document.querySelector('.content');
const ul = document.createElement('ul');


myMenu.forEach(element => {
    const li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
    content.appendChild(ul);
});
}