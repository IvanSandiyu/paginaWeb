import './App.css';
import Header from './Components/Header';
import SobreMi from './Components/SobreMi';
import Tecnologias from './Components/Tecnologias';
import Proyectos from './Components/Proyectos';
import InformacionAdicional from './Components/InformacionAdicional';
import Contacto from './Components/Contacto';
import Actualizacion from './Components/Actualizacion';

function App() {
  return <>
    <div className="container">
      <div id='prueba'>
        <Header />
      </div>

      <div className='contenido'>
        <SobreMi />
        <Tecnologias />
      </div>
      <div className='div-proyectos'>
        <Proyectos />
        <div className='info-contacto'>
          <InformacionAdicional />
          <Contacto />
          <Actualizacion/>
        </div>
      </div>


    </div>


  </>
}

export default App;
