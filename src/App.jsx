import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./componentes/GlobalStyles";
import Cabecera from "./componentes/Cabecera";
import banner from "./assets/banner.png";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import Titulo from "./componentes/Titulo";
import { BrowserRouter as Router } from "react-router-dom";
import Formulario from "./pages/Crear";

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  // Lista de Categorias
  const categorias = [
    {
      titulo: "Anillos de Compromiso",
      colorPrimario: "#402F21",
      colorSecundario: "#A67E4E",
    },
    {
      titulo: "Argollas de Matrimonio",
      colorPrimario: "#402F21",
      colorSecundario: "#BFA169",
    },
    {
      titulo: "Pulseras",
      colorPrimario: "#402F21",
      colorSecundario: "#D9C6B0",
    },
  ];

  return (
    <Router>
      <GlobalStyles />
      {mostrarFormulario === true ? <Formulario /> : <></>}
      <Cabecera cambiarMostrar={cambiarMostrar} />
      <ContenidoGaleria>
        <Banner
          texto="Diseñamos y Elaboramos las joyas de tus sueños"
          backgroundImage={banner}
        />
        <Titulo>Personalizamos tus Joyas</Titulo>
        <Galeria categorias="Anillos de Compromiso" />
        <Galeria categorias="Argollas de Matrimonio" />
        <Galeria categorias="Pulseras" />
      </ContenidoGaleria>
    </Router>
  );
}
export default App;
