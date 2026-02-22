let text1 = "";

let num2 = 0;

let bool3 = false;

let text4 = "";

let text5 = "";

let text6 = "";

addEventListener("submit", (event) => {
    event.preventDefault();
        text1 = document.getElementById("text1").value;
        num2 = parseFloat(document.getElementById("num2").value);
        bool3 = document.getElementsByName("bool3");
        console.log(text1);
        console.log(num2);
        console.log(bool3);
});
