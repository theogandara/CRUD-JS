import Header from "../../components/Header";
import Input from "../../components/Input";
import { Title, Divider, SuportBar, Button, Form, Image } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { ClientContext } from "../../Providers/Client";

const ClientPage = () => {
  const { client } = useContext(ClientContext);
  const history = useHistory();

  const formSchema = yup.object().shape({
    title: yup.string().required("*enter company name"),
    description: yup.string().required("*enter a description"),
    category: yup.string().required("*enter company category"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    history.push("/");
  };

  return (
    <div>
      <Header>EvolutionSoft</Header>
      <SuportBar>
        <Title>clientPage</Title>
        <Button onClick={() => history.push("/")}>dashboard</Button>
      </SuportBar>
      <Divider />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>edit client</h3>
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hiRPzio5oqb6NVVUomgl7DxI0_JFrtybU2OMOFzNY_jGyZoGQ9iopOiqNeobqnzWML8&usqp=CAU"
          }
          alt={client?.title}
        />
        <Input
          register={register}
          placeholder="insert client name"
          name="title"
          error={errors.title?.message}
          value={client?.title}
        />
        <Input
          register={register}
          placeholder="insert description"
          name="description"
          error={errors.description?.message}
          value={client?.description}
        />
        <Input
          register={register}
          placeholder="insert category"
          name="category"
          error={errors.category?.message}
          value={client?.category}
        />
        <Button>update</Button>
      </Form>
    </div>
  );
};

export default ClientPage;
