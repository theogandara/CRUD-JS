import { BackgroundInput, Label, Error, InputStyle } from "./styled";

const Input = ({ placeholder, error, name, register, value, onChange }) => {
  return (
    <BackgroundInput>
      <Label>{name}</Label>
      <InputStyle
        {...(value && name ? (value = { value }) : {})}
        placeholder={placeholder}
        {...register(name)}
        onChange={onChange}
      />
      <Error>{error}</Error>
    </BackgroundInput>
  );
};
export default Input;
