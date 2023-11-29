import React from 'react';
import Portada from './sections/portada/Portada';
import Beneficios from './sections/beneficios/Beneficios';
import Pasos from './sections/pasos/Pasos';
import Equipo from './sections/equipo/Equipo';
import Paquetes from './sections/paquetes/Paquetes';


const App = () => {
  return (
    <>
      <Portada />
      <Beneficios />
      <Pasos />
      <Equipo />
      <Paquetes />
    </>
  );
};

export default App;