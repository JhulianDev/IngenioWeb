import { colors } from "../../../assets/colors/Colors";
import { MaxWidth, Section, SubtitleSection, TitleSection } from "../../../assets/styles/GeneralStyles";
import CardPack from "../../cards/cardPack/CardPack";
import { WindowSlider, Wave, SliderMovil, BoxCircles, Circle, TouchSlider } from "./PaquetesStyles";
import WAVE from "../../../assets/img/wave.svg"
import useSlider from "../../../hooks/useSlider";
import CurrencySelector from "../../currencySelector/CurrencySelector";
import { useContext } from "react";
import { PacksContext } from "../../../contexts/PacksContext";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import { v4 as uuidv4 } from 'uuid';

const Paquetes = () => {
  const { cardSelected, handleCircles, handleTouchStart, handleTouchEnd } = useSlider();
  const { packs } = useContext(PacksContext);
  const { currencySelected } = useContext(CurrencyContext);

  return (
    <>
      <Section $align="flex-start" $slider>
        <MaxWidth $column $align="">
          <TitleSection $textColor={colors.colorSecundario} $slider>Elige el pack ideal para tu proyecto</TitleSection>
          <SubtitleSection $textColor={colors.colorSecundario} $slider>Selecciona tu moneda local</SubtitleSection>

          <CurrencySelector />

          <WindowSlider>
            <SliderMovil $cardSelected={cardSelected}>
              <TouchSlider onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} />
              {packs.map((pack) => (
                <CardPack 
                  key={uuidv4()}
                  name={pack.name}
                  currency={currencySelected}
                  price={pack.price[currencySelected]}
                  description={pack.description}
                  items={pack.items}
                  // link={}
                />
              ))}
            </SliderMovil>
          </WindowSlider>

          <BoxCircles>
            <Circle onClick={() => { handleCircles(1) }} $selected={cardSelected === 1} />
            <Circle onClick={() => { handleCircles(2) }} $selected={cardSelected === 2} />
            <Circle onClick={() => { handleCircles(3) }} $selected={cardSelected === 3} />
          </BoxCircles>

        </MaxWidth>
        <Wave src={WAVE} alt="Onda decorativa" />
      </Section>
    </>
  );
};

export default Paquetes;