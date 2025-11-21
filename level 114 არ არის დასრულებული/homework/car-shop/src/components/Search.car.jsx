const Search_car = () => {
    return (
        <section className="mb-100 flex justify-center items-center">
            <form className="w-330 h-15 bg-[#EEF6FA] flex justify-center items-center gap-[20px] mt-10 rounded-2xl">
                <input type="text" name="carIdOwnerorSellerInfo" className="w-100 text-gray-700 focus:border-none focus:outline-none" placeholder="Car ID or owner/seller's name, phone or email" />
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
                    <option>Manufacturer</option>
                    <option>Audi (3)</option>
                    <option>BMW (5)</option>
                    <option>Hyundai (1)</option>
                    <option>Mercedes (1)</option>
                    <option>Porsche (2)</option>
                    <option>Tesla (2)</option>
                    <option>Toyota (1)</option>
                    <option>Volkswagen (1)</option>
                </select>
                <select name="city" className="w-35 text-gray-400">
                    <option>City</option>
                    <option>Chicago (4)</option>
                    <option>Detroit (4)</option>
                    <option>Miami (3)</option>
                    <option>Seattle (5)</option>
                </select>
                <img src="./src/icons/settings.png" className="h-5" />
                
            </form>
        </section>
    )
}

export default Search_car;
