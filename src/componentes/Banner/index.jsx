import { styled } from "styled-components";

const ImagenEstilizada = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  max-width: 100%;
  background-size: cover;
`;
const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0px;
  text-align: center;
`;

const Banner = ({ texto, backgroundImage }) => {
  return (
    <ImagenEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </ImagenEstilizada>
  );
};

export default Banner;
