import data from './data.js'
const itemsContainer = document.querySelector('#items')

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