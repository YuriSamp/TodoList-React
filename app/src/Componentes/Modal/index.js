import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import './modal.css'
import { FaTimes } from "react-icons/fa";

export const Modal = ({ setInputText, todos, setTodos, inputText }) => {

  const { isModalOpen, closeModal } = useGlobalContext();

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  };


  const acao = (e) => {
    e.preventDefault()
    if(inputText === ""){ 
      alert("É necessario escrever algo")
    } else
    setTodos([
      ...todos, {
        text: inputText,
        id: Math.random() * 1000,
        completed : false
      }
    ])
    setInputText("")
  }


  return <div className={` ${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
    <div className='modal-container'>
      <form >
        <h3 className="form-titulo">Crie uma To-do List</h3>
        <p className="subtitulo-1">O que pretende colocar na lista?</p>
        <div>
          <input
            value={inputText}
            className="ipt"
            onChange={inputTextHandler} />
        </div>
        <button className="adiciona" onClick={acao} >Adicionar a lista</button>
      </form>
      <button className='close-modal-btn' onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  </div>
}