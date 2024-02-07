import styled from "styled-components";

export const StyledForm = styled.form`
  .contrib-option {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5m;
    width: 110%;
    label {
      width: 100%;
    }
  }
  .select {
  }
  .text-contrib > textarea {
    border: 2px solid ${(props) => props.theme.color.darkPrimary};
    box-shadow: 0 0 ${(props) => props.theme.shadow.size.small}${(props) => props.theme.color.lightPrimary};
  }
  .video-contrib {
    border: 2px solid ${(props) => props.theme.color.darkPrimary};
    box-shadow: ${(props) => props.theme.shadow.color.neon} 0 0
      ${(props) => props.theme.shadow.size.small}${(props) => props.theme.color.lightPrimary};
    padding: 15px;
    border-radius: 10px;
    height: auto;
    position: relative;
    &::before {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;

      box-shadow: 0 0 ${(props) => props.theme.shadow.size.small}${(props) => props.theme.color.lightPrimary};
    }

    label {
    }
    input {
      font-size: 1.1em;
      height: auto;
      color: ${(props) => props.theme.color.normalNeutral};
      background-color: transparent;
    }
  }
`;

export const StyledField = styled.div`
  /* display: flex;
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
  } */
`;

export const StyledLocation = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  label {
    font-size: 1.1em;
    text-align: center;
  }
  select {
    width: 150px;
    font-size: 1em;
    font-weight: 400;
    padding: 1px 5px;
    background-color: ${(props) => props.theme.color.background};
    margin: 0 5px;
    border: 2px solid ${(props) => props.theme.color.darkPrimary};
    border-radius: 5px;
    text-align: center;
    option {
      text-align: center;
    }
  }
`;

export const StyledOption = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

export const StyledType = styled.div`
  label {
    display: inline;
  }
`;

export const StyledContribType = styled.div`
  margin: 10px 5px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
