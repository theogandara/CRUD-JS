import { BackgroundInput, Label, Error, InputStyle } from "./styled";

const Input = ({ placeholder, error, name, register }) => {
  return (
    <BackgroundInput>
      <Label>{name}</Label>
      <InputStyle placeholder={placeholder} {...register(name)} />
      <Error>{error}</Error>
    </BackgroundInput>
  );
};
export default Input;
