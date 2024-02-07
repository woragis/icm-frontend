import { ChangeEvent, FormEvent, useState } from "react";
import { StyledLocation, StyledType, StyledOption, StyledContribType, StyledField } from "./style";
import { useSpring } from "@react-spring/web";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Button, Field, Form, Input, Label, Main, TextArea, Title } from "../../styles/GlobalStyles";

const Contrib = () => {
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
  const cidadesParaiba: ICity[] = [
    { name: "Água Branca", value: "AguaBranca" },
    { name: "Aguiar", value: "Aguiar" },
    { name: "Alagoa Grande", value: "AlagoaGrande" },
    { name: "Alagoa Nova", value: "AlagoaNova" },
    { name: "Alagoinha", value: "Alagoinha" },
    { name: "Alcantil", value: "Alcantil" },
    { name: "Algodão de Jandaíra", value: "AlgodaodeJandaira" },
    { name: "Alhandra", value: "Alhandra" },
    { name: "Amparo", value: "Amparo" },
    { name: "Aparecida", value: "Aparecida" },
    { name: "Araçagi", value: "Aracagi" },
    { name: "Arara", value: "Arara" },
    { name: "Araruna", value: "Araruna" },
    { name: "Areia", value: "Areia" },
    { name: "Areia de Baraúnas", value: "AreiadeBaraunas" },
    { name: "Areial", value: "Areial" },
    { name: "Aroeiras", value: "Aroeiras" },
    { name: "Assunção", value: "Assuncao" },
    { name: "Baía da Traição", value: "BaiadaTraicao" },
    { name: "Bananeiras", value: "Bananeiras" },
    { name: "Baraúna", value: "Barauna" },
    { name: "Barra de Santa Rosa", value: "BarradeSantaRosa" },
    { name: "Barra de Santana", value: "BarradeSantana" },
    { name: "Barra de São Miguel", value: "BarradeSaoMiguel" },
    { name: "Bayeux", value: "Bayeux" },
    { name: "Belém", value: "Belem" },
    { name: "Belém do Brejo do Cruz", value: "BelemdoBrejodoCruz" },
    { name: "Bernardino Batista", value: "BernardinoBatista" },
    { name: "Boa Ventura", value: "BoaVentura" },
    { name: "Boa Vista", value: "BoaVista" },
    { name: "Bom Jesus", value: "BomJesus" },
    { name: "Bom Sucesso", value: "BomSucesso" },
    { name: "Bonito de Santa Fé", value: "BonitodeSantaFe" },
    { name: "Boqueirão", value: "Boqueirao" },
    { name: "Borborema", value: "Borborema" },
    { name: "Brejo do Cruz", value: "BrejodoCruz" },
    { name: "Brejo dos Santos", value: "BrejodosSantos" },
    { name: "Caaporã", value: "Caapora" },
    { name: "Cabaceiras", value: "Cabaceiras" },
    { name: "Cabedelo", value: "Cabedelo" },
    { name: "Cachoeira dos Índios", value: "CachoeiradosIndios" },
    { name: "Cacimba de Areia", value: "CacimbadeAreia" },
    { name: "Cacimba de Dentro", value: "CacimbadeDentro" },
    { name: "Cacimbas", value: "Cacimbas" },
    { name: "Caiçara", value: "Caicara" },
    { name: "Cajazeiras", value: "Cajazeiras" },
    { name: "Cajazeirinhas", value: "Cajazeirinhas" },
    { name: "Caldas Brandão", value: "CaldasBrandao" },
    { name: "Camalaú", value: "Camalau" },
    { name: "Campina Grande", value: "CampinaGrande" },
    { name: "Capim", value: "Capim" },
    { name: "Caraúbas", value: "Caraubas" },
    { name: "Carrapateira", value: "Carrapateira" },
    { name: "Casserengue", value: "Casserengue" },
    { name: "Catingueira", value: "Catingueira" },
    { name: "Catolé do Rocha", value: "CatoledoRocha" },
    { name: "Caturité", value: "Caturite" },
    { name: "Conceição", value: "Conceicao" },
    { name: "Condado", value: "Condado" },
    { name: "Conde", value: "Conde" },
    { name: "Congo", value: "Congo" },
    { name: "Coremas", value: "Coremas" },
    { name: "Coxixola", value: "Coxixola" },
    { name: "Cruz do Espírito Santo", value: "CruzdoEspiritoSanto" },
    { name: "Cubati", value: "Cubati" },
    { name: "Cuité", value: "Cuite" },
    { name: "Cuité de Mamanguape", value: "CuitedeMamanguape" },
    { name: "Cuitegi", value: "Cuitegi" },
    { name: "Curral de Cima", value: "CurraldeCima" },
    { name: "Curral Velho", value: "CurralVelho" },
    { name: "Damião", value: "Damiao" },
    { name: "Desterro", value: "Desterro" },
    { name: "Diamante", value: "Diamante" },
    { name: "Dona Inês", value: "DonaInes" },
    { name: "Duas Estradas", value: "DuasEstradas" },
    { name: "Emas", value: "Emas" },
    { name: "Esperança", value: "Esperanca" },
    { name: "Fagundes", value: "Fagundes" },
    { name: "Frei Martinho", value: "FreiMartinho" },
    { name: "Gado Bravo", value: "GadoBravo" },
    { name: "Guarabira", value: "Guarabira" },
    { name: "Gurinhém", value: "Gurinhem" },
    { name: "Gurjão", value: "Gurjao" },
    { name: "Ibiara", value: "Ibiara" },
    { name: "Igaracy", value: "Igaracy" },
    { name: "Imaculada", value: "Imaculada" },
    { name: "Ingá", value: "Inga" },
    { name: "Itabaiana", value: "Itabaiana" },
    { name: "Itaporanga", value: "Itaporanga" },
    { name: "Itapororoca", value: "Itapororoca" },
    { name: "Itatuba", value: "Itatuba" },
    { name: "Jacaraú", value: "Jacarau" },
    { name: "Jericó", value: "Jerico" },
    { name: "João Pessoa", value: "JoaoPessoa" },
    {
      name: "Joca Claudino (ex-Santarém)",
      value: "JocaClaudino(ex-Santarem)",
    },
    { name: "Juarez Távora", value: "JuarezTavora" },
    { name: "Juazeirinho", value: "Juazeirinho" },
    { name: "Junco do Seridó", value: "JuncodoSerido" },
    { name: "Juripiranga", value: "Juripiranga" },
    { name: "Juru", value: "Juru" },
    { name: "Lagoa", value: "Lagoa" },
    { name: "Lagoa de Dentro", value: "LagoadeDentro" },
    { name: "Lagoa Seca", value: "LagoaSeca" },
    { name: "Lastro", value: "Lastro" },
    { name: "Livramento", value: "Livramento" },
    { name: "Logradouro", value: "Logradouro" },
    { name: "Lucena", value: "Lucena" },
    { name: "Mãe d'Água", value: "Maed'Agua" },
    { name: "Malta", value: "Malta" },
    { name: "Mamanguape", value: "Mamanguape" },
    { name: "Manaíra", value: "Manaira" },
    { name: "Marcação", value: "Marcacao" },
    { name: "Mari", value: "Mari" },
    { name: "Marizópolis", value: "Marizopolis" },
    { name: "Massaranduba", value: "Massaranduba" },
    { name: "Mataraca", value: "Mataraca" },
    { name: "Matinhas", value: "Matinhas" },
    { name: "Mato Grosso", value: "MatoGrosso" },
    { name: "Matureia", value: "Matureia" },
    { name: "Mogeiro", value: "Mogeiro" },
    { name: "Montadas", value: "Montadas" },
    { name: "Monte Horebe", value: "MonteHorebe" },
    { name: "Monteiro", value: "Monteiro" },
    { name: "Mulungu", value: "Mulungu" },
    { name: "Natuba", value: "Natuba" },
    { name: "Nazarezinho", value: "Nazarezinho" },
    { name: "Nova Floresta", value: "NovaFloresta" },
    { name: "Nova Olinda", value: "NovaOlinda" },
    { name: "Nova Palmeira", value: "NovaPalmeira" },
    { name: "Olho d'Água", value: "Olhod'Agua" },
    { name: "Olivedos", value: "Olivedos" },
    { name: "Ouro Velho", value: "OuroVelho" },
    { name: "Parari", value: "Parari" },
    { name: "Passagem", value: "Passagem" },
    { name: "Patos", value: "Patos" },
    { name: "Paulista", value: "Paulista" },
    { name: "Pedra Branca", value: "PedraBranca" },
    { name: "Pedra Lavrada", value: "PedraLavrada" },
    { name: "Pedras de Fogo", value: "PedrasdeFogo" },
    { name: "Pedro Régis", value: "PedroRegis" },
    { name: "Piancó", value: "Pianco" },
    { name: "Picuí", value: "Picui" },
    { name: "Pilar", value: "Pilar" },
    { name: "Pilões", value: "Piloes" },
    { name: "Pilõezinhos", value: "Piloezinhos" },
    { name: "Pirpirituba", value: "Pirpirituba" },
    { name: "Pitimbu", value: "Pitimbu" },
    { name: "Pocinhos", value: "Pocinhos" },
    { name: "Poço Dantas", value: "PocoDantas" },
    { name: "Poço de José de Moura", value: "PocodeJosedeMoura" },
    { name: "Pombal", value: "Pombal" },
    { name: "Prata", value: "Prata" },
    { name: "Princesa Isabel", value: "PrincesaIsabel" },
    { name: "Puxinanã", value: "Puxinana" },
    { name: "Queimadas", value: "Queimadas" },
    { name: "Quixaba", value: "Quixaba" },
    { name: "Remígio", value: "Remigio" },
    { name: "Riachão", value: "Riachao" },
    { name: "Riachão do Bacamarte", value: "RiachaodoBacamarte" },
    { name: "Riachão do Poço", value: "RiachaodoPoco" },
    { name: "Riacho de Santo Antônio", value: "RiachodeSantoAntonio" },
    { name: "Riacho dos Cavalos", value: "RiachodosCavalos" },
    { name: "Rio Tinto", value: "RioTinto" },
    { name: "Salgadinho", value: "Salgadinho" },
    { name: "Salgado de São Félix", value: "SalgadodeSaoFelix" },
    { name: "Santa Cecília", value: "SantaCecilia" },
    { name: "Santa Cruz", value: "SantaCruz" },
    { name: "Santa Helena", value: "SantaHelena" },
    { name: "Santa Inês", value: "SantaInes" },
    { name: "Santa Luzia", value: "SantaLuzia" },
    { name: "Santa Rita", value: "SantaRita" },
    { name: "Santa Terezinha", value: "SantaTerezinha" },
    { name: "Santana de Mangueira", value: "SantanadeMangueira" },
    { name: "Santana dos Garrotes", value: "SantanadosGarrotes" },
    { name: "Santo André", value: "SantoAndre" },
    { name: "São Bentinho", value: "SaoBentinho" },
    { name: "São Bento", value: "SaoBento" },
    { name: "São Domingos", value: "SaoDomingos" },
    { name: "São Domingos do Cariri", value: "SaoDomingosdoCariri" },
    { name: "São Francisco", value: "SaoFrancisco" },
    { name: "São João do Cariri", value: "SaoJoaodoCariri" },
    { name: "São João do Rio do Peixe", value: "SaoJoaodoRiodoPeixe" },
    { name: "São João do Tigre", value: "SaoJoaodoTigre" },
    { name: "São José da Lagoa Tapada", value: "SaoJosedaLagoaTapada" },
    { name: "São José de Caiana", value: "SaoJosedeCaiana" },
    { name: "São José de Espinharas", value: "SaoJosedeEspinharas" },
    { name: "São José de Piranhas", value: "SaoJosedePiranhas" },
    { name: "São José de Princesa", value: "SaoJosedePrincesa" },
    { name: "São José do Bonfim", value: "SaoJosedoBonfim" },
    { name: "São José do Brejo do Cruz", value: "SaoJosedoBrejodoCruz" },
    { name: "São José do Sabugi", value: "SaoJosedoSabugi" },
    { name: "São José dos Cordeiros", value: "SaoJosedosCordeiros" },
    { name: "São José dos Ramos", value: "SaoJosedosRamos" },
    { name: "São Mamede", value: "SaoMamede" },
    { name: "São Miguel de Taipu", value: "SaoMigueldeTaipu" },
    {
      name: "São Sebastião de Lagoa de Roça",
      value: "SaoSebastiaodeLagoadeRoca",
    },
    {
      name: "São Sebastião do Umbuzeiro",
      value: "SaoSebastiaodoUmbuzeiro",
    },
    { name: "São Vicente do Seridó", value: "SaoVicentedoSerido" },
    { name: "Sapé", value: "Sape" },
    { name: "Serra Branca", value: "SerraBranca" },
    { name: "Serra da Raiz", value: "SerradaRaiz" },
    { name: "Serra Grande", value: "SerraGrande" },
    { name: "Serra Redonda", value: "SerraRedonda" },
    { name: "Serraria", value: "Serraria" },
    { name: "Sertãozinho", value: "Sertaozinho" },
    { name: "Sobrado", value: "Sobrado" },
    { name: "Solânea", value: "Solanea" },
    { name: "Soledade", value: "Soledade" },
    { name: "Sossêgo", value: "Sossego" },
    { name: "Sousa", value: "Sousa" },
    { name: "Sumé", value: "Sume" },
    {
      name: "Tacima (ex-Campo de Santana)",
      value: "Tacima(ex-CampodeSantana)",
    },
    { name: "Taperoá", value: "Taperoa" },
    { name: "Tavares", value: "Tavares" },
    { name: "Teixeira", value: "Teixeira" },
    { name: "Tenório", value: "Tenorio" },
    { name: "Triunfo", value: "Triunfo" },
    { name: "Uiraúna", value: "Uirauna" },
    { name: "Umbuzeiro", value: "Umbuzeiro" },
    { name: "Várzea", value: "Varzea" },
    { name: "Vieirópolis", value: "Vieiropolis" },
    { name: "Vista Serrana", value: "VistaSerrana" },
    { name: "Zabelê", value: "Zabele" },
  ];
  const currentCity = cidadesParaiba;

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

  const SubmitContrib = (event: FormEvent) => {
    event.preventDefault();
    console.log(contribFormData);
    const submitURI = "http://localhost:8080/";
    fetch(submitURI, {
      credentials: "include",
      cache: "default",
      method: "POST",
      body: JSON.stringify(contribFormData),
    });
  };

  interface IFormData {
    name: string;
    polo: string;
    church: string;
    type: "text" | "video";
    contrib?: string;
    videoUrl?: string;
  }

  const [contribFormData, setContribFormData] = useState<IFormData>({
    name: "",
    polo: "",
    church: "",
    type: "text",
  } as IFormData);
  const HandleContribChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(event.target.name, event.target.value);
    setContribFormData({
      ...contribFormData,
      [event.target.name]: event.target.value,
    });
  };

  const pageTransitions = useSelector((state: RootState) => state.pageTranisition);
  const pageProps = useSpring(pageTransitions);

  return (
    <Main style={pageProps}>
      <Form onSubmit={SubmitContrib}>
        <Title>Enviar Contribuição</Title>
        <Field className="contrib-element">
          <Label htmlFor="name">Nome Completo</Label>
          <Input type="text" name="name" id="name" placeholder="Seu nome" value={contribFormData.name} onChange={HandleContribChange} />
        </Field>
        <Field>
          <StyledOption className="polo">
            <label htmlFor="polo">Polo</label>
            <select name="polo" id="polo" onChange={HandleContribChange}>
              <option value="Mangabeira">Mangabeira</option>
            </select>
          </StyledOption>
          <StyledOption className="igreja">
            <label htmlFor="church">Igreja</label>
            <select name="church" id="church" onChange={HandleContribChange}>
              <option value="Mangabeira">Mangabeira</option>
              <option value="Bancarios">Bancarios</option>
              <option value="CidadeVerde">Cidade Verde</option>
            </select>
          </StyledOption>
        </Field>
        <StyledType>
          <div className="contrib-option">
            <StyledContribType className="contrib-element">
              <label htmlFor="texto">Contribuição de Texto</label>
              <input type="radio" name="type" id="texto" defaultChecked={contribType === "text"} value="text" onChange={HandleContribChange} />
            </StyledContribType>
            <StyledContribType className="contrib-element">
              <label htmlFor="video">Contribuição de Video</label>
              <input type="radio" name="type" id="video" defaultChecked={contribType === "video"} value="video" onChange={HandleContribChange} />
            </StyledContribType>
          </div>
        </StyledType>
        {contribFormData.type === "text" && (
          <Field className="contrib-element text-contrib">
            <Label htmlFor="contrib">Contribuição escrita</Label>
            <TextArea name="contrib" id="contrib" cols={54} rows={10} value={contribFormData.contrib} onChange={HandleContribChange}></TextArea>
          </Field>
        )}
        {contribFormData.type === "video" && (
          <Field className="contrib-element video-contrib">
            <Label htmlFor="contrib">Contribuicao em Video</Label>
            <Input type="file" name="contrib" id="contrib" onChange={HandleContribChange} />
          </Field>
        )}
        <Field onClick={SubmitContrib} className="contrib-element">
          <Button type="submit">
            Enviar Contribuição
            <span>Enviar Contribuição</span>
          </Button>
        </Field>
      </Form>
    </Main>
  );
};

export default Contrib;
