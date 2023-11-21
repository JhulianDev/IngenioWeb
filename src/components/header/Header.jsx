import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MaxWidth } from '../../assets/styles/generalStyles';
import { HeaderContainer, Logo } from './HeaderStyles';
import ISOTIPO from '../../assets/img/isotipo.png'
import HamburgerButton from '../buttons/hamburguer/HamburgerButton';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const showNav = () => setOpenNav(!openNav);
  return (
    <>
      <HeaderContainer>
        <MaxWidth $justify='space-between' $header>
          <Logo src={ISOTIPO} alt='Isotipo IngenioWeb' />
          <HamburgerButton $open={openNav} showNav={showNav} />
        </MaxWidth>
      </HeaderContainer>

      <Outlet />
    </>
  );
};

export default Header;