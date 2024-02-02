import styled from "styled-components";

export const StyledReport = styled.main`
  // use main neutral, secondary neutral, and strong neutral
`;

export const StyledReportForm = styled.form``;

export const StyledReportReason = styled.div``;

export const StyledReportMessageTitle = styled.div`
  input {
    border-top: 2px solid ${(props) => props.theme.color.darkPrimary};
    border-left: 2px solid ${(props) => props.theme.color.darkPrimary};
    border-right: 2px solid ${(props) => props.theme.color.lightAccent};
    border-bottom: 2px solid ${(props) => props.theme.color.lightAccent};
  }
`;

export const StyledReportMessageBody = styled.div``;

export const StyledReportContact = styled.div``;
