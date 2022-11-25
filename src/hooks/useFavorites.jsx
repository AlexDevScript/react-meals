import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useFavorites = (closeModal) => {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("FavoritesMeals")) ?? []
    );

    const saveLocal = () => {
        localStorage.setItem("FavoritesMeals", JSON.stringify(favorites));
    };

    useEffect(() => {
        saveLocal();
    }, [favorites]);

    const favoriteMeals = (meal) => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Added to favorites",
            showConfirmButton: false,
            timer: 1500,
        });
        setFavorites([...favorites, meal]);
    };

    const deleteFavorite = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Remove it from favorites.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                const favoritesMeals = favorites.filter((meal) => meal.idMeal !== id);
                closeModal();
                setFavorites(favoritesMeals);
                Swal.fire({
                    icon: "success",
                    title: "Removed",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return { favorites, favoriteMeals, deleteFavorite };
};
