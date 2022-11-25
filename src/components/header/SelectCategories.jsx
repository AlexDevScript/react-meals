import React, { useState, useEffect } from 'react'
import { ContainerCategories } from '../../assets/styles/StyleHeader';

const SelectCategories = ({ setSearch, setCategory }) => {
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        const getAllCategories = async () => {
            const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
            try {
                const res = await fetch(url);
                const data = await res.json();

                if (!res.ok) throw { statusText: res.statusText }

                setAllCategories(data?.categories);

            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                console.log(message);
            }
        }

        getAllCategories();

    }, []);

    const handleSelectedCategory = (category) => {
        setSearch(null);
        setCategory(category);
    }

    return (
        <ContainerCategories>
            <h2>Categories</h2>
            <div className="categories__list">

                {allCategories.map((category) => (
                    <div className="categories" key={category.idCategory}>
                        <figure onClick={() => handleSelectedCategory(category.strCategory)}>
                            <img src={category.strCategoryThumb} alt={category.strCategory} />
                            <figcaption>{category.strCategory}</figcaption>
                        </figure>
                    </div>
                ))}

            </div>
        </ContainerCategories>
    )
}

export default SelectCategories;