import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'


import api from '../../services/api'


export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    function handleRegister(e){
        e.preventDefault()
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        api.post('/ongs', data).then(snapshot => {
            if(!snapshot.data.error){
                alert(`${snapshot.data.message}\nSeu Id de acesso: ${snapshot.data.id}`)
                
                //redirecionando o usuario para tela de login
                history.push('/')
            }
            else{
                alert(`${snapshot.data.message}`)
            }
        })



    }






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

                <form onSubmit={ handleRegister }>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />

                    <input type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}    
                    />
                    
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <input
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>


            </div>
        </div>
    )
}