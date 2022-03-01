import { BackgroundInput, Label, Error, InputStyle } from "./styled";

const Input = ({ placeholder, error, name, register, value }) => {
  return (
    <BackgroundInput>
      <Label>{name}</Label>
      <InputStyle
        {...(value && name ? (value = { value }) : {})}
        placeholder={placeholder}
        {...register(name)}
      />
      <Error>{error}</Error>
    </BackgroundInput>
  );
};
export default Input;
