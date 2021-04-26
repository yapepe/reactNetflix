# GaleriaInstagram.js
carrusel de fotos estilo netflix
## Uso
ReactNetflix.tsx recibe un array de imagenes
``` js 
import './assets/App.css'
import Netflix from './components/Netflix/Netflix'
import imagen1 from '../../assets/1.png'
import imagen2 from '../../assets/2.jpg'
import imagen3 from '../../assets/3.jpg'
import imagen4 from '../../assets/4.jpg'
import imagen5 from '../../assets/5.png'
import imagen6 from '../../assets/6.png'
import imagen7 from '../../assets/7.png'

export default function App() {
  return (
    <div className="App">
      <Netflix
      lista = {[
        <img src={imagen1}></img>,
        <img src={imagen2}></img>,
        <img src={imagen3}></img>,
        <img src={imagen4}></img>,
        <img src={imagen5}></img>,
        <img src={imagen6}></img>,
        <img src={imagen7}></img>,
        <img src={imagen7}></img>,
        <img src={imagen7}></img>
      ]}/>
    </div>
  )
}