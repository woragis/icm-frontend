import {
  StyledForm,
  StyledField,
  StyledLocation,
  OptionState,
  OptionCity,
  OptionPolo,
  OptionIgreja,
} from "./style";

const Contrib = () => {
  return (
    <StyledForm>
      <form>
        <StyledField>
          <label htmlFor="name">Nome Completo</label>
          <input type="text" name="name" id="name" placeholder="Seu nome" />
        </StyledField>
        <StyledLocation>
          <OptionState className="state">
            <label htmlFor="state">Estado</label>
            <select name="state" id="state">
              <option value="Paraiba">Paraiba</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Ceara">Ceara</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Tocantins">Tocantins</option>
            </select>
          </OptionState>
          <OptionCity className="city">
            <label htmlFor="city">Cidade</label>
            <select name="city" id="city">
              <option value="JoaoPessoa">Joao Pessoa</option>
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
        <StyledField>
          <label htmlFor="contrib">Contribuicao</label>
          <textarea name="contrib" id="contrib" cols={54} rows={10}></textarea>
        </StyledField>
        <StyledField>
          <button type="submit">Enviar</button>
        </StyledField>
      </form>
    </StyledForm>
  );
};

export default Contrib;
