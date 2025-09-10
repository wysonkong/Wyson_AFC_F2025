const menuItems = [
    {
        name: "Spice Bowl",
        description:
            "Roasted chickpeas, couscous, roasted vegetables, and a smoky chipotle drizzle, topped with fresh cilantro and toasted almonds",
        price: 14.45,
        image: "../img/Spiced-Bowls.webp",
    },
    {
        name: "Skewers",
        description:
            "Grilled marinated skewers with a blend of exotic spices, served with saffron rice and a cooling yogurt-mint sauce. (Choice of chicken, lamb, beef)",
        price: 18.75,
        image: "../img/skewers.jpeg",
    },
    {
        name: "Mediterranean Flatbread",
        description:
            "Crispy flatbread topped with sun-dried tomatoes, olives, feta, caramelized onions, and a drizzle of lemon-tahini sauce",
        price: 12.25,
        image: "../img/flatbread.jpg"
    },
    {
        name: "Latte Pudding",
        description:
            "Pudding with a sprinkle of cinnamon and topped with toasted coconut",
        price: 6.5,
        image: "../img/pudding.jpeg",
    },
    {
        name: "Hummus Trio",
        description:
            "Three seasonal hummus varieties served with warm pita and crunchy vegetable sticks.",
        price: 19.75,
        image: "../img/hummus.jpeg",
    },
];

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
};

let next = document.getElementById("nextButton");
let prev = document.getElementById("prevButton");
let menuName = document.getElementById("menu_name");
let menuDesc = document.getElementById("menu_desc");
let menuPrice = document.getElementById("menu_price");
let picture = document.getElementById("menu_img");


let index = 0;

function showItem(index) {
    let item = menuItems[index];
    menuName.textContent = item.name;
    menuDesc.textContent = item.description;
    menuPrice.textContent = formatPrice(item.price);
    picture.src = item.image;
    picture.alt = item.name;
}

showItem(index);


next.addEventListener("click", function() {
    index++;
    if(index >= menuItems.length) {
        index = 0;
    }
    showItem(index);
})

prev.addEventListener("click", function() {
    index--;
    if(index < 0) {
        index = menuItems.length - 1;
    }
    showItem(index);
})
