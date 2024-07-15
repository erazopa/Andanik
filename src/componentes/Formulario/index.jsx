import { useState } from "react";
import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import ListaDeOpciones from "../ListaDeOpciones";
import Boton from "../Boton";
import BotonClear from "../BotonLimpiar";

const Texto = styled.section`
  width: 70%;
  display: flex;
  justify-content: center;
  margin: 80px 0;
  background-color: #000000;
`;

const FormularioForm = styled.form`
  width: 100%;
`;

const TituloForm = styled.h1`
  font-size: 50px;
  color: #ffffff;
  font-family: "GandhiSansBold";
  text-align: center;
  border-bottom: 4px solid #ffffff;
`;

const FormEditar = (props) => {
  const [descripcion, actualizarDescripcion] = useState("");
  const [imagen, actualizarImagen] = useState("");
  const [valor, actualizarValor] = useState("");
  const [categorias, actualizarCategorias] = useState("");

  const { registrarArticulo } = props;

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log("Manejar el envio");
    let datosAEnviar = {
      descripcion,
      imagen,
      valor,
      categorias,
    };

    registrarArticulo(datosAEnviar);
  };

  return (
    <Texto>
      <FormularioForm onSubmit={manejarEnvio}>
        <TituloForm>EDITAR CARD</TituloForm>
        <CampoTexto
          titulo="Descripcion"
          placeholder="Ingresar descripcion"
          required
          valor={descripcion}
          actualizarValor={actualizarDescripcion}
        />
        <CampoTexto
          titulo="Imagen"
          placeholder="Ingresar imagen"
          required
          valor={imagen}
          actualizarValor={actualizarImagen}
        />

        <CampoTexto
          titulo="Valor"
          placeholder="Ingresar valor"
          required
          valor={valor}
          actualizarValor={actualizarValor}
        />
        <ListaDeOpciones
          valor={categorias}
          actualizaCategorias={actualizarCategorias}
          categorias={props.categorias}
        />
        <Boton>Guardar</Boton>
        <BotonClear>Limpiar</BotonClear>
      </FormularioForm>
    </Texto>
  );
};

export default FormEditar;
