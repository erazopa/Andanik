import Banner from "../../componentes/Banner";
import banner from "../../assets/banner.png";
import Titulo from "../../componentes/Titulo";
import Galeria from "../../componentes/Galeria";

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Home = () => {
  return (
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
  );
};

export default Home;
