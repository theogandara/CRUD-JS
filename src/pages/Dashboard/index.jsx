import { SuportBar, Button, Title, Divider, SubTitle, Display } from "./style";
import ClientCard from "../../components/ClientCard";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";

const Dashboard = () => {

  const history = useHistory()

  return (
    <div>
      <Header>EvolutionSoft</Header>
      <SuportBar>
        <Title>Dashboard</Title>
        <Button onClick={()=> history.push("/register")} >new client</Button>
      </SuportBar>
      <Divider />
      <Display>
      <SubTitle>customers</SubTitle>
      <ClientCard
        description={"lorem ipsum lorem ipsunm"}
        title={"Meta"}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hiRPzio5oqb6NVVUomgl7DxI0_JFrtybU2OMOFzNY_jGyZoGQ9iopOiqNeobqnzWML8&usqp=CAU"
        }
      />
      <ClientCard
        description={"lorem ipsum lorem ipsunm"}
        title={"Meta"}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hiRPzio5oqb6NVVUomgl7DxI0_JFrtybU2OMOFzNY_jGyZoGQ9iopOiqNeobqnzWML8&usqp=CAU"
        }
      />
      <ClientCard
        description={"lorem ipsum lorem ipsunm"}
        title={"Meta"}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hiRPzio5oqb6NVVUomgl7DxI0_JFrtybU2OMOFzNY_jGyZoGQ9iopOiqNeobqnzWML8&usqp=CAU"
        }
      />
      </Display>
    </div>
  );
};

export default Dashboard;
