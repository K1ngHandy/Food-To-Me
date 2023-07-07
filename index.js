// create "Coco Mart" array
const cocoMart = ["Bananas", "Milk", "Eggs", "Bread", "Yogurt"];

// declare "i" as variable index name; loops through items in cocoMart array
for (let i in cocoMart) {
    console.log(`${cocoMart[i]} is now available!`)
}

/*
prints:
Bananas is now available!
Milk is now available!
Eggs is now available!
Bread is now available!
Yogurt is now available!
*/

// Looping over object properties
const foodItem = {
    name: "bananas",
    price: 2.99,
    availability: false
}

for (let prop in foodItem) { // iterates through foodItem object
    if (prop === 'price') {  // property: price
        console.log(`This product costs $${foodItem[prop]}`)
    } // prints "This product costs $2.99"
}
