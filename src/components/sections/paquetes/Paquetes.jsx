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
        <MaxWidth $column>
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
                  link={`https://api.whatsapp.com/send?phone=541124071361&text=Hola%20Ingenio!%20%F0%9F%91%8B%F0%9F%8F%BB%20Vengo%20de%20su%20pagina%20web%20%F0%9F%92%BB%20Estoy%20interesad@%20en%20el%20${encodeURIComponent(pack.name)}%20por%20${encodeURIComponent(pack.price[currencySelected])}%20${encodeURIComponent(currencySelected)}%20y%20quisiera%20obtener%20mas%20informaci%C3%B3n%20%F0%9F%AB%A3`}
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