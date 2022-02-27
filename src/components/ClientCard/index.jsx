import {
  Card,
  Description,
  Image,
  NameClient,
  DeleteButton,
  EditButton,
  SuspendItems,
} from "./style";
import { FaTrash } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";

const ClientCard = ({ title, description, image }) => {
  return (
    <Card>
      <SuspendItems>
        <Image src={image} alt={title} />
        <NameClient>{title}</NameClient>
      </SuspendItems>
      <Description>{description}</Description>
      <SuspendItems>
        <DeleteButton>
          <FaTrash />
        </DeleteButton>
        <EditButton>
          <GrEdit />
        </EditButton>
      </SuspendItems>
    </Card>
  );
};

export default ClientCard;
