import { ChangeEvent, FC, FormEvent, useState } from "react";
import styled from "styled-components";

const StyledRegisterForm = styled.main`
  form {
    padding: 30px 0;
  }
`;

interface RegisterDataInterface {
  name: string;
  whatsapp: string;
  email: string;
  password: string;
}

const Register: FC = () => {
  const [unusedEmail, setUnusedEmail] = useState<boolean>(false);
  const [registered, setRegistered] = useState<boolean>(false);

  const [registerData, setRegisterData] = useState<RegisterDataInterface>(
    {} as RegisterDataInterface
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const emailPlaceholder = "Seu email";
  const passwordPlaceholder = "Sua senha";

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleRegisterDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const testEmail = (event: any) => {
    event.preventDefault();
    setUnusedEmail(true);
  };

  const registerSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (unusedEmail) setRegistered(true);
    else if (!unusedEmail) setRegistered(false);
  };

  let first =
    registerData.name &&
    registerData.name.length > 10 &&
    registerData.whatsapp &&
    registerData.whatsapp.length >= 11;
  return (
    <StyledRegisterForm>
      <form onSubmit={(e) => registerSubmit(e)}>
        <div className="register-element">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleRegisterDataChange(e)}
            disabled={registered}
          />
        </div>
        <div className="register-element">
          <label htmlFor="whatsapp">Whatsapp</label>
          <input
            type="number"
            name="whatsapp"
            id="whatsapp"
            onChange={(e) => handleRegisterDataChange(e)}
            disabled={registered}
          />
        </div>
        {first && (
          <>
            <div className="register-element">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={registerData.email}
                placeholder={emailPlaceholder}
                onChange={(e) => handleRegisterDataChange(e)}
                disabled={registered}
              />
            </div>
            <button onClick={testEmail} disabled={registered}>
              Test Email
            </button>
            <div className="register-element">
              <label htmlFor="password">Senha</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={registerData.password}
                  placeholder={passwordPlaceholder}
                  id="password"
                  onChange={(e) => handleRegisterDataChange(e)}
                  disabled={unusedEmail && !registered ? false : true}
                />
                <input
                  type="checkbox"
                  name="show-password"
                  id="show-password"
                  checked={showPassword}
                  onChange={togglePassword}
                  disabled={unusedEmail && !registered ? false : true}
                />
              </div>
            </div>
          </>
        )}
        <div className="register-element">
          <button
            type="submit"
            onClick={(e) => registerSubmit(e)}
            disabled={unusedEmail && first ? false : true}
          >
            Register
          </button>
        </div>
        {registered && unusedEmail && first && (
          <>
            <h1>Congratulations you are registered</h1>
          </>
        )}
      </form>
    </StyledRegisterForm>
  );
};

export default Register;
