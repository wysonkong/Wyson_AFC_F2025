import background from "../assets/malaysian-food.jpg";

const HomePage = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="bg-no-repeat bg-center bg-cover h-screen flex items-center justify-center">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center text-white opacity-75">
                <h1 className="text-4xl font-bold mb-4">Welcome to Nomad Meals</h1>
                <p className="text-xl">Experience flavors from around the world</p>
            </div>
        </div>

    );
};

export default HomePage;