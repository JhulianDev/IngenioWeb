import React from 'react';
import Portada from './sections/portada/Portada';
import Beneficios from './sections/beneficios/Beneficios';
import Pasos from './sections/pasos/Pasos';
import Equipo from './sections/equipo/Equipo';
import Paquetes from './sections/paquetes/Paquetes';
import Portfolio from './sections/portfolio/Portfolio';


const App = () => {
  return (
    <>
      <Portada />
      <Beneficios />
      <Pasos />
      <Equipo />
      <Paquetes />
      <Portfolio />
    </>
  );
};

export default App;