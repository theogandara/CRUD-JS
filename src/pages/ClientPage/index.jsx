import Header from "../../components/Header";
import Input from "../../components/Input";
import { Title, Divider, SuportBar, Button, Form, Image } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory, Redirect } from "react-router-dom";

import { useContext, useState } from "react";
import { ClientContext } from "../../Providers/Client";

const ClientPage = () => {
  const { client, updateClient } = useContext(ClientContext);

  const history = useHistory();

  const [title, setTitle] = useState(client?.title);
  const [description, setDescription] = useState(client?.description);
  const [category, setCategory] = useState(client?.category);
  

  const formSchema = yup.object().shape({
    title: yup.string().min(1,"*this field cannot be empty"),
    description: yup.string().min(1,"*this field cannot be empty"),
    category: yup.string().min(1,"*this field cannot be empty"),
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  
  const onSubmit = (data) => {
    data.description = description;
    data.title = title;
    data.category = category;
    data.id = client.id;
    updateClient(data);
    history.push("/");
  };
  
  if(!client.title){
    return <Redirect to="/"/>
  }

  return (
    <div>
      <Header>EvolutionSoft</Header>
      <SuportBar>
        <Title>edit client</Title>
        <Button onClick={() => history.push("/")}>dashboard</Button>
      </SuportBar>
      <Divider />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Image src={client?.image} alt={client?.title} />
        <Input
          register={register}
          placeholder="insert client name"
          name="title"
          error={errors.title?.message}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Input
          register={register}
          placeholder="insert description"
          name="description"
          error={errors.description?.message}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Input
          register={register}
          placeholder="insert category"
          name="category"
          error={errors.category?.message}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <Button>update</Button>
      </Form>
    </div>
  );
};

export default ClientPage;
