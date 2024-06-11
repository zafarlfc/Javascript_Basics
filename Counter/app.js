let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button){
    button.addEventListener("click", function(btn){
        const classes = btn.currentTarget.classList;
        if (classes.contains("decrease")) {
            count--;
        }
        else if (classes.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";  
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }

        value.textContent = count;
    }) 
})