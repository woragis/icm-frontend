import styled from "styled-components";

export const StyledReport = styled.main`
  // use main neutral, secondary neutral, and strong neutral
`;

export const StyledReportForm = styled.form``;

export const StyledReportReason = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;

  label {
    font-size: 1.4em;
    font-weight: 700;
  }

  select {
    background-color: ${(props) => props.theme.color.darkAccent};
    border-radius: 5px;
    outline: none;
    border: 2px solid ${(props) => props.theme.color.lightPrimary};
  }
`;

export const StyledReportMessageTitle = styled.div`
  label {
    font-size: 1.4em;
    font-weight: 700;
  }

  input {
    background-color: ${(props) => props.theme.color.darkAccent};
    border-radius: 5px;
    outline: none;
    border-top: 2px solid ${(props) => props.theme.color.darkPrimary};
    border-left: 2px solid ${(props) => props.theme.color.darkPrimary};
    border-right: 2px solid ${(props) => props.theme.color.lightAccent};
    border-bottom: 2px solid ${(props) => props.theme.color.lightAccent};
  }
`;

export const StyledReportMessageBody = styled.div``;

export const StyledReportContact = styled.div`
  width: 80%;

  p {
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
  }

  label {
    margin: 0 auto;
    display: block;
    text-align: center;
    font-size: 1.1em;
  }

  input {
    border-radius: 5px;
    outline: none;
    border-top: 2px solid ${(props) => props.theme.color.darkPrimary};
    border-left: 2px solid ${(props) => props.theme.color.darkPrimary};
    border-right: 2px solid ${(props) => props.theme.color.lightAccent};
    border-bottom: 2px solid ${(props) => props.theme.color.lightAccent};

    height: 30px;
    width: 100%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2em;
  }
`;
