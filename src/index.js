import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'
import { CompA, CompB } from './components/DoisComponentes'
import MultiElementos from './components/MultiElementos'
import FamiliaSilva from './components/FamiliaSilva'
import Familia from './components/Familia'
import Membro from './components/Membro'
import ComponenteComFuncao from './components/ComponenteComFuncao'
import Pai from './components/Pai'
import ComponenteClasse from './components/ComponenteClasse'
import Contador from './components/Contador'
import Hook from './components/Hook'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />
        <hr />
        <Contador numeroInicial={100}/>
        <hr />
        <ComponenteClasse valor="Sou um componente de classe"/>
        <hr />
        <Pai />
        <hr />
        <ComponenteComFuncao />
        <hr />
        <Familia sobrenome="Pereira">
            <Membro nome="André" />
            <Membro nome="Mariana"/>
        </Familia>
        <hr />
        <FamiliaSilva/>
        <hr />
        <MultiElementos/>
        <hr />
        <CompA valor="Olá eu sou o A!"/>
        <hr />
        <CompB valor="B na área!"/>
        <hr />
        <PrimeiroComponente valoe="Bom dia"/>
    </div>    
, elemento)