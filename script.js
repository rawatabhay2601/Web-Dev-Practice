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

// task 6
var newItems = document.getElementsByTagName('li');

for(let i of newItems){
    i.style.fontStyle = "italic";
    i.style.fontWeight = "bold";
}

// task 7
// adding green background to second element
item[1].style.backgroundColor = 'lightgreen';

// making the third item invisible
item[2].innerText = "";
item[2].style.padding = "3.7%"

// using QuerySelectorAll
var query = document.querySelectorAll('li');
query[1].style.color = "";

for(i=0; i<query.length;i += 2){
    query[i].style.backgroundColor = "green";
}

console.log(query);

// ask doubt as last-child is not working here(rest are working)
var query = document.querySelector
('.list-group-item:first-child');

query.style.color = 'red';