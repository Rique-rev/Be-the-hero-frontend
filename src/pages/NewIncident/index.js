import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'


export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                
                    <img src={ logoImg } alt="Be the Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                    
                    <FiArrowLeft size={ 16 } color="#E02041" className="back"/>
                    <Link to="/profile" className="back-link">Voltar para home</Link>

                </section>
                <form>
                <input placeholder="Titulo do caso" />
                <textarea placeholder="Descrição"/>
                <input placeholder="Valor em reais" />

                <buttton className="button" type="submit">Cadastrar</buttton>
                </form>


            </div>
        </div>
    )
}