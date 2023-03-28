import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <PrimeiroComponente valoe="Bom dia"/>
    </div>    
, elemento)