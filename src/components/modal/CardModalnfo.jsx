import React from "react";
import { ContainerCard } from "../../assets/styles/StyleModal";
import HeartBlack from "../../assets/img/icon-heart-black.png";
import HeartRed from "../../assets/img/icon-heart-red.png";
import {
    ButtonHeartFav,
    ButtonModalClose,
    ButtonModalVideo,
} from "../../assets/styles/StyleButtons";

const CardModalInfo = ({
    dataModal,
    closeModal,
    favorites,
    deleteFavorite,
    favoriteMeals,
}) => {
    if (!dataModal) return;

    let arrayIngredients = [];
    let shortNameMeal = Array.from(dataModal?.strMeal).join(" ").slice(0, 35);

    function addIngredient(meal) {
        for (let i = 1; i <= 20; i++) {
            meal[`strIngredient${i}`]
                ? arrayIngredients.push(
                    `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
                )
                : null;
        }
    }

    addIngredient(dataModal);

    const ListIngredient = ({ ingredient, index }) => (
        <li>
            {index + 1} - {ingredient}
        </li>
    );

    const listIngredients = arrayIngredients.map((ingredient, index) => (
        <ListIngredient key={index} ingredient={ingredient} index={index} />
    ));

    const heart = favorites?.find((mealId) => mealId.idMeal === dataModal.idMeal);

    return (
        <ContainerCard>
            <div className="modal__card">
                <div className="modal__card__title">
                    <h3>{shortNameMeal}</h3>
                </div>

                <div className="modal__card__body">
                    <h3>Ingredients: </h3>
                    <div className="modal__card__body--ingredients">
                        <ul>{listIngredients}</ul>
                    </div>

                    <div className="modal__card__body--preparation">
                        <h3>Instructions:</h3>
                        <div className="modal__card__body--prepation--instructions">
                            <p>{dataModal?.strInstructions}</p>
                        </div>
                    </div>
                </div>

                <div className="modal__card__footer">
                    <ButtonHeartFav
                        className={`card__btn--favorite ${heart ? "hide" : "show"} `}
                        onClick={() => favoriteMeals(dataModal)}>
                        {!heart && <img src={HeartBlack} alt="icon-heart-black" />}
                    </ButtonHeartFav>

                    <ButtonHeartFav
                        className={`card__btn--delete ${!heart ? "hide" : "show"} `}
                        onClick={() => deleteFavorite(dataModal?.idMeal)}>
                        <img src={HeartRed} alt="icon-heart-red" />
                    </ButtonHeartFav>

                    <a href={dataModal?.strYoutube} target="_blank">
                        <ButtonModalVideo>Watch Video</ButtonModalVideo>
                    </a>
                    <ButtonModalClose onClick={closeModal}>Close</ButtonModalClose>
                </div>
            </div>
        </ContainerCard>
    );
};

export default CardModalInfo;
