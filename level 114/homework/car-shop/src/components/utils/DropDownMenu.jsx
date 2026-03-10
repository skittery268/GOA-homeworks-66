import { useRef, useState } from "react";
import { Link } from "react-router";

const DropDownMenu = ({ title, items, height }) => {
    const [open, setOpen] = useState(false);
    const timeOutRef = useRef(null);

    const openMenu = () => {
        clearTimeout(timeOutRef.current);
        setOpen(true);
    };

    const closeMenu = () => {
        timeOutRef.current = setTimeout(() => {
            setOpen(false);
        }, 300);
    };

    return (
        <li className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
            <p className="cursor-pointer font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-black after:duration-300 hover:after:w-full">
                {title}
            </p>

            <ul className={`${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"} absolute top-full mt-10 bg-[#172028] ${height} w-50 rounded-xl transition-all duration-300 ease-out`}>
                {items.map(item => (
                    <li key={item.to} className="mt-5 ml-5">
                        <Link to={item.to} className="text-[#9294A3] text-[15px] cursor-pointer duration-500 relative after:duration-500 after:content-[''] after:left-0 after:absolute after:-bottom-0.5 after:w-0 after:h-[0.5px] after:bg-[#9294A3] hover:after:w-full hover:text-white hover:after:bg-white hover:ml-3">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default DropDownMenu;
