import Header from "../../components/Header";
import Input from "../../components/Input";
import { Title, Divider, SuportBar, Button, Form } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { ClientContext } from "../../Providers/Client";

const Register = () => {

  const { addClient } = useContext(ClientContext);

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
    data.id = Math.floor(Math.random() * 100)
    addClient(data)
    history.push("/");
  };

  return (
    <div>
      <Header>EvolutionSoft</Header>
      <SuportBar>
        <Title>Register</Title>
        <Button onClick={() => history.push("/")}>dashboard</Button>
      </SuportBar>
      <Divider />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          placeholder="insert client name"
          name="title"
          error={errors.title?.message}
        />
        <Input
          register={register}
          placeholder="insert description"
          name="description"
          error={errors.description?.message}
        />
        <Input
          register={register}
          placeholder="insert category"
          name="category"
          error={errors.category?.message}
        />
        <Button>submit</Button>
      </Form>
      <Divider />
    </div>
  );
};

export default Register;
