import './index.css'
import React from 'react'
import ReactDom from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        <ComParamentro
            titulo="Esse é o título"
            subtitulo="Esse é o subtítulo">
        </ComParamentro>
    </div>,
    document.getElementById('root')
)