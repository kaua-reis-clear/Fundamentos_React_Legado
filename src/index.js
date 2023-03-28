import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'
import { CompA, CompB } from './components/DoisComponentes'
import MultiElementos from './components/MultiElementos'
import FamiliaSilva from './components/FamiliaSilva'
import Familia from './components/Familia'
import Membro from './components/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Familia sobrenome="Pereira">
            <Membro nome="André" />
            <Membro nome="Mariana"/>
        </Familia>
        <FamiliaSilva/>
        <MultiElementos/>
        <CompA valor="Olá eu sou o A!"/>
        <CompB valor="B na área!"/>
        <PrimeiroComponente valoe="Bom dia"/>
    </div>    
, elemento)