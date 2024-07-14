import { useState } from "react";
import styled from "styled-components";

const Texto = styled.div`
  margin: 24px 15px;
  font-family: "GandhiSansRegular";
  color: #ffffff;
`;

const TextoLabel = styled.label`
  font-family: "GandhiSansRegular";
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  display: block;
  margin-bottom: 15px;
`;

const TextoInput = styled.input`
  width: 50%;
  padding: 30px 20px;
  border-radius: 20px;
  border-color: #f2be5c;
  font-size: 16px;
  box-sizing: border-box;
  outline-color: #f2be5c;
`;

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };
  return (
    <Texto>
      <TextoLabel>{props.titulo}</TextoLabel>
      <TextoInput
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </Texto>
  );
};

export default CampoTexto;
