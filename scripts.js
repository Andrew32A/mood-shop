import data from './data.js'

// defining variables
const itemsContainer = document.querySelector('#items')
const cart = [] // array to hold cart items


// length of data determines how many times loop is ran
for (let i = 0; i < data.length; i += 1) {
	// create new div element and give it class name
	const newDiv = document.createElement('div')
	newDiv.className = 'item'
	// create an image element
	const img = document.createElement('img')
	// cycles through each image in the list using 'i' and the for loop
	img.src = data[i].image
	img.width = 300
	img.height = 300
	// Add the image to the div
	newDiv.appendChild(img)

	// put new div inside items container
	itemsContainer.appendChild(newDiv)
	// create a paragraph element
	const desc = document.createElement('P')
	// give the paragraph text from the data
	desc.innerText = data[i].desc
	// adds the paragraph to the div
	newDiv.appendChild(desc)

	// same thing as above
	const price = document.createElement('P')
	price.innerText = data[i].price
	newDiv.appendChild(price)

	// create a button
	const button = document.createElement('button')
	// add an id name to the button
	button.id = data[i].name
	// creates a custom attribute called data-price. that will hold price for each element in the button
	button.dataset.price = data[i].price
	button.innerHTML = "Add to Cart"
	newDiv.appendChild(button)
}



// adds items to cart
function addItem(name, price) {
    for (let i = 0; 1 < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            return
        }
    }

    const item = {name: name, price: price, qty: 1}
    cart.push(item)
}


// shows items in cart
function showItems() {
    console.log(`You have ${getQty()} items in your cart`) // could also make a 'const qty = getQty()' line and put qty in the string

    for (let i = 0; i < cart.length; i += 1) {
        console.log(`${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
    }

    console.log(`Your total in cart is: $${getTotal()}`)
}

// gets quantity of total cart items
function getQty () {
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}

// gets total price of cart items
function getTotal () {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2) // the '2' rounds to 2 decimals, without it the float would be extremely long
}

addItem("apple", 0.99) 
addItem("banana", 2.99)
addItem("banana", 2.99)
addItem("banana", 2.99)
addItem("banana", 2.99)
addItem("apple", 0.99) 


showItems()



// extra notes

// keys and objects
// const a = 100
// const b = 200
// const obj = {a, b}
// console.log(obj)
