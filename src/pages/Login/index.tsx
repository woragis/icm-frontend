import { ChangeEvent, FormEvent, useState } from "react";
import { animated } from "@react-spring/web";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useSpring } from "@react-spring/web";
import { LuAlertTriangle } from "react-icons/lu";
import {
  Form,
  Field,
  Label,
  Main,
  Input,
  Button,
  Description,
  Title,
  Password,
  ShowPassword,
  ShowPasswordSpan,
  FormDialog,
  DefinedInput,
} from "../../styles/GlobalStyles";

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
    if (event.target.name === "email") setEmailTested(false);
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const emailPlaceholder = "nome@email.com";
  const passwordPlaceholder = "senha super secreta";

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "post",
        cache: "default",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        credentials: "include",
      });

      const data = await response.json();
      if (data.message === "logged in") {
        alert("logged in");
      } else if (data.message === "wrong password") {
        alert("wrong pasword");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log("Error submitting login " + err);
    }
    console.log("Sending login Data: email: " + loginData.email + " - password: " + loginData.password);
  };

  const pageTransition = useSelector((state: RootState) => state.pageTranisition);
  const pageProps = useSpring(pageTransition);

  const [emailExists, setEmailExists] = useState<boolean>(false);
  const [emailTested, setEmailTested] = useState<boolean>(false);

  const testEmailExsitance = async (event: any) => {
    event.preventDefault();
    const backendUri = "http://localhost:8080/auth/test-email";
    try {
      const response = await fetch(backendUri, {
        method: "post",
        cache: "default",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginData.email }),
        credentials: "include",
      });
      interface DataInterface {
        message: boolean;
      }
      const data: DataInterface = await response.json();
      if (data.message === true) {
        console.log("Email exists: " + data.message);
        setEmailExists(true);
      } else {
        console.log("Email exists: " + data.message);
        setEmailTested(true);
      }
    } catch (err) {
      console.log("error testing email" + err);
    }
  };
  const modifyEmail = (event: FormEvent) => {
    event.preventDefault();
    setEmailExists(false);
    setEmailTested(false);
  };

  return (
    <Main style={pageProps}>
      <Form onSubmit={handleSubmit}>
        <Title>Logar-se</Title>
        {!emailExists ? (
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" value={loginData.email} placeholder={emailPlaceholder} autoComplete="email" onChange={handleLoginDataChange} />
          </Field>
        ) : (
          <Field>
            <Label htmlFor="email">Email</Label>
            <DefinedInput>{loginData.email}</DefinedInput>
          </Field>
        )}
        <Field>
          {emailTested && (
            <FormDialog id="message">
              <LuAlertTriangle color="yellow" />
              <br />
              Aparentemente seu email nao existe no nosso banco de dados
              <br />
              <span>Registre-se ou tente outro email</span>
            </FormDialog>
          )}
          {!emailExists ? (
            <Button onClick={testEmailExsitance}>
              Próximo
              <span>Próximo</span>
            </Button>
          ) : (
            <Button onClick={modifyEmail}>
              Modificar Email <span>Modificar Email</span>
            </Button>
          )}
        </Field>
        {emailExists && (
          <>
            <Field>
              <Label htmlFor="password">Senha</Label>
              <Password>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginData.password}
                  placeholder={passwordPlaceholder}
                  autoComplete="none"
                  id="password"
                  onChange={handleLoginDataChange}
                />
                <ShowPassword>
                  <Input type="checkbox" name="show-password" checked={showPassword} onChange={togglePassword} />
                  <ShowPasswordSpan />
                </ShowPassword>
              </Password>
            </Field>
            <Field>
              <Button type="submit" onSubmit={handleSubmit}>
                Login
                <span>Login</span>
              </Button>
            </Field>
          </>
        )}
      </Form>
    </Main>
  );
};

export default Login;
