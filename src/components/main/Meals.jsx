import React from "react";
import { CardMeal } from "../../assets/styles/StyleCard";
import { SectionMeals } from "../../assets/styles/StyleSectionMeals";
import MessageError from "../MessageError";
import HeartBlack from "../../assets/img/icon-heart-black.png";
import HeartRed from "../../assets/img/icon-heart-red.png";
import { ButtonHeartFav, ButtonInfo } from "../../assets/styles/StyleButtons";

const Meals = ({
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
    let title = titleMeal ? titleMeal : "Meals";

    const Card = ({ meal }) => {
        const heart = favorites?.find((mealId) => mealId.idMeal === meal.idMeal);

        return (
            <CardMeal>
                <div className="card__header">
                    <img src={meal?.strMealThumb} alt={meal?.strMeal} />
                </div>
                <div className="card__body">
                    <p>{meal?.strMeal}</p>
                    {meal?.strCategory && <p>Category: {meal.strCategory}</p>}
                </div>
                <div className="card__footer">
                    <ButtonHeartFav
                        className={`card__btn--favorite ${heart ? "hide" : "show"} `}
                        onClick={() => favoriteMeals(meal)}>
                        {!heart && <img src={HeartBlack} alt="icon-heart-black" />}
                    </ButtonHeartFav>

                    <ButtonHeartFav
                        className={`card__btn--delete ${!heart ? "hide" : "show"} `}
                        onClick={() => deleteFavorite(meal.idMeal)}>
                        <img src={HeartRed} alt="icon-heart-red" />
                    </ButtonHeartFav>

                    <ButtonInfo onClick={() => modal(meal.idMeal)}>
                        More Information
                    </ButtonInfo>
                </div>
            </CardMeal>
        );
    };

    return (
        <>
            {!dataCategory ||
                (dataSearch && (
                    <SectionMeals>
                        {error ? (
                            <MessageError messageError={messageError} setError={setError} />
                        ) : loading ? (
                            <span className="loader"></span>
                        ) : (
                            <>
                                <h2>{title}</h2>
                                <h3 className="results">Results {dataSearch?.length}</h3>

                                <div className="container__cards">
                                    {dataSearch?.map((meal) => (
                                        <Card key={`Meal-id-${meal.idMeal}`} meal={meal} />
                                    ))}
                                </div>
                            </>
                        )}
                    </SectionMeals>
                ))}

            {dataCategory && !dataSearch && !error && (
                <SectionMeals>
                    {loading ? (
                        <span className="loader"></span>
                    ) : (
                        <>
                            <h2>{titleMealCategory}</h2>
                            <h3 className="results">Results {dataCategory?.length}</h3>
                            <div className="container__cards">
                                {dataCategory?.map((meal) => (
                                    <Card key={`Meal-id-${meal.idMeal}`} meal={meal} />
                                ))}
                            </div>
                        </>
                    )}
                </SectionMeals>
            )}
        </>
    );
};

export default Meals;
