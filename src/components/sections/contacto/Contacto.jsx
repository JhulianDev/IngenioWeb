import React from 'react';
import { MaxWidth, Section, SubtitleSection } from '../../../assets/styles/GeneralStyles';
import ContactButton from '../../buttons/contact/ContactButton';
import { colors } from '../../../assets/colors/Colors';

const Contacto = () => {
  return (
    <Section $bgColor={colors.colorSecundario} $height="100px">
      <MaxWidth $column>
        <SubtitleSection $contacto>¿Tienes dudas sobre como comenzar? Contáctanos y te asesoraremos.</SubtitleSection>
        <ContactButton />
      </MaxWidth>
    </Section>
  );
};

export default Contacto;