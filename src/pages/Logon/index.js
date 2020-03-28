import React, {useState} from 'react'
import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi' 

export default function Logon() {

    return (
        <div className="logon-container">

            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form >
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">Não tenho cadastro</a>
                    <FiLogIn className="iconLogin" size={16} color="#E02041"/>
                </form>



            </section>
            <img src={heroesImg} alt="Heroes" />





        </div>

        
    )

}