import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import { FiArrowLeft } from 'react-icons/fi'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                
                    <img src={ logoImg } alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <FiArrowLeft size={ 16 } color="#E02041" className="back"/>
                    <Link to="/" className="back-link">Voltar</Link>

                </section>
                <form>
                <input placeholder="Nome da ONG" />
                <input type="email" placeholder="E-mail"/>
                <input placeholder="Whatsapp" />
                
                <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" style={{ width: 80 }}/>
                </div>
                
                <buttton className="button" type="submit">Cadastrar</buttton>
                </form>


            </div>
        </div>
    )
}