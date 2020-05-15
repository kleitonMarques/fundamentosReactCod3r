import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParamentro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default props => (
    <div className="App">
        <Card titulo="#05 - Condicional v2">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card> 

        <Card titulo="#05 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card> 

        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card> 

        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>   

        <Card titulo="#02 - Componente com Parametro">
            <ComParamentro
                titulo="Esse é o título"
                subtitulo="Esse é o subtítulo">
            </ComParamentro>
        </Card>     

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
    </div>
)