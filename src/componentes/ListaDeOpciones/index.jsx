import styled from "styled-components";

const ListaOption = styled.div`
  margin: 24px 15px;
  font-family: "GandhiSansRegular";
  color: #ffffff;
`;
const ListaLabel = styled.label`
  font-family: "GandhiSansRegular";
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  display: block;
  margin-bottom: 15px;
`;
const ListaSelect = styled.select`
  width: 50%;
  padding: 30px 20px;
  border-radius: 20px;
  border-color: #f2be5c;
  font-size: 16px;
  border: none;
  outline-color: #f2be5c;
`;

const ListaDeOpciones = (props) => {
  const categorias = [
    "Anillos de Compromiso",
    "Argollas de Matrimonio",
    "Pulseras",
  ];

  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.actualizaValor(e.target.value);
  };

  return (
    <ListaOption>
      <ListaLabel>Categorias</ListaLabel>
      <ListaSelect value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Categoria
        </option>
        {categorias.map((categoria, index) => {
          return (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          );
        })}
      </ListaSelect>
    </ListaOption>
  );
};

export default ListaDeOpciones;
