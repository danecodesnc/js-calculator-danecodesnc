// button.addEventListener("click", 1);

//1 to display on box. Happens when it is clicked.

let one_button = document.querySelector(".one");
let display_bar = document.querySelector(".display_bar")
one_button.addEventListener("click", function() {
    // let one = document.querySelector(".display_bar")
    let value = document.createTextNode("1");
    display_bar.append(value);
})