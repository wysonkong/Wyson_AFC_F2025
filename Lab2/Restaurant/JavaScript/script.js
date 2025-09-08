let infoField = document.getElementById("info");
let charCount = document.getElementById("charCount");

infoField.addEventListener("input", function(count){
    let currentLength = count.target.value.length;
    let maxLength = count.target.maxLength;

    charCount.textContent = `${currentLength} / ${maxLength}`;
});


document.getElementById("myForm").addEventListener("submit", function(event) {
    let ageInput = document.getElementById("age").value;
    let age = Number(ageInput);
    let errors = [];
    let valid = true;

    if (!ageInput || isNaN(age)) {
        valid = false;
        errors.push("Enter your age")
    } else if (age <= 21 || age >= 99) {
        valid = false;
        errors.push("Enter a valid age between 21 - 99")
    }

    let phoneInput = document.getElementById("phone").value;
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if(!phoneInput || !phonePattern.test(phoneInput)) {
        valid = false;
        errors.push("Invalid number, please input your phone number ex. 123-456-7890")
    }


    if (!valid) {
        alert(errors.join("\n"))
        event.preventDefault();
    }

    let formData = new FormData(this);
    for (let [key, value] of formData.entries()) {
        console.log(key + ":", value);
    }
});