import styled from "styled-components";

const Vitrina = styled.div`
  width: 280px;
  margin-bottom: 24px;
`;
const VitrinaImg = styled.div`
  border-radius: 10px 10px 0px 0px;
  img {
    position: relative;
    border-radius: 20%;
    width: 300px;
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

const Articulo = (props) => {
  const { descripcion, imagen, valor, categoria } = props.datos;
  const { colorPrimario } = props;

  return (
    <Vitrina>
      <VitrinaImg>
        <img src={imagen} alt="Imagen anillo" />
      </VitrinaImg>
      <VitrinaInfo>
        <VitrinaDescript>{descripcion}</VitrinaDescript>
        <VitrinaValor>{valor}</VitrinaValor>
      </VitrinaInfo>
    </Vitrina>
  );
};

export default Articulo;
