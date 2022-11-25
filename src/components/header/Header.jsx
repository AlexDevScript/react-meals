import React from "react";
import SelectCategories from "./SelectCategories";
import { ContainerHeader } from "../../assets/styles/StyleHeader";
import Form from "./Form";

const Header = ({ setSearch, setCategory, reset }) => {
    return (
        <ContainerHeader>
            <Form setSearch={setSearch} reset={reset} />

            <SelectCategories setSearch={setSearch} setCategory={setCategory} />
        </ContainerHeader>
    );
};

export default Header;
