import {useState} from "react";
import spiceBowl from "../assets/Spiced-Bowls.webp"
import skewers from "../assets/skewers.jpeg"
import flatbread from "../assets/flatbread.jpg"
import pudding from "../assets/pudding.jpeg"
import hummus from "../assets/hummus.jpeg"
import background from "../assets/malaysian-food.jpg";
import {Card} from "@material-tailwind/react";


const menuItems = [
    {
        name: "Spice Bowl",
        description:
            "Roasted chickpeas, couscous, roasted vegetables, and a smoky chipotle drizzle, topped with fresh cilantro and toasted almonds",
        price: 14.45,
        image: spiceBowl,
    },
    {
        name: "Skewers",
        description:
            "Grilled marinated skewers with a blend of exotic spices, served with saffron rice and a cooling yogurt-mint sauce. (Choice of chicken, lamb, beef)",
        price: 18.75,
        image: skewers,
    },
    {
        name: "Mediterranean Flatbread",
        description:
            "Crispy flatbread topped with sun-dried tomatoes, olives, feta, caramelized onions, and a drizzle of lemon-tahini sauce",
        price: 12.25,
        image: flatbread,
    },
    {
        name: "Latte Pudding",
        description:
            "Pudding with a sprinkle of cinnamon and topped with toasted coconut",
        price: 6.50,
        image: pudding,
    },
    {
        name: "Hummus Trio",
        description:
            "Three seasonal hummus varieties served with warm pita and crunchy vegetable sticks.",
        price: 19.75,
        image: hummus,
    },
];

const TABLE_HEAD = ["Name", "Description", "Price"];



const MenuPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    };

    const nextItem = () => {
        setCurrentIndex((prev) => (prev + 1) % menuItems.length);
    };

    const prevItem = () => {
        setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
    };

    const currentItem = menuItems[currentIndex];

    return (
        <div style={{ backgroundImage: `url(${background})` }} className="bg-no-repeat bg-center bg-cover h-screen flex items-center justify-center">
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg max-w-2xl w-full">
                <div className="text-center mb-4">
                    <card>
                        <table>
                            <thead>
                            <tr className="bg-green-800">
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 p-4">
                                        {head}
                                    </th>
                                ))}
                                </tr>
                            </thead>
                            <tbody>
                            {menuItems.map(({ name, description, price }, index) => {
                                const isLast = index === menuItems.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name} className="even:bg-orange-50/50">
                                        <td className={classes}>
                                            {name}
                                        </td>
                                        <td className={classes}>
                                            {description}
                                        </td>
                                        <td className={classes}>
                                            {formatPrice(price)}
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </card>
                </div>
            </div>

            <div className="bg-orange-100 p-6 rounded-lg shadow-lg max-w-2xl w-full">
                <div className="text-center mb-4">
                    <img
                        src={currentItem.image}
                        alt={currentItem.name}
                        className="w-full max-w-md mx-auto h-64 object-cover rounded-lg mb-4"
                    />
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">{currentItem.name}</h2>
                    <p className="text-gray-700 mb-4">{currentItem.description}</p>
                    <p className="text-xl font-bold text-green-600 mb-6">{formatPrice(currentItem.price)}</p>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={prevItem}
                        className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition-colors"
                    >
                        Prev
                    </button>
                    <button
                        onClick={nextItem}
                        className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition-colors"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuPage;