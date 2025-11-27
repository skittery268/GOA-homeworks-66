import { useState } from "react";
import { Link } from "react-router";

const Search_car = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className="flex justify-center items-center">
            <form className="w-300 h-15 bg-[#EEF6FA] flex justify-center items-center gap-5 mt-10 rounded-xl">
                <input type="text" name="carIdOwnerorSellerInfo" className="w-100 text-gray-700 ml-5 focus:border-none focus:outline-none" placeholder="Car ID or owner/seller's name, phone or email" />
                <select name="status" className="w-35 text-gray-400">
                    <option value="">Status</option>
                    <option value="forRent3">For Rent (3)</option>
                    <option value="forSale13">For Sale (13)</option>
                </select>
                <select name="type" className="w-35 text-gray-400">
                    <option value="">Type</option>
                    <option value="coupe6">Coupe (6)</option>
                    <option value="hatchback2">Hatchback (2)</option>
                    <option value="sedan4">Sedan (4)</option>
                    <option value="sport1">Sport (1)</option>
                    <option value="suv1">Suv (1)</option>
                    <option value="wagon2">Wagon (2)</option>
                </select>
                <select name="mark" className="w-35 text-gray-400">
                    <option value="">Manufacturer</option>
                    <option value="audi">Audi (3)</option>
                    <option value="bmw">BMW (5)</option>
                    <option value="hyundai">Hyundai (1)</option>
                    <option value="mercedes">Mercedes (1)</option>
                    <option value="porsche">Porsche (2)</option>
                    <option value="tesla">Tesla (2)</option>
                    <option value="toyota">Toyota (1)</option>
                    <option value="volkswagen">Volkswagen (1)</option>
                </select>

                <select name="city" className="w-35 text-gray-400">
                    <option value="">City</option>
                    <option value="chicago">Chicago (4)</option>
                    <option value="detroit">Detroit (4)</option>
                    <option value="miami">Miami (3)</option>
                    <option value="seattle">Seattle (5)</option>
                </select>
                <img src="./src/icons/settings.png" onClick={() => setOpen(!open)} className="h-5 ml-2 mr-5 hover:cursor-pointer" />
                <Link className="h-15 w-17 bg-blue-600 hover:bg-blue-700 flex justify-center items-center rounded-r-xl"><img src="./src/icons/search.png" className="h-4" /></Link>
            </form>
        </section>
    )
}

export default Search_car;
