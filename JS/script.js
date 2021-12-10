const tog = document.querySelector(".toggle")
const main = document.querySelector(".light-theme")

tog.addEventListener("click", (event) => {
    const root = document.querySelector(":root")
    if (event.currentTarget.className == ".toggle") {    
        event.currentTarget.className = ".untoggle"
        root.style.setProperty("--white", "white")
        root.style.setProperty("--black", "black")
    } else {
        event.currentTarget.className = ".toggle"
        root.style.setProperty("--white", "black")
        root.style.setProperty("--black", "white")
    }
})