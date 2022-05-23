const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hex_color = "#";

    for (let i = 0; i < 6; i++){
        hex_color += hex[get_random_number()]
    }

    document.body.style.backgroundColor = hex_color;
    color.textContent = hex_color;
})

function get_random_number() {
    return Math.floor(Math.random() * hex.length);
}