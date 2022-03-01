import {
  SuportBar,
  Button,
  Title,
  Divider,
  SubTitle,
  Display,
  CostumersDisplay,
} from "./style";
import ClientCard from "../../components/ClientCard";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { useContext } from "react";
import { ClientContext } from "../../Providers/Client";

const Dashboard = () => {
  const { clientList, removeClient } = useContext(ClientContext);

  const history = useHistory();

  return (
    <div>
      <Header>EvolutionSoft</Header>
      <SuportBar>
        <Title>Dashboard</Title>
        <Button onClick={() => history.push("/register")}>new client</Button>
      </SuportBar>
      <Divider />
        <SubTitle>customers</SubTitle>
      <Display>
        <CostumersDisplay>
          {clientList.map((client) => (
            <ClientCard
              description={client.description}
              deleteFunction={removeClient}
              client={client}
              title={client.title}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hiRPzio5oqb6NVVUomgl7DxI0_JFrtybU2OMOFzNY_jGyZoGQ9iopOiqNeobqnzWML8&usqp=CAU"
              }
            />
          ))}
          {clientList.length <= 0 && <h3>:( no customers yet</h3>}
        </CostumersDisplay>
      </Display>
    </div>
  );
};

export default Dashboard;
