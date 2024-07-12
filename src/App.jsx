import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./componentes/GlobalStyles";
import Cabecera from "./componentes/Cabecera";
import banner from "./assets/banner.png";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import Titulo from "./componentes/Titulo";
import Formulario from "./componentes/Formulario";
import { BrowserRouter as Router } from "react-router-dom";

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  return (
    <Router>
      <GlobalStyles />
      {mostrarFormulario === true ? <Formulario /> : <div></div>}
      <Cabecera cambiarMostrar={cambiarMostrar} />

      <ContenidoGaleria>
        <Banner
          texto="Diseñamos y Elaboramos las joyas de tus sueños"
          backgroundImage={banner}
        />
        <Titulo>Personalizamos tus Joyas</Titulo>
        <Galeria />
        <Galeria />
        <Galeria />
      </ContenidoGaleria>
    </Router>
  );
}
export default App;
