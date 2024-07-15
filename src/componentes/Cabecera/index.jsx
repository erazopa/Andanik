import styled from "styled-components";
import BarraDeNavegacion from "../BarraDeNavegacion";

const HeaderEstilizado = styled.header`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  img {
    width: 212px;
  }
`;

const Cabecera = (props) => {
  console.log(props);
  return (
    <HeaderEstilizado>
      <img src="imagenes/logo.png" alt="Logo Hecho a Mano" />
      <BarraDeNavegacion />
    </HeaderEstilizado>
  );
};

export default Cabecera;
