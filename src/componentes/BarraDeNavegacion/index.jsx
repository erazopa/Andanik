import styled from "styled-components";

const ListaEstilizada = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 15px;
  font-family: "GandhiSansBold";
`;
const ItemDeNavegacionHome = styled.button`
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
  cursor: pointer;
`;
// const HomeImg = styled.img`
//   width: 31px;
//   padding-right: 10px;
// `;

const ItemDeNavegacion = styled.button`
  border-radius: #ffffff;
  width: 180px;
  height: 54px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(175deg, #a65d03 4.16%, #733702 48%);
  border-color: #ffffff;
  color: #ffffff;
  cursor: pointer;
`;

const BarraDeNavegacion = () => {
  return (
    <nav>
      <ListaEstilizada>
        <ItemDeNavegacionHome>INICIO</ItemDeNavegacionHome>
        <ItemDeNavegacion>NUEVO PRODUCTO</ItemDeNavegacion>
      </ListaEstilizada>
    </nav>
  );
};

export default BarraDeNavegacion;
