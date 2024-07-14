import { useState } from "react";
import styled from "styled-components";
import CampoTexto from "../../componentes/CampoTexto";
import ListaDeOpciones from "../../componentes/ListaDeOpciones";
import Boton from "../../componentes/Boton";
import BotonClear from "../../componentes/BotonLimpiar";

const Texto = styled.section`
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

const DatosForm = styled.h3`
  font-size: 25px;
  color: #ffffff;
  font-family: "GandhiSansRegular";
  text-align: center;
  border-bottom: 4px solid #ffffff;
`;

const Crear = styled.h2`
  font-size: 35px;
  color: #ffffff;
  font-family: "GandhiSansBold";
  border-bottom: 4px solid #ffffff;
  margin-left: 15px;
`;

const Formulario = () => {
  const [descripcion, actualizarDescripcion] = useState("");
  const [imagen, actualizarImagen] = useState("");
  const [valor, actualizarValor] = useState("");
  const [categorias, actualizarCategorias] = useState("");

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log("Manejar el envio");
    let datosAEnviar = {
      descripcion,
      imagen,
      valor,
      categorias,
    };

    console.log(datosAEnviar);
  };

  return (
    <Texto>
      <FormularioForm onSubmit={manejarEnvio}>
        <TituloForm>NUEVO ARTICULO</TituloForm>
        <DatosForm>
          COMPLETE EL FORMULARIO PARA CREAR UN NUEVO ARTICULO
        </DatosForm>
        <Crear>Crear Tarjeta</Crear>
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
          actualizaValor={actualizarCategorias}
        />
        <Boton>Crear</Boton>
        <BotonClear>Limpiar</BotonClear>
      </FormularioForm>
    </Texto>
  );
};

export default Formulario;
