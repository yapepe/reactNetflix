import './assets/Netflix.css'
import React, { useRef } from 'react'

interface Props{
  lista:any[]
} 



export default function Netflix( { lista }:Props ) {
    
    const refNetflix = useRef<HTMLDivElement>(null)
    let eKey:number = 0
    let posicionActual:number = 0

    const avanzarDerecha = (elementoDOM:HTMLElement ) => {
      
      
      if( posicionActual <= (lista.length * -300 ) + window.innerWidth - 300) {
        posicionActual = 100
      }
      posicionActual-= 100
      

      elementoDOM.style.left = posicionActual +'px'
      
    }

    const avanzarIzquierda = (elementoDOM:HTMLElement ) => {
      
      
      if( posicionActual > 0) {
        posicionActual = (lista.length * -300 ) + window.innerWidth - 300
      }
      posicionActual+= 100
      elementoDOM.style.left = posicionActual +'px'

      
    }

    return (
      <div>
        <div className="Netflix__elemento__avanzar__izquierda" 
            onClick={ ()=> { 
              if(refNetflix.current) avanzarIzquierda(refNetflix.current)
            }}
            >
              - 
              
        </div>
        <div className="Netflix__elemento__avanzar__derecha"
            onClick={ ()=> {
              if(refNetflix.current) avanzarDerecha(refNetflix.current)
            }}
            >
              +
        </div>
        <div className="Netflix" ref={ refNetflix } >
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