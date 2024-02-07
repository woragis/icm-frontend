import styled from "styled-components";

export const Locations = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const Location = styled.div`
  border: 1px solid blue;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  label,
  select {
    color: ${(props) => props.theme.color.form.label};
    width: 80%;
    text-align: center;
  }
`;

export const StyledOption = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

export const StyledContribType = styled.div`
  margin: 10px 5px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
