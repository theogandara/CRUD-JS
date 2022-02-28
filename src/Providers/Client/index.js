import { useState, createContext } from "react";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clientList, setClients] = useState([
    { title: "McDonalds", description: "lorem ipsum lorem ipsunm" },
    { title: "Nike", description: "lorem ipsum lorem ipsunm" },
    { title: "Adidas", description: "lorem ipsum lorem ipsunm" },
    { title: "Ferrari", description: "lorem ipsum lorem ipsunm" },
    { title: "Armani", description: "lorem ipsum lorem ipsunm" },
    { title: "Gucci", description: "lorem ipsum lorem ipsunm" },
  ]);

  return (
    <ClientContext.Provider value={{ clientList }}>
      {children}
    </ClientContext.Provider>
  );
};
