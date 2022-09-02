import React from "react";
import { useGlobalContext } from "../../context";

export const Header = () => {

    const {openModal} = useGlobalContext()

  return<section className="header">
    <h1 className="titulo">To Do List</h1>
    <button className="botao" onClick={openModal}>Adicionar item</button>
  </section>
}