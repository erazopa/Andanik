import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import ListaDeOpciones from "../ListaDeOpciones";
import Boton from "../Boton";
import BotonClear from "../BotonLimpiar";

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
`;

const DatosForm = styled.h3`
  font-size: 25px;
  color: #ffffff;
  font-family: "GandhiSansRegular";
  text-align: center;
  border-bottom: 2px solid #ffffff;
`;

const Crear = styled.h2`
  font-size: 35px;
  color: #ffffff;
  font-family: "GandhiSansBold";
  border-bottom: 2px solid #ffffff;
  margin-left: 15px;
`;

const Formulario = () => {
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log("Manejar el envio", evento);
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
        />
        <CampoTexto titulo="Imagen" placeholder="Ingresar imagen " required />
        <CampoTexto titulo="Valor" placeholder="Ingresar valor" required />
        <ListaDeOpciones />
        <Boton>Crear</Boton>
        <BotonClear>Limpiar</BotonClear>
      </FormularioForm>
    </Texto>
  );
};

export default Formulario;
