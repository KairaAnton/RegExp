const input = document.getElementById("inputOne");
const form = document.querySelector("form");
const regexp = new RegExp('^([a-z]{8,12})$',);


input.addEventListener("input", (event) => {
    const { target:
        { value } } = event;
    if (regexp.test(value)) {
        form.className = "formGreen";
    } else { form.className = "formRed" };

})