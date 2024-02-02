import { FormEvent } from "react";
import {
  StyledReport,
  StyledReportForm,
  StyledReportReason,
  StyledReportMessageTitle,
  StyledReportMessageBody,
  StyledReportContact,
} from "./style";
import { animated, useSpring } from "@react-spring/web";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

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

  const titlePlaceholder = "Tem um problema com ...";
  const messagePlaceholder = "";
  const namePlaceholder = "Joaquim Pereira Filho Neto Pai";
  const emailPlaceholder = "nome@email.com";
  const whatsappPlaceholder = "(83) 9XXXX-XXXX";

  const pageTransition = useSelector(
    (state: RootState) => state.pageTranisition
  );
  const pageProps = useSpring(pageTransition);

  return (
    <animated.main style={pageProps}>
      <StyledReportForm onSubmit={(e) => sendReport(e)}>
        <h1>Contato</h1>
        <StyledReportReason className="report-element">
          <label htmlFor="reason">Motivo</label>
          <select name="reason" id="reason">
            <Motivos />
          </select>
        </StyledReportReason>
        <StyledReportMessageTitle className="report-element">
          <label htmlFor="rebort-title">Titulo da Mensagem</label>
          <input
            type="text"
            name="report-title"
            id="report-title"
            placeholder={titlePlaceholder}
          />
        </StyledReportMessageTitle>
        <section className="report-element">
          <label htmlFor="report-body">Mensagem</label>
          <textarea
            name="report-body"
            id="report-body"
            placeholder={messagePlaceholder}
          />
        </section>
        <h2 className="info">Dados para contato</h2>
        <div className="report-element">
          <label htmlFor="name">Seu Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={namePlaceholder}
          />
        </div>
        <div className="report-element">
          <label htmlFor="email">Seu Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={emailPlaceholder}
          />
        </div>
        <div className="report-element">
          <label htmlFor="whatsapp">Seu Whatsapp</label>
          <input
            type="tel"
            name="whatsapp"
            id="whatsapp"
            placeholder={whatsappPlaceholder}
          />
        </div>

        <div className="report-element">
          <button type="submit" onClick={(e) => sendReport(e)}>
            Enviar Mensagem
          </button>
        </div>
      </StyledReportForm>
    </animated.main>
  );
};

export default Report;
