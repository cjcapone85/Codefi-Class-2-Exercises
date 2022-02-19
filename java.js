const groceryList = [
    {name: 'Apples', price: '30'},
    {name: 'Bananas', price: '30'},
    {name: 'Pears', price: '30'},
    {name: 'Spinach', price: '30'},
    {name: 'Chips', price: '30'},
];

const foodList= document.querySelector(".food-list")

for(let item of groceryList) {

    const listItem = document.createElement('li');
    console.log("List Item", listItem)
    listItem.innerText = item.name;
    console.log(listItem);
    foodList.appendChild(listItem);
}
