import { colors } from "../../../assets/colors/Colors";
import { MaxWidth, Section, SubtitleSection, TitleSection } from "../../../assets/styles/GeneralStyles";
import CardTeam from "../../cards/cardTeam/CardTeam";

const Equipo = () => {
  return (
    <Section $align="flex-start" $bgColor={colors.colorSecundario}>
      <MaxWidth $column>
        <TitleSection>¿No sabes por donde empezar?</TitleSection>
        <SubtitleSection>¡Nosotros te ayudaremos!</SubtitleSection>
        <CardTeam />
      </MaxWidth>
    </Section>
  );
};

export default Equipo;