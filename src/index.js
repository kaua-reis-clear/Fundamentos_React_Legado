import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'
import { CompA, CompB } from './components/DoisComponentes'
import MultiElementos from './components/MultiElementos'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <MultiElementos/>
        <CompA valor="Olá eu sou o A!"/>
        <CompB valor="B na área!"/>
        <PrimeiroComponente valoe="Bom dia"/>
    </div>    
, elemento)