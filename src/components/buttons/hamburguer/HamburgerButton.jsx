import { Button, HamburgerBox, HamburgerContainer, HamburgerInner } from "./HamburgerButtonStyles";

const HamburgerButton = ({$open, showNav}) => {
  return (
    <HamburgerContainer>
      <Button onClick={showNav} aria-label="Menú de navegación">
        <HamburgerBox>
          <HamburgerInner $open={$open}></HamburgerInner>
        </HamburgerBox>
      </Button>
    </HamburgerContainer>
  );
};

export default HamburgerButton;