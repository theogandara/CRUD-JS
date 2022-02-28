import { SuportBar, Button, Title, Divider, SubTitle, Display } from "./style";
import ClientCard from "../../components/ClientCard";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { useContext } from "react";
import { ClientContext } from "../../Providers/Client";

const Dashboard = () => {
  const { clientList } = useContext(ClientContext);

  const history = useHistory();

  return (
    <div>
      <Header>EvolutionSoft</Header>
      <SuportBar>
        <Title>Dashboard</Title>
        <Button onClick={() => history.push("/register")}>new client</Button>
      </SuportBar>
      <Divider />
      <Display>
        <SubTitle>customers</SubTitle>
        {clientList.map((client) => (
          <ClientCard
            description={client.description}
            title={client.title}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hiRPzio5oqb6NVVUomgl7DxI0_JFrtybU2OMOFzNY_jGyZoGQ9iopOiqNeobqnzWML8&usqp=CAU"
            }
          />
        ))}
      </Display>
    </div>
  );
};

export default Dashboard;
