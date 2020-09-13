const input = document.getElementById("inputOne");
const form = document.querySelector("form");
const regexp = new RegExp('^([a-z]{8,12})$',);


input.addEventListener("keypress", (event) => {
    const str = event.target.value;
    console.log(regexp.test(str));
    if(regexp.test(str) === true){form.className = "formGreen"};
    if(regexp.test(str) === false){form.className = "formRed"};
})