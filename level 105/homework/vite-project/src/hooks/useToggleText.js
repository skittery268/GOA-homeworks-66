import { useState } from "react";

const useToggleText = () => {
    const [toggleText, setToggleText] = useState(false);

    const toggleTextFunc = () => {
        setToggleText(!toggleText);
    }

    return [toggleText, toggleTextFunc];
}

export default useToggleText;

