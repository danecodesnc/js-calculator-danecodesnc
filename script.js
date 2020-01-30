//0 to display on display when it is clicked.

let zero_button = document.querySelector(".zero");
let display_bar = document.querySelector(".display_bar")
zero_button.addEventListener("click", function() {
    let value = document.createTextNode("0");
    display_bar.append(value);
})


//1 to display on display when it is clicked.

let one_button = document.querySelector(".one");
one_button.addEventListener("click", function() {
    let value = document.createTextNode("1");
    display_bar.append(value);
})

//2 to display on display when it is clicked.

let two_button = document.querySelector(".two");
two_button.addEventListener("click", function() {
    let value = document.createTextNode("2");
    display_bar.append(value);
})

//3 to display on display when it is clicked.

let three_button = document.querySelector(".three");
three_button.addEventListener("click", function() {
    let value = document.createTextNode("3");
    display_bar.append(value);
})

//4 to display on display when it is clicked.

let four_button = document.querySelector(".four");
four_button.addEventListener("click", function() {
    let value = document.createTextNode("4");
    display_bar.append(value);
})

//5 to display on display when it is clicked.

let five_button = document.querySelector(".five");
five_button.addEventListener("click", function() {
    let value = document.createTextNode("5");
    display_bar.append(value);
})

//6 to display on display when it is clicked.

let six_button = document.querySelector(".six");
six_button.addEventListener("click", function() {
    let value = document.createTextNode("6");
    display_bar.append(value);
})

//7 to display on display when it is clicked.

let seven_button = document.querySelector(".seven");
seven_button.addEventListener("click", function() {
    let value = document.createTextNode("7");
    display_bar.append(value);
})

//8 to display on display when it is clicked.

let eight_button = document.querySelector(".eight");
eight_button.addEventListener("click", function() {
    let value = document.createTextNode("8");
    display_bar.append(value);
})

//9 to display on display when it is clicked.

let nine_button = document.querySelector(".nine");
nine_button.addEventListener("click", function() {
    let value = document.createTextNode("9");
    display_bar.append(value);
})

// Equals sign to display on display when it is clicked 

let equalsButton = document.querySelector(".equals")
equalsButton.addEventListener("click", function() {
    let toEvaluate = screen.innerText;
    evaluation = eval(toEvaluate);
    screen.innerHTML = evaluation;
});

// plus sign to display on display when it is clicked 

let plus_Button = document.querySelector(".plus")
equalsButton.addEventListener("click", function() {
    let toEvaluate = screen.innerText;
    evaluation = eval(toEvaluate);
    screen.innerHTML = evaluation;
});

// minus sign to display on display when it is clicked 

let minus_Button = document.querySelector(".minus")
equalsButton.addEventListener("click", function() {
    let toEvaluate = screen.innerText;
    evaluation = eval(toEvaluate);
    screen.innerHTML = evaluation;
});