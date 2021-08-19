console.log("Task 1");
const element1 = document.getElementById('container');
console.log(element1);
//const newElemnt = document.createElement('div');

element1.append(`Hello!`);


console.log("Task 2");
const element2 = document.querySelector('#container');
console.log(element2);

console.log("Task 3");
const items = document.querySelectorAll('.second');
console.log(items);

console.log("Task 4 5");
const elem = document.querySelector('ol');
const item = elem.querySelector('.third');
console.log(item);

console.log("Task 6 7");
const element6 = document.querySelector('.footer');
element6.classList.add('main');
const check= element6.classList.contains('main');
console.log(check);
element6.classList.remove('main');

console.log("Task 8 9 10");
const element8 = document.querySelector('ul');
const newElem = document.createElement('li');
newElem.innerText= "four";
// document.getElementsByTagName('ul').appendChild(newElem);
element8.append(newElem);
element8.innerHTML = `<li> four </li>`;
const  newContent= document.createTextNode("four");
newElem.appendChild(newContent);


console.log("Task 11");
const allItems = document.querySelectorAll('ol li');
for(it of allItems){
    it.style.backgroundColor="green";
}
allItems[0].setAttribute('color', 'red');

console.log("Task 12");
const tg = document.querySelector('.footer');
tg.remove();
