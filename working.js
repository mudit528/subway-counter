let count = 0
let numEl = document.getElementById("num-el")
let msgEl = document.getElementById("msg")

function increment() {
    count += 1
    numEl.textContent = count
}

function save() {
    console.log("button clicked")
    msgEl.textContent += count + " - "
    numEl.textContent = 0
    count = 0
}