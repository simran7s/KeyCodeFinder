const key = document.querySelector(".key")
const keyCode = document.querySelector(".keyCode")
const code = document.querySelector(".code")

const container = document.querySelector(".container")



window.addEventListener("keydown", (e) => {
    console.log(e);

    container.classList.add("active");

    key.innerHTML = e.key;
    keyCode.innerHTML = e.keyCode;
    code.innerHTML = e.code;
})