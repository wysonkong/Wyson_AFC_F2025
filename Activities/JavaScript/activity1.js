let generate = document.getElementById("generate");
let randomImage = document.getElementById("dog_photo");
let count = document.getElementById("counter");
let reset = document.getElementById("reset");
let breedId = document.getElementById("breed");

let countIndex = 0;
let breed = "";

function randomWebImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {randomImage.src = data.message
            let breed = data.message.split('/')[4]
            breedId.innerText = breed.replaceAll("-", " ");
        })
        .catch(error => {console.error("Error fetching image", error)})
}

window.onload = () => randomWebImage();


generate.addEventListener("click", function(){
    randomWebImage();
    countIndex++;
    count.innerText = `${countIndex} dogs seen`;
});

reset.addEventListener("click", function () {
    countIndex = 0;
    count.innerText = `${countIndex} dogs seen`;
})

