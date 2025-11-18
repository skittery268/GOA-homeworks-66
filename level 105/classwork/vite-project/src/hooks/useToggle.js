import { useState } from "react";

const useToggle = () => {
    const [toggle, setToggle] = useState(false);

    const swich = () => {
        setToggle(!toggle);
    };

    return [toggle, swich];
}

export default useToggle;

