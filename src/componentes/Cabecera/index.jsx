import styled from "styled-components";
import BarraDeNavegacion from "../BarraDeNavegacion";

const HeaderEstilizado = styled.header`
  background-color: #000000;
  padding: 60px 10px;
  display: flex;
  flex-direction: column;
  img {
    width: 212px;
  }
`;

const Cabecera = () => {
  return (
    <HeaderEstilizado>
      <img src="imagenes/logo1.png" alt="Logo Andanik Joyeros" />
      <img src="imagenes/logo.png" alt="Logo Hecho a Mano" />
      <BarraDeNavegacion />
    </HeaderEstilizado>
  );
};

export default Cabecera;
