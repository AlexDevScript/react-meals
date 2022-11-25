import { useState, useEffect } from "react";
import { Container } from "../assets/styles/StyleContainer";
import { useFetchSearch } from "../hooks/useFetchSearch";
import { useFavorites } from "../hooks/useFavorites";
import { useFetchCategory } from "../hooks/useFetchCategory";
import { useModal } from "../hooks/useModal";
import { useSearchId } from "../hooks/useSearchId";
import Header from "./header/Header";
import FavoriteMeals from "./main/FavoriteMeals";
import Main from "./main/Main";
import Modal from "./modal/Modal";

const Meal = () => {
    const [dataSearch, setDataSearch] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(null);
    const [dataCategory, setDataCategory] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toggleFav, setToggleFav] = useState(false);

    const { openModal, closeModal, isOpen } = useModal();

    const { searchId, dataModal, isActiveModal, modal } = useSearchId(openModal);

    const { getDataSearch, titleMeal, messageError } = useFetchSearch(
        setLoading,
        setError
    );

    const { getCategory, titleMealCategory } = useFetchCategory(setLoading);

    const { favorites, favoriteMeals, deleteFavorite } = useFavorites(closeModal);

    useEffect(() => {
        const getRecipeResults = async (search) => {
            const results = await getDataSearch(search);

            setDataSearch(results);
            setToggleFav(false);
            setCategory(null);
        };

        getRecipeResults(search);
    }, [search]);

    useEffect(() => {
        if (!category) return;

        const getCategoryResults = async (category) => {
            const results = await getCategory(category);

            setDataCategory(results);
            setToggleFav(false);
        };

        getCategoryResults(category);
    }, [category]);

    useEffect(() => {
        if (error) setSearch("");
    }, [error]);

    const reset = () => {
        setSearch("");
        setCategory(null);
    };

    return (
        <Container>
            <Header setSearch={setSearch} setCategory={setCategory} reset={reset} />

            <FavoriteMeals
                favorites={favorites}
                modal={modal}
                toggleFav={toggleFav}
                setToggleFav={setToggleFav}
            />

            <Main
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

            <Modal
                dataModal={dataModal}
                isOpen={isOpen}
                closeModal={closeModal}
                favoriteMeals={favoriteMeals}
                favorites={favorites}
                deleteFavorite={deleteFavorite}
            />
        </Container>
    );
};

export default Meal;
