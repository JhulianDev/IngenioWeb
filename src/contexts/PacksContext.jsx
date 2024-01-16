import { createContext } from "react";

const packs = [
  {
    name: "Pack Premium",
    price: { ARS: "250.000", USD: "250", EUR: "230" },
    description: "Con una Landing Page, podras promocionar tu producto o servicio estrella, destacando sus beneficios, ventajas y captando el contacto de tus posibles clientes.",
    items: [
      "· 1 Landing Page",
      "· Redacción de textos",
      "· Selección de imagenes",
      "· Entrega de 7 a 15 Días",
      "· Adaptable a todos los dispositivos",
      "· Dominio gratuito el primer año",
      "· Hosting gratuito el primer año",
      "· Optimizada para Google"
    ]
  },
  {
    name: "Pack Business",
    price: { ARS: "350.000", USD: "350  ", EUR: "320" },
    description: "Ideal para mostrar tú negocio de forma integral a través de secciones personalizadas, destacando cada aspecto y servicio de una forma mas detallada.",
    items: [
      "· 1 Página Web de 5 Pestañas",
      "· Redacción de textos",
      "· Selección de imagenes",
      "· Entrega de 15 a 20 Dias",
      "· Adaptable a todos los dispositivos",
      "· Dominio gratuito el primer año",
      "· Hosting gratuito el primer año",
      "· Optimizada para Google"
    ]
  },
  {
    name: "Mantenimiento",
    price: { ARS: "50.000", USD: "50", EUR: "45" },
    description: "Mantener tu sitio web actualizado y funcional es escencial para el éxito en línea. Nuestro Pack de Mantenimiento Web garantiza la continuidad operativa de tu sitio web.",
    items: [
      "· Actualización de productos",
      "· Actualización de servicios",
      "· Actualización de imageness",
      "· Actualización de textos",
      "· Actualizaciones de seguirdad",
      "· Optimización de velocidad",
      "· Copia de seguridad del sitio web"
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