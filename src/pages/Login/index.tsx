import { ChangeEvent, FormEvent, useState } from "react";
import {
  StyledLogin,
  StyledLoginElement,
  StyledLoginForm,
  StyledPasswordElement,
} from "./style";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLoginDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const emailPlaceholder = "Seu email";
  const passwordPlaceholder = "Sua senha";

  const handleSubmit = (event: FormEvent) => {
    console.log(
      "Sending login Data: email: " +
        loginData.email +
        " - password: " +
        loginData.password
    );
    event.preventDefault();
  };

  return (
    <StyledLogin>
      <StyledLoginForm onSubmit={(e) => handleSubmit(e)}>
        <StyledLoginElement className="login-element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            placeholder={emailPlaceholder}
            onChange={(e) => handleLoginDataChange(e)}
          />
        </StyledLoginElement>
        <StyledLoginElement className="login-element">
          <label htmlFor="password">Senha</label>
          <StyledPasswordElement className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginData.password}
              placeholder={passwordPlaceholder}
              id="password"
              onChange={(e) => handleLoginDataChange(e)}
            />
            <input
              type="checkbox"
              name="show-password"
              id="show-password"
              checked={showPassword}
              onClick={togglePassword}
            />
          </StyledPasswordElement>
        </StyledLoginElement>

        <button type="submit" onSubmit={(e) => handleSubmit(e)}>
          Login
        </button>
      </StyledLoginForm>
    </StyledLogin>
  );
};

export default Login;
