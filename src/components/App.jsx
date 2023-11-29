import React from 'react';
import Portada from './sections/portada/Portada';
import Beneficios from './sections/beneficios/Beneficios';
import Pasos from './sections/pasos/Pasos';
import Equipo from './sections/equipo/Equipo';
import Paquetes from './sections/paquetes/Paquetes';
import Portfolio from './sections/portfolio/Portfolio';
import Contacto from './sections/contacto/Contacto';
import Footer from './footer/Footer';


const App = () => {
  return (
    <>
      <Portada />
      <Beneficios />
      <Pasos />
      <Equipo />
      <Paquetes />
      <Portfolio />
      <Contacto />
      <Footer />
    </>
  );
};

export default App;