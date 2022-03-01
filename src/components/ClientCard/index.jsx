import { Card, Description, Image, NameClient, SuspendItems,IconCase } from "./style";
import { FaTrash } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";

const ClientCard = ({ title, description, image, deleteFunction, client, editFunction }) => {
  return (
    <Card>
      <SuspendItems>
        <Image src={image} alt={title} />
        <NameClient>{title}</NameClient>
      </SuspendItems>
      <Description>{description}</Description>
      <SuspendItems>
        <IconCase>
          <FaTrash onClick={() => deleteFunction(client)} />
        </IconCase>
        <IconCase>
          <GrEdit onClick={() => editFunction(client)} />
        </IconCase>
      </SuspendItems>
    </Card>
  );
};

export default ClientCard;
