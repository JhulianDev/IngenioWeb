import { colors } from "../../../assets/colors/Colors";
import { MaxWidth, Section, SubtitleSection, TitleSection } from "../../../assets/styles/GeneralStyles";
import { BoxImages, Image } from "./PortfolioStyles";
import PORTFOLIO_01 from "../../../assets/img/Portfolio-01.webp"
import PORTFOLIO_02 from "../../../assets/img/Portfolio-02.webp"
import PORTFOLIO_03 from "../../../assets/img/Portfolio-03.webp"
import PORTFOLIO_04 from "../../../assets/img/Portfolio-04.webp"

const Portfolio = () => {
  return (
    <Section $align="flex-start">
      <MaxWidth $column>
        <TitleSection $textColor={colors.colorSecundario}>Conoce parte de nuestro portafolio</TitleSection>
        <SubtitleSection $textColor={colors.colorSecundario}>Webs esteticas y funcionales</SubtitleSection>

        <BoxImages>
          <Image src={PORTFOLIO_01} alt="Mockup Proyecto Web" />
          <Image src={PORTFOLIO_02} alt="Mockup Proyecto Web" />
          <Image src={PORTFOLIO_03} alt="Mockup Proyecto Web" />
          <Image src={PORTFOLIO_04} alt="Mockup Proyecto Web" />
        </BoxImages>
      </MaxWidth>
    </Section>
  );
};

export default Portfolio;