import { Button } from "./ContactButtonStyles";

const ContactButton = () => {
  return (
    <Button
      to="https://api.whatsapp.com/send?phone=541124071361&text=Hola%20Ingenio!%20%F0%9F%91%8B%F0%9F%8F%BB%20Vengo%20de%20su%20pagina%20web%20%F0%9F%92%BB%20y%20estoy%20interesad@%20en%20obtener%20mas%20informaci%C3%B3n%20sobre%20sus%20servicios%20%F0%9F%AB%A3">
      Contactar
    </Button>
  );
};

export default ContactButton;