import { ChangeEvent, FormEvent, useState } from "react";
import {
  StyledLogin,
  StyledLoginElement,
  StyledLoginForm,
  StyledPasswordElement,
} from "./style";
import { animated } from "@react-spring/web";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useSpring } from "@react-spring/web";

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

  const emailPlaceholder = "nome@email.com";
  const passwordPlaceholder = "senha super secreta";

  const handleSubmit = (event: FormEvent) => {
    console.log(
      "Sending login Data: email: " +
        loginData.email +
        " - password: " +
        loginData.password
    );
    event.preventDefault();
  };

  const pageTransition = useSelector(
    (state: RootState) => state.pageTranisition
  );
  const pageProps = useSpring(pageTransition);

  return (
    <animated.main style={pageProps}>
      <StyledLoginForm onSubmit={(e) => handleSubmit(e)}>
        <h1>Logar-se</h1>
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
        <div className="login-element">
          <button type="submit" onSubmit={(e) => handleSubmit(e)}>
            Login
          </button>
        </div>
      </StyledLoginForm>
    </animated.main>
  );
};

export default Login;
