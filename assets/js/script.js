//HIDE/SHOW SEARCH ICON AT THE NAV BAR
const searchBox = document.querySelector("search-box");
const searchIcon = document.querySelector("search-icon");
const searchBtn = document.querySelector("search-btn");
const closeBtn = document.querySelector("close-btn");

searchBtn.addEventListener(click, () => {
    searchBox.classList.add('active');
    searchIcon.classList.add('active');
})
closeBtn.addEventListener(click, () => {
    searchBox.classList.remove('active');
    searchIcon.classList.remove('active');
})

// increase and decrease quantity in single product details

let count = 1;
let quantity = document.getElementById("quantity"); // find the element with the ID 'quantity'

let increment = document.getElementById('plus'); // find the element with the ID 'plus'
let decrement = document.getElementById('minus'); // find the element with the ID 'minus'


// this function is executed whenever the user clicks the increment button
increment.addEventListener('click', () => quantity.textContent = count++);
// this function is executed whenever the user clicks the decrement button, start from 1 upwards
decrement.addEventListener('click', () => {
    count === 0 ? null : quantity.textContent = count--;
})