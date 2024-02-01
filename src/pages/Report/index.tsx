import { FormEvent } from "react";
import {
  StyledReport,
  StyledReportForm,
  StyledReportReason,
  StyledReportMessageTitle,
  StyledReportMessageBody,
  StyledReportContact,
} from "./style";

enum EnumMotivos {
  AddCidade = "Adicionar Cidade",
  AddPolo = "Adicionar Polo",
  AddIgreja = "Adicionar Igreja",
  ErrorReport = "Reportar Erro",
  BugReport = "Reportar Bug",
  Other = "Outro",
}

interface IReport {
  reportData: {
    motivo: EnumMotivos;
    reportTitle: string;
    reportBody: string;
    name: string;
    email: string;
    cellphoneNumber: string;
    whatsapp: string;
  };
}

// eslint-disable-next-line
const initialState: IReport = {
  reportData: {
    motivo: EnumMotivos.AddCidade,
    reportTitle: "",
    reportBody: "",
    name: "",
    email: "",
    cellphoneNumber: "",
    whatsapp: "",
  },
};

const Report = () => {
  const Motivos = () => {
    return (
      <>
        <option value={"AddCidade"}>{EnumMotivos.AddCidade}</option>
        <option value={"AddPolo"}>{EnumMotivos.AddPolo}</option>
        <option value={"AddIgreja"}>{EnumMotivos.AddIgreja}</option>
        <option value={"ErrorReport"}>{EnumMotivos.ErrorReport}</option>
        <option value={"BugReport"}>{EnumMotivos.BugReport}</option>
        <option value={"Other"}>{EnumMotivos.Other}</option>
      </>
    );
  };
  const sendReport = (event: FormEvent) => {
    event.preventDefault();
    console.log("Data: ");
  };
  return (
    <StyledReport>
      <StyledReportForm onSubmit={(e) => sendReport(e)}>
        <p>Contato</p>
        <StyledReportReason>
          <label htmlFor="reason">Motivo</label>
          <select name="reason" id="reason">
            <Motivos />
          </select>
        </StyledReportReason>
        <StyledReportMessageTitle>
          <label htmlFor="rebort-title">Titulo da Mensagem</label>
          <input type="text" name="report-title" id="report-title" />
        </StyledReportMessageTitle>
        <StyledReportMessageBody>
          <label htmlFor="report-body">Mensagem</label>
          <textarea name="report-body" id="report-body" />
        </StyledReportMessageBody>
        <hr />
        <StyledReportContact>
          <p className="info">Dados para contato</p>
          <div>
            <label htmlFor="name">Seu Nome</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Seu Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="whatsapp">Seu Whatsapp</label>
            <input type="tel" name="whatsapp" id="whatsapp" />
          </div>
        </StyledReportContact>

        <input
          type="submit"
          value="Enviar Mensagem"
          onClick={(e) => sendReport(e)}
        />
      </StyledReportForm>
    </StyledReport>
  );
};

export default Report;
