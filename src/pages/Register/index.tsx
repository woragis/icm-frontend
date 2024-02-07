import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SlBan, SlCheck } from "react-icons/sl";
import { AlertDialog, Button, CheckEmail, Field, Form, Input, Label, Main, Password, ShowPassword, ShowPasswordSpan, Title } from "../../styles/GlobalStyles";

interface RegisterDataInterface {
  name: string;
  whatsapp: string;
  email: string;
  password: string;
}

const Register: FC = () => {
  const [unusedEmail, setUnusedEmail] = useState<boolean>(false);
  const [registered, setRegistered] = useState<boolean>(false);

  const [registerData, setRegisterData] = useState<RegisterDataInterface>({} as RegisterDataInterface);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const [checkEmailSeconds, setCheckEmailSeconds] = useState<number>(1);
  const handleRegisterDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "email") setCheckEmailSeconds(2);
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const testEmail = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/test-email", {
        method: "post",
        cache: "default",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: registerData.email }),
        credentials: "include",
      });

      const data = await response.json();

      if (data.message === false) {
        setUnusedEmail(true);
      } else {
        setUnusedEmail(false);
      }
    } catch (err) {
      console.log("Error testing email " + err);
    } finally {
      setCheckingEmail(false);
    }
  };

  const registerSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (unusedEmail) {
      try {
        const response = await fetch("http://localhost:8080/auth/register", {
          method: "post",
          cache: "default",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
          credentials: "include",
        });
        const data = await response.json();

        if (response.status === 201) {
          alert("registered");
          setRegistered(true);
        } else {
          alert("Error registering, status code: " + response.status);
        }
      } catch (err) {
        console.log("Error submiting register form" + err);
      }
    } else if (!unusedEmail) setRegistered(false);
  };

  let validUser = registerData.name && registerData.name.length >= 8 && registerData.whatsapp && registerData.whatsapp.length >= 11;

  let validPassword = registerData.password && registerData.password.length >= 8;

  const namePlaceholder = "Joao da Silva da Silva";
  const whatsappPlaceholder = "(XX) 9XXXX-XXXX";
  const emailPlaceholder = "nome@email.com";
  const passwordPlaceholder = "senha super secreta";

  const pageTransition = useSelector((state: RootState) => state.pageTranisition);
  const pageProps = useSpring(pageTransition);
  const [checkingEmail, setCheckingEmail] = useState<boolean>(false);
  useEffect(() => {
    const sleep = (ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    if (registerData.email && registerData.email.length >= 1 && checkEmailSeconds !== 0) {
      sleep(checkEmailSeconds * 1000).then(() => {
        console.log("checking email");
        setCheckingEmail(true);
        testEmail();
        console.log("checked email");
        setCheckEmailSeconds(0);
      });
    } else {
      setCheckEmailSeconds(0);
    }
  }, [checkEmailSeconds]);
  return (
    <Main style={pageProps}>
      <Form onSubmit={registerSubmit}>
        <Title>Registrar-se</Title>
        <Field>
          <Label htmlFor="name">Nome</Label>
          <Input type="text" name="name" id="name" placeholder={namePlaceholder} onChange={handleRegisterDataChange} disabled={registered} />
        </Field>
        <CheckEmail>{!checkingEmail && registerData.name && registerData.name.length >= 8 ? <SlCheck id="check" /> : <SlBan id="ban" />}</CheckEmail>
        <Field>
          <Label htmlFor="whatsapp">Whatsapp</Label>
          <Input type="number" name="whatsapp" id="whatsapp" placeholder={whatsappPlaceholder} onChange={handleRegisterDataChange} disabled={registered} />
        </Field>
        <CheckEmail>{registerData.whatsapp && registerData.whatsapp.length >= 11 ? <SlCheck id="check" /> : <SlBan id="ban" />}</CheckEmail>
        {validUser && (
          <>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                value={registerData.email}
                placeholder={emailPlaceholder}
                autoComplete="email"
                onChange={handleRegisterDataChange}
                disabled={registered}
              />
            </Field>
            <CheckEmail>{unusedEmail ? <SlCheck id="check" /> : <SlBan id="ban" />}</CheckEmail>
            <Field>
              <Label htmlFor="password">Senha</Label>
              <Password>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={registerData.password}
                  placeholder={passwordPlaceholder}
                  autoComplete="none"
                  id="password"
                  onChange={handleRegisterDataChange}
                  disabled={unusedEmail && !registered ? false : true}
                />
                <ShowPassword>
                  <Input
                    type="checkbox"
                    name="show-password"
                    id="show-password"
                    checked={showPassword}
                    onChange={togglePassword}
                    disabled={unusedEmail && !registered ? false : true}
                  />
                  <ShowPasswordSpan />
                </ShowPassword>
              </Password>
            </Field>
            <CheckEmail>{registerData.password && registerData.password.length >= 8 ? <SlCheck id="check" /> : <SlBan id="ban" />}</CheckEmail>
          </>
        )}
        <Field>
          <Button type="submit" onClick={registerSubmit} disabled={unusedEmail && validPassword && validUser ? false : true}>
            Register
          </Button>
        </Field>
        {registered && unusedEmail && validUser && <AlertDialog>Congrats Bitch</AlertDialog>}
      </Form>
    </Main>
  );
};

export default Register;
