import styled from "styled-components";
import Articulo from "../Articulo";

const SeccionGaleria = styled.section`
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
  text-align: center;
  font-size: 32px;
`;
const Descripcion = styled.h3`
  font-weight: 400;
  color: #401801;
  border-bottom: 4px solid;
  display: inline-block;
  padding-bottom: 8px;
`;
const ImgArticulo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  img {
    margin-bottom: 4px;
  }
`;

const Galeria = (props) => {
  //Destructuracion
  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const { articulos, eliminarArticulo } = props;

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <SeccionGaleria>
      <Descripcion style={estiloTitulo}>{titulo}</Descripcion>
      <ImgArticulo>
        {articulos.map((articulo, index) => (
          <Articulo
            datos={articulo}
            key={index}
            colorPrimario={colorPrimario}
            eliminarArticulo={eliminarArticulo}
          />
        ))}
      </ImgArticulo>
    </SeccionGaleria>
  );
};

export default Galeria;
