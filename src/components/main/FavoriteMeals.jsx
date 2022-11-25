import React from "react";
import { ContainerFavorites } from "../../assets/styles/StyleCardFavorite";
import { ButtonFavorites } from "../../assets/styles/StyleButtons";

const FavoriteMeals = ({ favorites, modal, toggleFav, setToggleFav }) => {
    const CardsFavorites = (favorite) => {
        let shortNmeMeal = Array.from(favorite.strMeal).slice(0, 38);

        return (
            <figure>
                <img
                    src={favorite.strMealThumb}
                    alt={favorite.strMeal}
                    onClick={() => modal(favorite.idMeal)}
                />
                <figcaption>{shortNmeMeal}</figcaption>
            </figure>
        );
    };

    const titleMealsFav = toggleFav
        ? "Hide Meals Favorites"
        : "Show Meals Favorites";

    return (
        <>
            {favorites.length > 0 && (
                <ContainerFavorites>
                    <ButtonFavorites onClick={() => setToggleFav(!toggleFav)}>
                        {titleMealsFav} <span> {favorites.length} </span>
                    </ButtonFavorites>

                    {toggleFav && (
                        <div className="container__cards--favorites">
                            {favorites.map((favorite) => (
                                <CardsFavorites key={favorite.idMeal} {...favorite} />
                            ))}
                        </div>
                    )}
                </ContainerFavorites>
            )}
        </>
    );
};

export default FavoriteMeals;
