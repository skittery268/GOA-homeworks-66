import rightArrow from "../icons/rightArrow.png";

const Footer = () => {
    return (
        <section className="w-full h-150 bg-[#0D161F]">
            <div className="h-60 w-full relative">
                <h1 className="text-white text-5xl w-150 absolute bottom-10 left-30">We offer premium automotive services</h1>
            </div>
            <div className="flex justify-center items-center mt-5">
                
                <div className="h-50 w-100">
                    <h1 className="text-white text-[20px] mb-6">Address</h1>
                    <p className="text-[#9294A3] text-[18px]">Germany —</p>
                    <p className="text-[#9294A3] text-[18px]">785 15h Street, Office 478,</p>
                    <p className="text-[#9294A3] text-[18px]">Berlin, De 81566</p>
                </div>

                <div className="h-50 w-70">
                    <h1 className="text-white text-[20px] mb-6">Say Hello</h1>
                    <p className="text-[#9294A3] text-[18px] cursor-pointer duration-500 relative after:duration-500 after:content-[''] after:left-0 after:absolute after:-bottom-0.5 after:w-[47%] after:h-[0.5px] after:bg-[#9294A3] hover:after:w-0 hover:text-white hover:after:bg-white">info@email.com</p>
                    <p className="text-white font-bold text-[20px] mt-5 cursor-pointer">+1 840 841 25 69</p>
                </div>

                <div className="h-50 w-70">
                    <h1 className="text-white text-[20px] mb-6">Socials</h1>
                    <p className="text-[#9294A3] text-[18px] duration-500 cursor-pointer hover:text-white">Facebook</p>
                    <p className="text-[#9294A3] text-[18px] mt-3 duration-500 cursor-pointer hover:text-white">Twitter (X)</p>
                    <p className="text-[#9294A3] text-[18px] mt-3 duration-500 cursor-pointer hover:text-white">Dribble</p>
                    <p className="text-[#9294A3] text-[18px] mt-3 duration-500 cursor-pointer hover:text-white">Instagram</p>
                </div>

                <div className="h-50 w-80">
                    <h1 className="text-white text-[20px] mb-6">Newsletter</h1>
                    <label className="flex justify-center items-center">
                        <input type="email" className="outline-0 text-[#9294A3] border-b-2 w-70 border-[#424A50] pb-6" placeholder="Enter Your Email Adress" />
                        <img src={rightArrow} className="h-7 w-7 cursor-pointer" />
                    </label>
                    <label className="flex mt-5 ml-1 items-center">
                        <input type="checkbox" />
                        <p className="text-[#9294A3] ml-2">I agree to the Privacy Policy.</p>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default Footer;