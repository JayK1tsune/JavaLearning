//document.getElementById('count-el').innerText = 5;

// let firstCount = 5
// let secondCount = 10
// let count = firstCount + secondCount

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0
let countElement = document.getElementById('count')
let previousEl = document.getElementById('save-el')


function increment() {
    count += 1
    countElement.textContent = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    previousEl.textContent += countStr
    //reset count to 0
    count = 0
    countElement.textContent = count
}

function clearAll() {
    count = 0
    countElement.textContent = count
    previousEl.textContent = "Previous Nights: "
}
let users = new Map()

let index1 = {name: 'Jenny', age: 23}
let index2 = {name: 'Tim'}

users.set(index1, {...index1, id: 1})
users.set(index2, {...index2, id: 2})

console.log(users.get(index1).age)





