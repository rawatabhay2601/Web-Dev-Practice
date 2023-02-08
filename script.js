var header = document.getElementById('main-title');
header.style.borderBottom = "solid 2px #000";

var items = document.getElementById('items');
items.style.fontWeight = "solid";
items.style.color = "green";

var list = document.getElementsByClassName("list-group-item list-group-item");
list[2].style.backgroundColor = "lightgreen";

for(let i of list){
    i.style.fontWeight = "bold";
}