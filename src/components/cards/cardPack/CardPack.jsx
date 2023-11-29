import { Benefits, Button, CardBox, Currency, Description, Item, List, NamePackage, Price, PriceBox, Sign } from "./CardPackStyles";
import { v4 as uuidv4 } from 'uuid';

const CardPack = ({ price, currency, name, description, items, link }) => {
  return (
    <CardBox>
      <PriceBox>
        <Sign>$</Sign>
        <Price>{price}</Price>
        <Currency>{currency}</Currency>
      </PriceBox>

      <NamePackage>{name}</NamePackage>
      <Description>{description}</Description>

      <Benefits>¿Que incluye?</Benefits>
      <List>
        {items.map((item) => (
          <Item key={uuidv4()}>{item}</Item>
        ))}
      </List>

      <Button to={link}>Lo Quiero</Button>
    </CardBox>
  );
};

export default CardPack;