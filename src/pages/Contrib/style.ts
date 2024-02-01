import styled from "styled-components";

export const StyledForm = styled.main``;

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
    font-weight: 400;
  }
  button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
  }

  input::file-selector-button {
    font-weight: bold;
    font-size: 1.1em;
    height: 30px;
    width: 100px;
    border: none;
    border-radius: 10px;
  }
  button[type="submit"] {
    border: none;
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

export const StyledType = styled.div`
  label {
    display: inline;
  }
`;

export const StyledOption = styled.div`
  margin: 10px 5px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
