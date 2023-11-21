import { MaxWidth, Section } from "../../assets/styles/generalStyles";
import { BoxTexts, Image, Paragraph, Span, Title, Trazo } from "./PortadaStyles";
import IMAGEN_PORTADA from "../../assets/img/Portada.png"
import IMAGEN_TRAZO_A from "../../assets/img/Trazo-A.svg"

const Portada = () => {
  return (
    <Section $portada>
      <MaxWidth $justify="space-between" >

        <BoxTexts>
          <Title>
            Creamos tu
            <br />
            <Span $typeA>Página web</Span>
          </Title>

          <Paragraph>
            En tan solo
            <Span $typeC>15 Días</Span>
            <br />
            <Span $typeC>Desde</Span>
            <Span $typeB>80USD</Span>
          </Paragraph>
        </BoxTexts>

        <Image src={IMAGEN_PORTADA} alt="Chica usando laptop" />
        <Trazo src={IMAGEN_TRAZO_A} />

      </MaxWidth>
      <Trazo src={IMAGEN_TRAZO_A} $mobile />
    </Section>
  );
};

export default Portada;