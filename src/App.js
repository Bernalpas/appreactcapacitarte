

//3. Importamos el controlador de las rutas y las rutas
import { Routes, Route } from 'react-router-dom';

import Navegacion from './componentes/Navegacion';
import Main from './componentes/Main';
import Formulario from './componentes/Formulario';
import Footer from './componentes/Footer';
import Nombre from './componentes/Nombre';
import Error from './componentes/Error';


function App() {
  return (
    <div className="App">

      <Navegacion />

{/* 4. Configurar las rutas  */}
      <Routes>
        <Route path='/main' element= { <Main /> } />
        <Route path='/formulario' element= { <Formulario /> } />
        <Route path='/nombre' element= { <Nombre nombre='Pepe'/> } />
        <Route path='*' element= { <Error /> } />
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
