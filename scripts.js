import data from './data.js'

// defining variables
const itemsContainer = document.querySelector('#items')
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')
const cart = [] // array to hold cart items

// ---------------------------------------------------
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

// ---------------------------------------------------
// selects all buttons
const all_items_button = Array.from(document.querySelectorAll("button"))
// console.log(all_items_button)

all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
    }))

// ---------------------------------------------------
// adds items to cart
function addItem(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            return
        }
    }

    const item = {name, price, qty: 1}
    cart.push(item)
}

// ---------------------------------------------------
// shows items in cart
function showItems() {
    // console.log(`You have ${getQty()} items in your cart`) // could also make a 'const qty = getQty()' line and put qty in the string
    cartQty.innerHTML = (`You have ${getQty()} items in your cart`)

    let itemStr = ''
    for (let i = 0; i < cart.length; i += 1) {
        // console.log(`${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        // const name = cart[i].name // these are called intermediate values, easier/shorter to type out everytime we refer to them
        // const price = cart[i].price
        // const qty = cart[i].qty

        // {name:'Apple', price: 0.99, qty: 3}
        const {name, price, qty} = cart[i]

        itemStr += `<li> ${name} $${price} x ${qty} = $${qty * price} </li>`
    }
    itemList.innerHTML = itemStr

    // console.log(`Your total in cart is: $${getTotal()}`)
    cartTotal.innerHTML = (`Your total in cart is: $${getTotal()}`)
}

// ---------------------------------------------------
// gets quantity of total cart items
function getQty () {
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}

// ---------------------------------------------------
// gets total price of cart items
function getTotal () {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2) // the '2' rounds to 2 decimals, without it the float would be extremely long
}

// ---------------------------------------------------
// removes items from cart
function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= qty
            }
            if (cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1)
            }
            return
        }
    }
}


addItem('Apple', 0.99)
addItem('Orange', 1.29)
addItem('Orange', 1.29)
addItem('test', 0.69)

addItem('Apple', 0.99)
addItem('Orange', 1.29)
addItem('Orange', 1.29)
addItem('test', 0.69)

addItem('Apple', 0.99)
addItem('Orange', 1.29)
addItem('Orange', 1.29)
addItem('test', 0.69)


removeItem('Orange', 1)






showItems()



// extra notes

// keys and objects
// const a = 100
// const b = 200
// const obj = {a, b}
// console.log(obj)
