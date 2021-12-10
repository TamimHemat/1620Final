const tog = document.querySelector(".toggle")

tog.addEventListener("click", (event) => {
    const root = document.querySelector(":root")
    if (event.target.className == "toggle") {    
        event.target.className = "untoggle"
        root.style.setProperty("--white", "black")
        root.style.setProperty("--black", "white")
    } else {
        event.target.className = "toggle"
        root.style.setProperty("--white", "white")
        root.style.setProperty("--black", "black")
    }
})