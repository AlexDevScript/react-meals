import { useState } from "react";

export const useFetchSearch = (setLoading, setError) => {
    const [messageError, setMessageError] = useState("");
    const [titleMeal, setTitleMeal] = useState(null);

    const getDataSearch = async (search) => {
        if (search === null) return;

        let url;
        search === ""
            ? (url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            : (url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);

        setLoading(true);

        try {
            const res = await fetch(url);
            const dataResults = await res.json();

            if (!res.ok) throw { status: res.status, statusText: res.statusText };

            if (dataResults?.meals === null) {
                setError(true);
                setMessageError("Not Found");
                return;
            }

            setTitleMeal(search);
            return dataResults?.meals;
        } catch (error) {
            let message = error.statusText || "Ocurrió un error";
            console.log(message);
        } finally {
            setLoading(false);
        }
    };

    return { getDataSearch, titleMeal, messageError };
};
