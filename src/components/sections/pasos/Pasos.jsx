import { MaxWidth, Section, SubtitleSection, TitleSection } from "../../../assets/styles/GeneralStyles";
import CardStep from "../../cards/cardStep/CardStep";
import STEP_01 from "../../../assets/img/Step-01.webp";
import STEP_02 from "../../../assets/img/Step-02.webp";
import STEP_03 from "../../../assets/img/Step-03.webp";
import { BoxSteps } from "./PasosStyles";
import { colors } from "../../../assets/colors/Colors";

const Pasos = () => {
  return (
    <Section $align="flex-start">
      <MaxWidth $column>
        <TitleSection>¿Cómo haremos tu web?</TitleSection>
        <SubtitleSection>¡En 3 simples pasos!</SubtitleSection>

        <BoxSteps>

          <CardStep
            position="left"
            number="01"
            image={STEP_01}
            alt="Joven en reunión de trabajo"
            title="Reunión Inicial"
            description="Programaremos una reunion en la que resolveremos todas tus dudas y planearemos juntos el contenido y la estructura que tendra tu sitio web"
            bgColor={colors.colorPrincipal}
          />

          <CardStep
            position="right"
            number="02"
            image={STEP_02}
            alt="Mockup Propuestas Web"
            title="Presentación de propuesta"
            description="Presentaremos una propuesta del sitio web donde plasmaremos todas las solicitudes y requerimientos acordados en la reunión inicial"
            bgColor={colors.colorTerciario}
          />

          <CardStep
            position="left"
            number="03"
            image={STEP_03}
            alt="Mockup Entrega Web"
            title="Entrega Final"
            description="Una vez realizadas las correcciones correspondientes y estes conforme con el resultado, te haremos entrega del sitio web desplegado y en funcionamiento."
            bgColor={colors.colorSecundario}
          />

        </BoxSteps>


      </MaxWidth>
    </Section>
  );
};

export default Pasos;