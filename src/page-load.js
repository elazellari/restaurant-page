import  restaurantImg from './restaurant.jpg';

export function pageLoad() {
const content = document.querySelector('.content');
const h1 = document.createElement('h1');
const p = document.createElement('p');
h1.innerText = 'Welcome to our fancy restaurant';
const img =  document.createElement('img');
img.src = restaurantImg;
img.alt = 'restaurant image';
p.innerText = 'This is the restaurant page. Testing webpack page bundle.'
content.append(h1,img,p);
console.log('Imported image:', restaurantImg);
}

