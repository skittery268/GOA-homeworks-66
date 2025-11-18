import { useState } from "react";

const useCheckbox = () => {
    const [checkboxValue, setCheckboxValue] = useState(false);

    const handleChange = () => {
        setCheckboxValue(!checkboxValue);
    }

    return [checkboxValue, handleChange];
}

export default useCheckbox;

