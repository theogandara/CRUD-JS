import { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clientList, setClients] = useState([
    { title: "McDonalds", description: "lorem ipsum lorem ipsunm", id: 1010 },
    { title: "Nike", description: "lorem ipsum lorem ipsunm", id: 1020 },
    { title: "Adidas", description: "lorem ipsum lorem ipsunm", id: 1030 },
    { title: "Ferrari", description: "lorem ipsum lorem ipsunm", id: 1040 },
    { title: "Armani", description: "lorem ipsum lorem ipsunm", id: 1050 },
    { title: "Gucci", description: "lorem ipsum lorem ipsunm", id: 1060 },
  ]);

  const addClient = (newClient) => {
    setClients([...clientList, newClient]);
  };

  const history = useHistory({});

  const [client, setClient] = useState({});

  const editClient = (editClient) => {
    setClient(editClient);
    history.push("/client");
  };

  const removeClient = (removeClient) => {
    setClients(
      clientList.filter((client) => {
        return removeClient.id !== client.id;
      })
    );
  };

  return (
    <ClientContext.Provider
      value={{ clientList, addClient, removeClient, editClient, client }}
    >
      {children}
    </ClientContext.Provider>
  );
};
