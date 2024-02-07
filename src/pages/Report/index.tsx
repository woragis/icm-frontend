import { FormEvent } from "react";
import { useSpring } from "@react-spring/web";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Form, Field, Label, Button, Input, TextArea, Select, Main, Title, Description } from "../../styles/GlobalStyles";

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

  const pageTransition = useSelector((state: RootState) => state.pageTranisition);
  const pageProps = useSpring(pageTransition);

  return (
    <Main style={pageProps}>
      <Form onSubmit={sendReport}>
        <Title>Contato</Title>
        <Field>
          <Label htmlFor="reason">Motivo</Label>
          <Select name="reason" id="reason">
            <Motivos />
          </Select>
        </Field>
        <Field>
          <Label htmlFor="rebort-title">Título da Mensagem</Label>
          <Input type="text" name="report-title" id="report-title" placeholder={titlePlaceholder} />
        </Field>
        <Field>
          <Label htmlFor="report-body">Mensagem</Label>
          <TextArea name="report-body" id="report-body" placeholder={messagePlaceholder} />
        </Field>
        <Description className="info">Dados para contato</Description>
        <Field>
          <Label htmlFor="name">Seu Nome</Label>
          <Input type="text" name="name" id="name" placeholder={namePlaceholder} />
        </Field>
        <Field>
          <Label htmlFor="email">Seu Email</Label>
          <Input type="email" name="email" id="email" placeholder={emailPlaceholder} />
        </Field>
        <Field>
          <Label htmlFor="whatsapp">Seu Whatsapp</Label>
          <Input type="tel" name="whatsapp" id="whatsapp" placeholder={whatsappPlaceholder} />
        </Field>
        <Field>
          <Button type="submit" onClick={sendReport}>
            Enviar Mensagem
            <span>Enviar Mensagem</span>
          </Button>
        </Field>
      </Form>
    </Main>
  );
};

export default Report;
