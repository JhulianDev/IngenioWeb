import { BoxDescription, CardBox, Description, Image } from "./CardTeamStyles";
import TEAM from "../../../assets/img/Team.webp";

const CardTeam = () => {
  return (
    <CardBox>
      <Image src={TEAM} alt="Equipo de trabajo" />
      <BoxDescription>
        <Description>
          Sabemos que la creación de una página web podría parecer abrumadora, sin embargo, con una planificacion apropiada y el equipo adecuado, se puede convertir en un proceso sencillo y agradable.
        </Description>

        <Description>
          <b>
            Nuestro equipo se encargará de asistirte durante todo el proceso de desarrollo, planificacion y diseño de tu pagina web para que obtengas el resultado  que deseas.
          </b>
        </Description>

        <Description>
          Además te ofrecemos el servicio de mantenimiento web, para gestionar todos los cambios y ajustes que desees realizarle a tu web en el futuro.
        </Description>
      </BoxDescription>
    </CardBox>
  );
};

export default CardTeam;