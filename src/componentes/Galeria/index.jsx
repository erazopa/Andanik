import styled from "styled-components";

const SeccionGaleria = styled.section`
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
  text-align: center;
  font-size: 32px;
`;
const Articulo = styled.h3`
  font-weight: 400;
  color: #401801;
  border-bottom: 4px solid #d9984a;
  display: inline-block;
  padding-bottom: 8px;
`;

const Galeria = (props) => {
  return (
    <SeccionGaleria>
      <Articulo>{props.categorias}</Articulo>
    </SeccionGaleria>
  );
};

export default Galeria;
