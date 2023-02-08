var header = document.getElementById('main-title');
header.style.borderBottom = "solid 2px #000";

var items = document.getElementById('items');
items.style.fontWeight = "solid";
items.style.color = "green";

var item = document.getElementsByClassName('list-group-item list-group-item');
item[2].style.backgroundColor = 'lightgreen';

for(let i of item){
    i.style.fontWeight = "bold";
}