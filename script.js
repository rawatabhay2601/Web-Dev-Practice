var header = document.getElementById('main-title');
header.style.borderBottom = "solid 2px #000";

// var items = document.getElementById('items');
// items.style.fontWeight = "solid";
// items.style.color = "green";

// var item = document.getElementsByClassName('list-group-item list-group-item');
// item[2].style.backgroundColor = 'lightgreen';

// for(let i of item){
//     i.style.fontWeight = "bold";
// }

// // task 6
// var newItems = document.getElementsByTagName('li');

// for(let i of newItems){
//     i.style.fontStyle = "italic";
//     i.style.fontWeight = "bold";
// }

// // task 7
// // adding green background to second element
// item[1].style.backgroundColor = 'lightgreen';

// // making the third item invisible
// item[2].innerText = "";
// item[2].style.padding = "3.7%"

// // using QuerySelectorAll
// var query = document.querySelectorAll('li');

// for(i=0; i<query.length;i += 2){
//     query[i].style.backgroundColor = "green";
// }

// query[4].style.color = 'black';
// // ask doubt as last-child is not working here(rest are working)
// var query = document.querySelector
// ('.list-group-item:first-child');

// query.style.color = 'red';


// ----------TRAVERSING the DOM--------------------
var dom = document.querySelector('ul');

// parentNode and parentElement
// Both are same

// dom.parentNode.style.background = '#f4f4f4';
dom.parentElement.style.background = '#f4f4f4';

// Children and Child Node
// console.log(dom.children);
// console.log(childNode);  // this will include "text" space as well

// LastChild and LastElementChild
// console.log(dom.lastChild); // include "text" space as well 
// console.log(dom.lastElementChild);

// FirstElementChild and FirstChild

// console.log(dom.firstChild);    // include "text" space as well

// dom.firstElementChild.textContent = 'Hello 1';

// // LastChild and LastElementChild

// console.log(dom.lastChild);    // include "text" space as well

// dom.lastElementChild.textContent = 'Hello 4';

// nextSibling and nextElementSibling

// console.log(dom.nextSibling);
// console.log(dom.nextElementSibling);

// previousSibling and previousElementSibling

dom.previousElementSibling.style.color = 'red'

//  createElement    setAttribute   createtesxtnode   appendchild

var newDiv = document.createElement("div");

// Add class
newDiv.className = 'item';

// Add id
newDiv.id = 'items';

// Using SetAttribute
newDiv.setAttribute('title','Hello');

// Creating and adding a text node to newDiv
var text = document.createTextNode('Hello World 1');
newDiv.appendChild(text);

// Adding newDiv in HTML
var temp = document.querySelector('header');

var before = document.querySelector('#main-title #header-title');

temp.insertBefore(newDiv,before);

// Adding newDiv tag before List1

var list1 = document.querySelector("ul li");
var parent = document.querySelector("ul");

parent.insertBefore(newDiv,list1);