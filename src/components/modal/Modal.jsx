import React from 'react';
import { ContainerModal } from '../../assets/styles/StyleModal';
import CardModalInfo from './CardModalnfo';

const Modal = ({ dataModal, isOpen, closeModal, favorites, deleteFavorite, favoriteMeals }) => {
    if (!dataModal) return
    const meal = dataModal[0];

    return (
        <ContainerModal isOpen={isOpen ? "flex" : "none"}>
            <CardModalInfo dataModal={meal} closeModal={closeModal} favorites={favorites} deleteFavorite={deleteFavorite} favoriteMeals={favoriteMeals} />
        </ContainerModal>

    )
}

export default Modal;