const colors = ["green", "red", "Aqua", "Brown", "Black", "Crimson", "GreenYellow", "Violet"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const random_number = get_random_number();
    document.body.style.backgroundColor = colors[random_number];
    color.textContent = colors[random_number];
});

function get_random_number() {
    return Math.floor(Math.random() * colors.length);
}
