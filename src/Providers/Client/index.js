import { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { api } from "../../services/api";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clientList, setClients] = useState([]);

  const loadClients = () => {
    api
      .get("/clients")
      .then((response) => {
        setClients([...response.data]);
      })
      .catch((err) => console.log(err));
  };

  const addClient = (newClient) => {
    newClient.image =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hiRPzio5oqb6NVVUomgl7DxI0_JFrtybU2OMOFzNY_jGyZoGQ9iopOiqNeobqnzWML8&usqp=CAU";

    api
      .post("clients", newClient)
      .then((response) => {
        loadClients();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const history = useHistory();

  const [client, setClient] = useState({});

  const editClient = (editClient) => {
    setClient(editClient)
    history.push("/client");
  };

  const updateClient = (editClient) => {
    editClient.image =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hiRPzio5oqb6NVVUomgl7DxI0_JFrtybU2OMOFzNY_jGyZoGQ9iopOiqNeobqnzWML8&usqp=CAU";
    api
      .put(`/clients/${editClient.id}`, editClient)
      .then(() => {
        loadClients();
      })
      .catch((_) => console.log("erro"));
  };

  const removeClient = (removeClient) => {
    api
      .delete(`/clients/${removeClient.id}`)
      .then(() => {
        loadClients();
      })
      .catch((_) => console.log("erro"));
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <ClientContext.Provider
      value={{ clientList, addClient, removeClient, editClient, client, updateClient }}
    >
      {children}
    </ClientContext.Provider>
  );
};
