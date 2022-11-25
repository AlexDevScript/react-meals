import { useState, useEffect } from "react";

export const useSearchId = (openModal) => {
    const [searchId, setSearchId] = useState(null);
    const [dataModal, setDataModal] = useState([]);
    const [isActiveModal, setIsActiveModal] = useState(false);

    useEffect(() => {
        const getMealId = async (searchId) => {
            const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchId}`;

            try {
                const res = await fetch(url);
                const data = await res.json();

                if (!res.ok) throw { statusText: res.statusText };

                setDataModal(data.meals);
            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                console.log(message);
            }
        };

        getMealId(searchId);
    }, [searchId]);

    const modal = (idMeal) => {
        setSearchId(idMeal);
        setIsActiveModal(true);
        openModal();
    };

    return { searchId, dataModal, isActiveModal, modal };
};
