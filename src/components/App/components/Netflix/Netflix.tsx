import './assets/Netflix.css'
import React, { useRef } from 'react'

interface Props{
  lista:HTMLImageElement[]
}

// TODO: ACCION DE BOTON IZQUIERDA
export default function Netflix( { lista }:Props ) {
    
    const refNetflix = useRef<HTMLDivElement>(null)
    let eKey:number = 0

    
    const avanzarDerecha = (elementoDOM:HTMLElement) => {
      elementoDOM.style.left = '-100px'
    }

    return (
      <div>
      <div className="Netflix__elemento__avanzar__izquierda" 
          onClick={()=>console.log('click')
          }>
            -
      </div>
      <div className="Netflix__elemento__avanzar__derecha"
          onClick={ ()=> {
            if(refNetflix.current) avanzarDerecha(refNetflix.current)
          }}
          >
            +
      </div>
      <div className="Netflix" ref={ refNetflix }>
            {lista.map((e)=> {
              eKey++
                  return <div className="Netflix__elemento" key={eKey} >
                          {e}
                          </div>
            })}
        </div>
      </div>
    )
  }