const myButton = document.getElementById("myButton")
const myModal = document.getElementById("my-modal")
const myButtonCLS = document.getElementById("closeBtn")

myButton.addEventListener("click", function(){
    myModal.style.display = "flex"
    myButton.style.display = "none"
})

myButtonCLS.addEventListener("click", function(){
    myModal.style.display = "none"
    myButton.style.display = "block"
})