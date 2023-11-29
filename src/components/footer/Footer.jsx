import React from 'react';
import { MaxWidth } from '../../assets/styles/GeneralStyles';
import { CopyRight, FooterContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <MaxWidth $footer>
        <CopyRight>© Copyright 2023 IngenioWeb, todos los derechos reservados.</CopyRight>
      </MaxWidth>
    </FooterContainer>
  );
};

export default Footer;