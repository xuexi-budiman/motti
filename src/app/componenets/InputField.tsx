import { ChangeEventHandler } from "react";

interface IInputField {
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  placeHolder: string;
}

export const InputField = ({
  type,
  value,
  onChange,
  placeHolder,
}: IInputField) => {
  return (
    <input type={type} value={value} onChange={onChange}>
      InputField
    </input>
  );
};
