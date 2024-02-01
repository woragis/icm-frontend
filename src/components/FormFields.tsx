import { ChangeEvent, FunctionComponentElement, useState } from "react";
import styled from "styled-components";

const StyledEmailField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;

  input {
    outline: none;
    width: 100%;
  }
`;

const StyledPasswordField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;

  input {
    outline: none;
    width: 100%;
  }
`;

export interface InputFieldProps {
  fieldName: string;
  value: string;
  placeholder?: string;
  showPassword?: boolean;
}

export const EmailField = ({
  fieldName,
  value,
  placeholder,
}: InputFieldProps) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    localStorage.setItem("loginEmail", email);
  };

  return (
    <StyledEmailField>
      <label htmlFor={fieldName}>{fieldName.toUpperCase()}</label>
      <input
        type="email"
        name={fieldName}
        id={fieldName}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleEmailChange(e)}
      />
    </StyledEmailField>
  );
};

export const PasswordField = ({
  fieldName,
  value,
  placeholder,
}: InputFieldProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    localStorage.setItem("passwordLogin", password);
  };

  return (
    <StyledPasswordField>
      <label htmlFor={fieldName}>{fieldName.toUpperCase()}</label>
      <input
        type={showPassword ? "text" : "password"}
        name={fieldName}
        id={fieldName}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handlePasswordChange(e)}
      />
      <label htmlFor="show-password">Show Password</label>
      <input
        type="checkbox"
        name="show-password"
        id="show-password"
        checked={showPassword}
        onClick={togglePassword}
      />
    </StyledPasswordField>
  );
};

export const NameField = ({
  fieldName,
  value,
  placeholder,
}: InputFieldProps) => {
  return (
    <>
      <label htmlFor={fieldName}>{fieldName.toUpperCase()}</label>
      <input
        type="text"
        name={fieldName}
        id={fieldName}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

interface InputElement {
  elementName: string;
  children: FunctionComponentElement<any>;
}

export const InputElementComponent = ({
  elementName,
  children,
}: InputElement) => {
  return (
    <>
      <label htmlFor={elementName}>{children}</label>
    </>
  );
};
