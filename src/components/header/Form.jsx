import React, { useState } from "react";
import { ButtonForm } from "../../assets/styles/StyleButtons";

const Form = ({ setSearch, reset }) => {
    const initialInputName = { meal: "" };
    const [inputName, setInputName] = useState(initialInputName);
    const [error, setError] = useState(false);
    const [messageErrorForm, setMessageErrorForm] = useState(null);

    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setInputName({
            ...inputName,
            [name]: value,
        });
    };

    const handleValidate = () => {
        let regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

        if (!regex.test(inputName.meal) && inputName.meal !== "") {
            setError(true);
            setMessageErrorForm("Numbers and symbols are not allowed");
            return;
        }
        setError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mealName = inputName.meal.trim();

        setSearch(mealName);
        setInputName(initialInputName);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">
                Meal
                <input
                    type="text"
                    id="search"
                    name="meal"
                    value={inputName.meal}
                    placeholder="Example: Sushi"
                    onChange={handleChangeName}
                    onKeyUp={handleValidate}
                    required
                    autoFocus
                />
                {error && <p className="error__form">{messageErrorForm}</p>}
            </label>

            <div className="form__btns">
                <ButtonForm type="submit">Search</ButtonForm>
                <ButtonForm type="reset" onClick={() => reset()}>
                    Clear
                </ButtonForm>
            </div>
        </form>
    );
};

export default Form;
