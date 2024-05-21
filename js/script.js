document.getElementById("noshow").style.display ="none";
document.getElementById("display").style.display="flex";

function clickBtn() {
    const noshow = document.getElementById("noshow");
    const display = document.getElementById("display");
    
    if(noshow.style.display=="flex") {
        noshow.style.display ="none";
        display.style.display="none";

    } else {
        noshow.style.display ="flex";
        display.style.display="none";
    }
}

const numButtons = document.querySelectorAll(".number-button");
const number = document.getElementById("rating-number");

Array.from(numButtons).forEach(button => {
    button.addEventListener("click", e => {
        const value = e.target.textContent
        number.textContent = value
    })
})




  