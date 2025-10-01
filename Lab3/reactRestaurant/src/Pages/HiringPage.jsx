import { useState } from "react";
import background from "../assets/malaysian-food.jpg";

const HiringPage = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        age: 21,
        phone: "",
        email: "",
        password: "",
        marital_status: "single",
        favorite_color: [],
        info: "",
    });

    const [errors, setErrors] = useState({});
    const [charCount, setCharCount] = useState(0);

    // Regex patterns
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$?]).{8,12}$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    const validate = () => {
        let newErrors = {};

        // First name: required, 1–20 chars
        if (!formData.first_name || formData.first_name.length > 20) {
            newErrors.first_name = "First name is required (1–20 characters).";
        }

        // Last name: optional, if present 1–20 chars
        if (formData.last_name && formData.last_name.length > 20) {
            newErrors.last_name = "Last name must be 1–20 characters.";
        }

        // Address1: required, max 50 chars (reasonable)
        if (!formData.address1 || formData.address1.length > 50) {
            newErrors.address1 = "Address is required (max 50 characters).";
        }

        // City: required, max 29 chars
        if (!formData.city || formData.city.length > 29) {
            newErrors.city = "City is required (max 29 characters).";
        }

        // State: required (only TX, CA, NY)
        if (!formData.state) {
            newErrors.state = "State is required.";
        }

        // Zip: required, must be 5 digits
        if (!/^\d{5}$/.test(formData.zip)) {
            newErrors.zip = "Enter a valid 5-digit zipcode.";
        }

        // Age: required, 21–99
        if (!formData.age || formData.age < 21 || formData.age > 99) {
            newErrors.age = "Age must be between 21 and 99.";
        }

        // Phone: required, match pattern
        if (!phonePattern.test(formData.phone)) {
            newErrors.phone = "Phone must match format 123-456-7890.";
        }

        // Email: required
        if (!formData.email) {
            newErrors.email = "Email is required.";
        }

        // Password: required, must match pattern
        if (!passwordPattern.test(formData.password)) {
            newErrors.password =
                "Password must be 8–12 chars, include upper, lower, digit, special (!@#$?).";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => {
                const newColors = checked
                    ? [...prev.favorite_color, value]
                    : prev.favorite_color.filter((c) => c !== value);
                return { ...prev, favorite_color: newColors };
            });
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        if (name === "info") {
            setCharCount(value.length);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
        }
    };

    const handleReset = () => {
        setFormData({
            first_name: "",
            last_name: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
            age: 21,
            phone: "",
            email: "",
            password: "",
            marital_status: "single",
            favorite_color: [],
            info: "",
        });
        setErrors({});
        setCharCount(0);
    };

    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="bg-no-repeat bg-center bg-cover min-h-screen flex items-center justify-center"
        >
            <div className="bg-orange-100 p-8 rounded-2xl shadow-xl w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-6">Hiring Form</h2>
                <form className="space-y-6" onSubmit={handleSubmit} onReset={handleReset}>
                    {/* First & Last name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border p-2 ${
                                    errors.first_name ? "border-red-500" : "border-gray-300"
                                }`}
                                required
                                maxLength={20}
                            />
                            {errors.first_name && (
                                <p className="text-red-600 text-sm">{errors.first_name}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border p-2 ${
                                    errors.last_name ? "border-red-500" : "border-gray-300"
                                }`}
                                maxLength={20}
                            />
                            {errors.last_name && (
                                <p className="text-red-600 text-sm">{errors.last_name}</p>
                            )}
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium">Address 1</label>
                        <input
                            type="text"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-lg border p-2 ${
                                errors.address1 ? "border-red-500" : "border-gray-300"
                            }`}
                            maxLength={50}
                            required
                        />
                        {errors.address1 && (
                            <p className="text-red-600 text-sm">{errors.address1}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Address 2</label>
                        <input
                            type="text"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
                        />
                    </div>

                    {/* City, State, Zip */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border p-2 ${
                                    errors.city ? "border-red-500" : "border-gray-300"
                                }`}
                                required
                                maxLength={29}
                            />
                            {errors.city && (
                                <p className="text-red-600 text-sm">{errors.city}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">State</label>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border p-2 ${
                                    errors.state ? "border-red-500" : "border-gray-300"
                                }`}
                                required
                            >
                                <option value="">Select a state</option>
                                <option value="TX">Texas</option>
                                <option value="CA">California</option>
                                <option value="NY">New York</option>
                            </select>
                            {errors.state && (
                                <p className="text-red-600 text-sm">{errors.state}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Zipcode</label>
                            <input
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border p-2 ${
                                    errors.zip ? "border-red-500" : "border-gray-300"
                                }`}
                                required
                                maxLength={5}
                            />
                            {errors.zip && <p className="text-red-600 text-sm">{errors.zip}</p>}
                        </div>
                    </div>

                    {/* Age and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                min="21"
                                max="99"
                                className={`mt-1 block w-full rounded-lg border p-2 ${
                                    errors.age ? "border-red-500" : "border-gray-300"
                                }`}
                                required
                            />
                            {errors.age && <p className="text-red-600 text-sm">{errors.age}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="123-456-7890"
                                className={`mt-1 block w-full rounded-lg border p-2 ${
                                    errors.phone ? "border-red-500" : "border-gray-300"
                                }`}
                                required
                            />
                            {errors.phone && (
                                <p className="text-red-600 text-sm">{errors.phone}</p>
                            )}
                        </div>
                    </div>

                    {/* Email and Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border p-2 ${
                                    errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                                required
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border p-2 ${
                                    errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                                required
                            />
                            <p className="text-xs text-gray-500">
                                Must be 8–12 chars, include upper, lower, number, and symbol.
                            </p>
                            {errors.password && (
                                <p className="text-red-600 text-sm">{errors.password}</p>
                            )}
                        </div>
                    </div>

                    {/* Married status */}
                    <div>
                        <span className="block text-sm font-medium">Married</span>
                        <div className="flex gap-6 mt-1">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="marital_status"
                                    value="married"
                                    checked={formData.marital_status === "married"}
                                    onChange={handleChange}
                                />
                                Yes
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="marital_status"
                                    value="single"
                                    checked={formData.marital_status === "single"}
                                    onChange={handleChange}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    {/* Colors */}
                    <div>
                        <span className="block text-sm font-medium">Favorite Colors</span>
                        <div className="flex flex-wrap gap-4 mt-1">
                            {["Red", "Blue", "Green", "Yellow", "Purple"].map((color) => (
                                <label key={color} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="favorite_color"
                                        value={color}
                                        checked={formData.favorite_color.includes(color)}
                                        onChange={handleChange}
                                    />
                                    {color}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div>
                        <label className="block text-sm font-medium">More Info</label>
                        <textarea
                            name="info"
                            value={formData.info}
                            onChange={handleChange}
                            rows="4"
                            maxLength="30"
                            className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
                            placeholder="Tell us more about yourself..."
                        />
                        <p className="text-xs text-gray-500">{charCount} / 30</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4">
                        <button
                            type="submit"
                            className="bg-red-700 text-white px-6 py-2 rounded-lg shadow hover:bg-red-800 transition"
                        >
                            Submit
                        </button>
                        <button
                            type="reset"
                            className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-500 transition"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HiringPage;
