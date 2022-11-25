import React from "react";
import Meals from "./Meals";

const Main = ({
    dataCategory,
    dataSearch,
    titleMeal,
    titleMealCategory,
    loading,
    modal,
    error,
    messageError,
    setError,
    favoriteMeals,
    favorites,
    deleteFavorite,
}) => {
    return (
        <main>
            <Meals
                dataCategory={dataCategory}
                dataSearch={dataSearch}
                titleMeal={titleMeal}
                titleMealCategory={titleMealCategory}
                loading={loading}
                modal={modal}
                error={error}
                messageError={messageError}
                setError={setError}
                favoriteMeals={favoriteMeals}
                favorites={favorites}
                deleteFavorite={deleteFavorite}
            />
        </main>
    );
};

export default Main;
