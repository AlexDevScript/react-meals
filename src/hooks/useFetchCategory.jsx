import { useState } from "react";

export const useFetchCategory = (setLoading) => {
    const [titleMealCategory, setTitleMealCategory] = useState(null);

    const getCategory = async (category) => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

        setLoading(true);

        try {
            const res = await fetch(url);
            const data = await res.json();

            if (!res.ok) throw { statusText: res.statusText };

            setTitleMealCategory(category);
            return data?.meals;
        } catch (error) {
            let message = error.statusText || "Ocurrió un error";
            console.log(message);
        } finally {
            setLoading(false);
        }
    };

    return { getCategory, titleMealCategory };
};
