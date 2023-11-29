import { createContext } from "react";

const packs = [
  {
    name: "Pack Premium",
    price: { ARS: "59.000", USD: "99", EUR: "89" },
    description: "Ideal para presentar tu marca personal. Con una Landing Page o una web de 3 Páginas, puedes presentar de manera efectiva quién eres, qué haces y por qué deberían elegirte.",
    items: [
      "· 1 Landing Page o 3 Paginas",
      "· Formulario de contacto",
      "· 3 Dias de Correciones Max",
      "· Entrega de 5 a 10 Dias Hábiles",
      "· Adaptable a todos los dispositivos",
      "· Dominio gratuito el primer año",
      "· Hosting gratuito el primer año"
    ]
  },
  {
    name: "Pack Business",
    price: { ARS: "119.000", USD: "139", EUR: "126" },
    description: "Ideal si tienes una variedad de productos o servicios que deseas destacar. Con este pack, podras crear una web más extensa para presentar tus productos de forma detallada.",
    items: [
      "· De 4 a 6 Paginas",
      "· Formulario de contacto",
      "· 7 Dias de Correciones Max",
      "· Entrega de 7 a 15 Dias Hábiles",
      "· Adaptable a todos los dispositivos",
      "· Dominio gratuito el primer año",
      "· Hosting gratuito el primer año"
    ]
  },
  {
    name: "Mantenimiento",
    price: { ARS: "30.000", USD: "30", EUR: "27" },
    description: "Mantener tu sitio web actualizado y funcional es escencial para el éxito en línea. Nuestro Pack de Mantenimiento Web garantiza la continuidad operativa y siempre al dia.",
    items: [
      "· Copia de seguridad del sitio web",
      "· Mantenimiento del sitio web",
      "· Actualizacion de textos",
      "· Actualizacion de imagenes",
      "· Actualizacion de servicios",
      "· Actualizacion de productos",
      "· Adición de nuevas secciones"
    ]
  }
]

const PacksContext = createContext();

const PacksProvider = ({ children }) => {
  return (
    <PacksContext.Provider value={{ packs }}>
      {children}
    </PacksContext.Provider>
  )
}

export { PacksContext, PacksProvider };