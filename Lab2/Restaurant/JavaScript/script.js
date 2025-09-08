
<!-- Character counter for text field-->
let infoField = document.getElementById("info");
let charCount = document.getElementById("charCount");

infoField.addEventListener("input", function(count){
    let currentLength = count.target.value.length;
    let maxLength = count.target.maxLength;

    charCount.textContent = `${currentLength} / ${maxLength}`;
});

let inputField = document.getElementById("hire_form");
let userInput = inputField.querySelectorAll("input");

userInput.forEach(input => {
    input.addEventListener("input", function() {
        if (input.checkValidity()) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        } else {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
        }
    })
});

<!--Checks for valid age -->
document.getElementById("hire_form").addEventListener("submit", function(event) {
    let ageInput = document.getElementById("age").value;
    let age = Number(ageInput);
    let errors = [];
    let valid = true;

    if (!ageInput || isNaN(age)) {
        valid = false;
        errors.push("Enter your age")
    } else if (age < 21 || age > 99) {
        valid = false;
        errors.push("Enter a valid age between 21 - 99")
    }

    let phoneInput = document.getElementById("phone").value;
    phoneInput = phoneInput.replaceAll(/\D/g, "");

    if(phoneInput.length !== 10) {
        valid = false;
        errors.push("Invalid number, please input your phone number ex. 123-456-7890")
    } else {
        phoneInput = phoneInput.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        document.getElementById("phone").value = phoneInput;
    }


    if (!valid) {
        alert(errors.join("\n"))
        event.preventDefault();
    } else {
        let formData = new FormData(this);
        for (let [key, value] of formData.entries()) {
            console.log(key + ":", value);
        }
    }
});

