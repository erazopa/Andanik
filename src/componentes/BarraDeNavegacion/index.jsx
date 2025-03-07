import styled from "styled-components";
import { Link } from "react-router-dom";

const ListaEstilizada = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 15px;
  font-family: "GandhiSansBold";
`;
const ItemDeNavegacionHome = styled.div`
  width: 180px;
  height: 54px;
  border-radius: 10px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-color: #ffffff;
  color: #ffffff;
  font-family: "GandhiSansBold";
  cursor: pointer;
`;

const ItemDeNavegacion = styled.div`
  border-radius: #ffffff;
  width: 180px;
  height: 54px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  border-color: #ffffff;
  color: #ffffff;

  cursor: pointer;
`;

const BarraDeNavegacion = () => {
  return (
    <ListaEstilizada>
      <ItemDeNavegacionHome>
        <Link to="/Home">INICIO</Link>
      </ItemDeNavegacionHome>
      <ItemDeNavegacion>
        <Link to="/Formularioa">NUEVO PRODUCTO</Link>
      </ItemDeNavegacion>
    </ListaEstilizada>
  );
};

export default BarraDeNavegacion;
