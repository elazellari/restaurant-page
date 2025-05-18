export function myContact() {
    const content = document.querySelector('.content');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.innerText = 'My Contact Information';
    p.innerText = 'Name: Jimmy Address: Toronto Phone: 1234567890';

    content.append(h1,p);
}