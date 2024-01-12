import styled from "styled-components";

export const StyledForm = styled.main`
  height: auto;
  width: 600px;
  box-shadow: 0 0 5px 1px black;
  border-radius: 15px;
  margin: auto;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    width: 100%;

    * {
      font-family: "Oswald", sans-serif;
    }
  }
`;
export const StyledField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  input,
  textarea,
  select {
    outline: none;
  }
  label {
    display: block;
    text-align: center;
    font-size: 1.2em;
  }
  input {
    width: 100%;
  }
  select {
    width: 100%;
    text-align: center;
  }
  textarea {
    outline: none;
    font-family: "Oswald", sans-serif;
    font-weight: 400;
  }
  button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
  }
`;

export const StyledLocation = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid red;
  & > div {
    margin: 0 auto;
  }
  label {
    font-size: 1.1em;
    text-align: center;
  }
  select {
    width: 100px;
    font-size: 0.9em;
    font-weight: 400;
  }
`;

export const OptionState = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

export const OptionCity = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

export const OptionPolo = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

export const OptionIgreja = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`;
