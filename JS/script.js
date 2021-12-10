const tog = document.querySelector(".toggle")

tog.addEventListener("click", (event) => {
    const root = document.querySelector(":root")
    if (event.target.className == "toggle") {    
        event.target.className = "untoggle"
        root.style.setProperty("--white", "black")
        root.style.setProperty("--black", "white")
        root.style.setProperty("--lightGreen", "#757E95")
    } else {
        event.target.className = "toggle"
        root.style.setProperty("--white", "white")
        root.style.setProperty("--black", "black")
        root.style.setProperty("--lightGreen", "#BEE3DB")
    }
})

const submit = document.querySelector("button")

submit.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const obj = {}
    const name = document.getElementById("name").innerHTML
    const email = document.getElementById("email").innerHTML
    const message = document.getElementById("msg").innerHTML
    obj.name = name
    obj.email = email
    obj.message = message
    console.log(obj)
})