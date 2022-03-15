const foods=[
    {name:'apple', price:2},
    {name:'pear', price:2},
    {name:'steak', price:2},
];

const foodList= document.querySelector(".food-list")

for(let item of foods) {


const listItem= document.createElement('li');
console.log(listItem);
listItem.innerText=item.name;
console.log(foods.name);
foodList.appendChild(listItem);

};





// - [ ] Loop over that list, dynamically create a new list item `<li></li>` with the food name inside, and append that item to an existing HTML `<ul></ul>` element