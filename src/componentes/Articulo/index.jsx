import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Vitrina = styled.div`
  width: 280px;
  margin-bottom: 24px;
`;
const VitrinaImg = styled.div`
  border-radius: 10px 10px 0px 0px;
  img {
    position: relative;
    border-radius: 20%;
    width: 275px;
  }
`;
const VitrinaInfo = styled.div``;
const VitrinaDescript = styled.h4`
  font-family: "GandhiSansRegular";
  font-size: 20px;
  text-align: left;
  padding-left: 10px;
`;

const VitrinaValor = styled.h5`
  font-family: "GandhiSansRegular";
  font-size: 14px;
  text-align: left;
  padding-left: 10px;
`;

const Iconos = styled.span`
  display: flex;
  justify-content: space-evenly;
`;

const Articulo = (props) => {
  const { descripcion, imagen, valor, categoria } = props.datos;
  const { colorPrimario, eliminarArticulo } = props;

  return (
    <Vitrina>
      <VitrinaImg>
        <img src={imagen} alt="Imagen anillo" />
      </VitrinaImg>
      <VitrinaInfo>
        <VitrinaDescript>{descripcion}</VitrinaDescript>
        <VitrinaValor>{valor}</VitrinaValor>
        <Iconos>
          <MdDelete onClick={eliminarArticulo} />
          <FaRegEdit />
        </Iconos>
      </VitrinaInfo>
    </Vitrina>
  );
};

export default Articulo;
