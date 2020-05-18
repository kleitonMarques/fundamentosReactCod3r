import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParamentro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'

export default props => (
    <div className="App">
        <Card titulo="#07 - Comunicação Direta" color="#4298B5">
            <Pai sobrenome="Freitas"></Pai>
        </Card>

        <Card titulo="#06 - Condicional v2" color="#FA6900">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card> 

        <Card titulo="#05 - Condicional v1" color="#E94C6F">
            <Condicional numero={10}></Condicional>
        </Card> 

        <Card titulo="#04 - Repetição" color="#008BBA">
            <Repeticao></Repeticao>
        </Card> 

        <Card titulo="#03 - Componente com Filhos" color="#D96459">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>   

        <Card titulo="#02 - Componente com Parametro" color="#FF85CB">
            <ComParamentro
                titulo="Esse é o título"
                subtitulo="Esse é o subtítulo">
            </ComParamentro>
        </Card>     

        <Card titulo="#01 - Primeiro Componente" color="#92B06A">
            <Primeiro></Primeiro>
        </Card>
    </div>
)