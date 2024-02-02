import { ChangeEvent, useState, useTransition } from "react";
import {
  StyledForm,
  StyledField,
  StyledLocation,
  OptionState,
  OptionCity,
  OptionPolo,
  OptionIgreja,
  StyledType,
  StyledOption,
} from "./style";
import { animated, useSpring } from "@react-spring/web";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Contrib = () => {
  interface IStates {
    value: States;
    name: string;
  }

  interface ICity {
    value: string;
    name: string;
  }

  interface IPolo {
    value: string;
    name: string;
  }
  interface IIgreja {
    value: string;
    name: string;
  }
  const states: IStates[] = [
    { value: "Alagoas", name: "Alagoas" },
    { value: "Bahia", name: "Bahia" },
    { value: "Ceara", name: "Ceara" },
    { value: "Maranhao", name: "Maranhao" },
    { value: "Paraiba", name: "Paraiba" },
    { value: "Pernambuco", name: "Pernambuco" },
    { value: "Piaui", name: "Piaui" },
    { value: "RioGrandeDoNorte", name: "Rio Grande do Norte" },
    { value: "Sergipe", name: "Sergipe" },
  ];

  const cidadesAlagoas: ICity[] = [
    { name: "Maceió", value: "Maceió" },
    { name: "Arapiraca", value: "Arapiraca" },
    { name: "Rio Largo", value: "RioLargo" },
    { name: "Palmeira dos Índios", value: "PalmeiraDosÍndios" },
    { name: "Marechal Deodoro", value: "MarechalDeodoro" },
    { name: "União dos Palmares", value: "UniãoDosPalmares" },
    { name: "Penedo", value: "Penedo" },
    { name: "São Miguel dos Campos", value: "SãoMiguelDosCampos" },
    { name: "Delmiro Gouveia", value: "DelmiroGouveia" },
    { name: "Coruripe", value: "Coruripe" },
    { name: "Santana do Ipanema", value: "SantanaDoIpanema" },
    { name: "Teotônio Vilela", value: "TeotônioVilela" },
    { name: "Atalaia", value: "Atalaia" },
    { name: "Girau do Ponciano", value: "GirauDoPonciano" },
    { name: "Pilar", value: "Pilar" },
    { name: "Maragogi", value: "Maragogi" },
    { name: "Campo Alegre", value: "CampoAlegre" },
    { name: "São Sebastião", value: "SãoSebastião" },
    { name: "São Luís do Quitunde", value: "SãoLuísDoQuitunde" },
    { name: "São José da Tapera", value: "SãoJoséDaTapera" },
    { name: "Craíbas", value: "Craíbas" },
    { name: "Murici", value: "Murici" },
    { name: "Limoeiro de Anadia", value: "LimoeiroDeAnadia" },
    { name: "Satuba", value: "Satuba" },
    { name: "Viçosa", value: "Viçosa" },
    { name: "Porto Calvo", value: "PortoCalvo" },
    { name: "Igaci", value: "Igaci" },
    { name: "Junqueiro", value: "Junqueiro" },
    { name: "Matriz de Camaragibe", value: "MatrizDeCamaragibe" },
    { name: "Pão de Açúcar", value: "PãoDeAçúcar" },
    { name: "Traipu", value: "Traipu" },
    { name: "Feira Grande", value: "FeiraGrande" },
    { name: "Piranhas", value: "Piranhas" },
    { name: "Mata Grande", value: "MataGrande" },
    { name: "Igreja Nova", value: "IgrejaNova" },
    { name: "Boca da Mata", value: "BocaDaMata" },
    { name: "São José da Laje", value: "SãoJoséDaLaje" },
    { name: "Olho d'Água das Flores", value: "OlhoD'águaDasFlores" },
    { name: "Porto Real do Colégio", value: "PortoRealDoColégio" },
    { name: "Taquarana", value: "Taquarana" },
    { name: "Água Branca", value: "ÁguaBranca" },
    { name: "Lagoa da Canoa", value: "LagoaDaCanoa" },
    { name: "Major Isidoro", value: "MajorIsidoro" },
    { name: "Joaquim Gomes", value: "JoaquimGomes" },
    { name: "Batalha", value: "Batalha" },
    { name: "Barra de Santo Antônio", value: "BarraDeSantoAntônio" },
    { name: "Cajueiro", value: "Cajueiro" },
    { name: "Piaçabuçu", value: "Piaçabuçu" },
    { name: "Colônia Leopoldina", value: "ColôniaLeopoldina" },
    { name: "Canapi", value: "Canapi" },
    { name: "Estrela de Alagoas", value: "EstrelaDeAlagoas" },
    { name: "Messias", value: "Messias" },
    { name: "Inhapi", value: "Inhapi" },
    { name: "Capela", value: "Capela" },
    { name: "Paripueira", value: "Paripueira" },
    { name: "Anadia", value: "Anadia" },
    { name: "Passo de Camaragibe", value: "PassoDeCamaragibe" },
    { name: "Ibateguara", value: "Ibateguara" },
    { name: "Maribondo", value: "Maribondo" },
    { name: "Poço das Trincheiras", value: "PoçoDasTrincheiras" },
    { name: "Senador Rui Palmeira", value: "SenadorRuiPalmeira" },
    { name: "Ouro Branco", value: "OuroBranco" },
    { name: "Santana do Mundaú", value: "SantanaDoMundaú" },
    { name: "Quebrangulo", value: "Quebrangulo" },
    { name: "Dois Riachos", value: "DoisRiachos" },
    { name: "Olivença", value: "Olivença" },
    { name: "Coité do Nóia", value: "CoitéDoNóia" },
    { name: "Pariconha", value: "Pariconha" },
    { name: "Cacimbinhas", value: "Cacimbinhas" },
    { name: "Novo Lino", value: "NovoLino" },
    { name: "Flexeiras", value: "Flexeiras" },
    { name: "Branquinha", value: "Branquinha" },
    { name: "Maravilha", value: "Maravilha" },
    { name: "Jequiá da Praia", value: "JequiáDaPraia" },
    { name: "Porto de Pedras", value: "PortoDePedras" },
    { name: "Japaratinga", value: "Japaratinga" },
    { name: "Carneiros", value: "Carneiros" },
    { name: "São Miguel dos Milagres", value: "SãoMiguelDosMilagres" },
    { name: "Olho d'Água do Casado", value: "OlhoD'águaDoCasado" },
    { name: "Campo Grande", value: "CampoGrande" },
    { name: "Barra de São Miguel", value: "BarraDeSãoMiguel" },
    { name: "Monteirópolis", value: "Monteirópolis" },
    { name: "Santa Luzia do Norte", value: "SantaLuziaDoNorte" },
    { name: "Campestre", value: "Campestre" },
    { name: "Paulo Jacinto", value: "PauloJacinto" },
    { name: "São Brás", value: "SãoBrás" },
    { name: "Roteiro", value: "Roteiro" },
    { name: "Belo Monte", value: "BeloMonte" },
    { name: "Chã Preta", value: "ChãPreta" },
    { name: "Tanque d'Arca", value: "TanqueD'arca" },
    { name: "Coqueiro Seco", value: "CoqueiroSeco" },
    { name: "Jacuípe", value: "Jacuípe" },
    { name: "Jacaré dos Homens", value: "JacaréDosHomens" },
    { name: "Jaramataia", value: "Jaramataia" },
    { name: "Minador do Negrão", value: "MinadorDoNegrão" },
    { name: "Belém", value: "Belém" },
    { name: "Olho d'Água Grande", value: "OlhoD'águaGrande" },
    { name: "Palestina", value: "Palestina" },
    { name: "Jundiá", value: "Jundiá" },
    { name: "Feliz Deserto", value: "FelizDeserto" },
    { name: "Mar Vermelho", value: "MarVermelho" },
    { name: "Pindob", value: "Pindob" },
  ];
  const cidadesBahia: ICity[] = [];
  const cidadesCeara: ICity[] = [];
  const cidadesMaranhao: ICity[] = [];
  const cidadesParaiba: ICity[] = [];
  const cidadesPernambuco: ICity[] = [];
  const cidadesPiaui: ICity[] = [];
  const cidadesRioGrandeDoNorte: ICity[] = [];
  const cidadesSergipe: ICity[] = [];

  const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState<ICity[]>(cidadesAlagoas);

  type States =
    | "Alagoas"
    | "Bahia"
    | "Ceara"
    | "Maranhao"
    | "Paraiba"
    | "Pernambuco"
    | "Piaui"
    | "RioGrandeDoNorte"
    | "Sergipe";

  const toggleState = (state: States) => {
    if (state === "Alagoas" && currentState !== "Alagoas")
      setCurrentCity(cidadesAlagoas);
    else if (state === "Bahia" && currentState !== "Bahia")
      setCurrentCity(cidadesBahia);
    else if (state === "Ceara" && currentState !== "Ceara")
      setCurrentCity(cidadesCeara);
    else if (state === "Maranhao" && currentState !== "Maranhao")
      setCurrentCity(cidadesMaranhao);
    else if (state === "Paraiba" && currentState !== "Paraiba")
      setCurrentCity(cidadesParaiba);
    else if (state === "Pernambuco" && currentState !== "Pernambuco")
      setCurrentCity(cidadesPernambuco);
    else if (state === "Piaui" && currentState !== "Piaui")
      setCurrentCity(cidadesPiaui);
    else if (
      state === "RioGrandeDoNorte" &&
      currentState !== "RioGrandeDoNorte"
    )
      setCurrentCity(cidadesRioGrandeDoNorte);
    else if (state === "Sergipe" && currentState !== "Sergipe")
      setCurrentCity(cidadesSergipe);
  };
  const stateOptions = states.map(({ value, name }: IStates) => {
    return (
      <option value={value} onClick={() => toggleState(value)}>
        {name}
      </option>
    );
  });

  const cityOptions = currentCity.map(({ value, name }: ICity) => {
    return <option value={value}>{name}</option>;
  });

  type ContribType = "text" | "video";
  const [contribType, setContribType] = useState<ContribType>("text");

  const ToggleContribType = (type: ContribType) => {
    if (type === "text" && contribType !== "text") {
      setContribType("text");
    } else if (type === "video" && contribType !== "video") {
      setContribType("video");
    }
  };

  const SubmitContrib = (event: React.FormEvent<HTMLFormElement>) => {
    const allFormData = { ...formData, contribType };
    event.preventDefault();
    const submitURI = "";
    fetch(submitURI, {
      credentials: "include",
      cache: "default",
      method: "POST",
      body: JSON.stringify(allFormData),
    });
  };

  interface IFormData {
    name: string;
    state: States;
    city: string;
    polo: string;
    igreja: string;
    contrib: string;
  }

  const [formData, setFormData] = useState<IFormData>({} as IFormData);
  const HandleEventChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(`New Value: ${event.target.value}`);
  };

  const pageTransitions = useSelector(
    (state: RootState) => state.pageTranisition
  );
  const pageProps = useSpring(pageTransitions);

  return (
    <animated.main style={pageProps}>
      <form>
        <h1>Enviar Contribuicao</h1>
        <StyledField className="contrib-element">
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={HandleEventChange}
          />
        </StyledField>
        <StyledLocation>
          {false && (
            <OptionState className="state">
              <label htmlFor="state">Estado</label>
              <select name="state" id="state">
                {stateOptions}
              </select>
            </OptionState>
          )}
          <OptionCity className="city">
            <label htmlFor="city">Cidade</label>
            <select name="city" id="city">
              {cityOptions}
            </select>
          </OptionCity>
          <OptionPolo className="polo">
            <label htmlFor="polo">Polo</label>
            <select name="polo" id="polo">
              <option value="Mangabeira">Mangabeira</option>
            </select>
          </OptionPolo>
          <OptionIgreja className="igreja">
            <label htmlFor="igreja">Igreja</label>
            <select name="igreja" id="igreja">
              <option value="Mangabeira">Mangabeira</option>
              <option value="Bancarios">Bancarios</option>
              <option value="CidadeVerde">Cidade Verde</option>
            </select>
          </OptionIgreja>
        </StyledLocation>
        <StyledType className="contrib-element">
          <StyledOption onClick={() => ToggleContribType("text")}>
            <label htmlFor="texto">Contribuicao de Texto</label>
            <input
              type="radio"
              name="type"
              id="texto"
              value={contribType}
              checked={contribType === "text"}
            />
          </StyledOption>
          <StyledOption onClick={() => ToggleContribType("video")}>
            <label htmlFor="video">Contribuicao de Video</label>
            <input
              type="radio"
              name="type"
              id="video"
              value={contribType}
              checked={contribType === "video"}
            />
          </StyledOption>
        </StyledType>
        {contribType === "text" && (
          <StyledField className="contrib-element">
            <label htmlFor="contrib">Contribuicao escrita</label>
            <textarea
              name="contrib"
              id="contrib"
              cols={54}
              rows={10}
              value={formData.contrib}
              onChange={HandleEventChange}
            ></textarea>
          </StyledField>
        )}
        {contribType === "video" && (
          <StyledField className="contrib-element">
            <label htmlFor="contrib">Contribuicao em Video</label>
            <input type="file" name="contrib" id="contrib" />
          </StyledField>
        )}
        <StyledField onClick={() => SubmitContrib}>
          <button type="submit">Enviar Contribuicao</button>
        </StyledField>
      </form>
    </animated.main>
  );
};

export default Contrib;
