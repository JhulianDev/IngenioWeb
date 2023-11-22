import React from 'react';
import { MaxWidth, Section } from '../../../assets/styles/generalStyles';
import CardBeneficio from '../../cards/cardBeneficio/CardBeneficio';
import ICONO_DOMINIO from '../../../assets/img/Icono-Dominio.svg'
import ICONO_HOSTING from '../../../assets/img/Icono-Hosting.svg'
import ICONO_RESPONSIVE from '../../../assets/img/Icono-Responsive.svg'
import { colors } from '../../../assets/colors/Colors';

const Beneficios = () => {
  return (
    <Section $height="100px" $bgColor={colors.colorPrincipal}>
      <MaxWidth>

        <CardBeneficio
          icon={ICONO_DOMINIO}
          title="Dominio Gratis"
          description="De regalo por un año"
        />

        <CardBeneficio
          icon={ICONO_HOSTING}
          title="Hosting Gratis"
          description="De regalo por un año"
        />

        <CardBeneficio
          icon={ICONO_RESPONSIVE}
          title="Diseño Adaptable"
          description="A todos los dispositivos"
        />

      </MaxWidth>
    </Section>
  );
};

export default Beneficios;