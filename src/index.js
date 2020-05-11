import './index.css'
import React from 'react'
import ReactDom from 'react-dom'

import ComFilhos from './components/ComFilhos'

ReactDom.render(
    <div>
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
        {/* <Primeiro></Primeiro>
        <ComParamentro
            titulo="Esse é o título"
            subtitulo="Esse é o subtítulo">
        </ComParamentro> */}
    </div>,
    document.getElementById('root')
)