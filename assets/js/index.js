const input = document.getElementById("inputOne");
const form = document.querySelector("form");
const regexp = new RegExp('^([a-z]{8,12})$',);


input.addEventListener("input", (event) => {
    const { target:
        { value } } = event;

    console.log(regexp.test(value));

    if (regexp.test(value) === true) {
        form.className = "formGreen";
    } else { form.className = "formRed" };

})