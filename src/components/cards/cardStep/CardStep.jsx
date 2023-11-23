import { BoxCardStep, BoxStep, BoxTexts, Description, Image, Number, Title } from "./CardStepStyles";

const CardStep = ({ position, number, image, alt, title, description, bgColor  }) => {
  return (
    <BoxCardStep>
      <BoxStep $position={position}>
        <Number $position={position} $bgColor={bgColor}>{number}</Number>
        <Image $position={position} src={image} alt={alt} />
      </BoxStep>

      <BoxTexts $position={position}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </BoxTexts>
    </BoxCardStep>
  );
};

export default CardStep;