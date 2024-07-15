import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./componentes/GlobalStyles";
import Cabecera from "./componentes/Cabecera";
import banner from "../public/imagenes/assets/banner3.png";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import Titulo from "./componentes/Titulo";
import { BrowserRouter as Router } from "react-router-dom";
import FormEditar from "./componentes/Formulario";

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [articulo, actualizarArticulos] = useState([
    {
      categoria: "Anillos de Compromiso",
      imagen: "imagenes/anillo1.png",
      descripcion: "Elaborado en plata y circones suizos",
      valor: "$150.000",
    },
    {
      categoria: "Anillos de Compromiso",
      imagen: "imagenes/anillo2.png",
      descripcion: "Elaborado en oro 18k y diamante",
      valor: "$2.050.000",
    },
    {
      categoria: "Anillos de Compromiso",
      imagen: "imagenes/anillo3.png",
      descripcion: "Elaborado en oro 18k y circones suizos",
      valor: "$2.100.000",
    },
    {
      categoria: "Anillos de Compromiso",
      imagen: "imagenes/anillo4.png",
      descripcion: "Elaborado en plata y circon suizo",
      valor: "$180.000",
    },
    {
      categoria: "Argollas de Matrimonio",
      imagen: "imagenes/argollas1.png",
      descripcion: "Elaboradas en oro blanco y amarillo",
      valor: "$3.500.000",
    },
    {
      categoria: "Argollas de Matrimonio",
      imagen: "imagenes/argollas2.png",
      descripcion: "Elaboradas en oro amarillo 18k",
      valor: "$2.500.000",
    },
    {
      categoria: "Argollas de Matrimonio",
      imagen: "imagenes/argollas4.png",
      descripcion: "Elaboradas en oro amarillo 18k",
      valor: "$2.300.000",
    },
    {
      categoria: "Argollas de Matrimonio",
      imagen: "imagenes/argollas3.png",
      descripcion: "Elaboradas en plata ",
      valor: "$210.000",
    },
    {
      categoria: "Pulseras",
      imagen: "imagenes/pulseras1.png",
      descripcion: "Elaborada en cuero y plata, grabado digital",
      valor: "$120.000",
    },
    {
      categoria: "Pulseras",
      imagen: "imagenes/pulseras2.png",
      descripcion: "Tejida a mano, con placa en plata, grabada técnica a golpe",
      valor: "$60.000",
    },
    {
      categoria: "Pulseras",
      imagen: "imagenes/pulseras3.png",
      descripcion: "Tejida a mano, con placa en plata, grabado y calado manual",
      valor: "$80.000",
    },
    {
      categoria: "Pulseras",
      imagen: "imagenes/pulseras4.png",
      descripcion: "Elaborada en plata, grabado digital ",
      valor: "$280.000",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  const registrarArticulo = (categoria) => {
    console.log("Nuevo Articulo", categoria);
    actualizarCategorias([...categorias, categoria]);
  };

  // Lista de Categorias
  const categorias = [
    {
      titulo: "Anillos de Compromiso",
      colorPrimario: "#402F21",
      colorSecundario: "#A67E4E",
    },
    {
      titulo: "Argollas de Matrimonio",
      colorPrimario: "#402F21",
      colorSecundario: "#BFA169",
    },
    {
      titulo: "Pulseras",
      colorPrimario: "#402F21",
      colorSecundario: "#D9C6B0",
    },
  ];

  return (
    <Router>
      <GlobalStyles />
      {mostrarFormulario === true ? (
        <FormEditar
          categorias={categorias.map((categoria) => categoria.titulo)}
          registrarArticulo={registrarArticulo}
        />
      ) : (
        <></>
      )}
      <Cabecera cambiarMostrar={cambiarMostrar} />
      <ContenidoGaleria>
        <Banner
          texto="Diseñamos y Elaboramos las joyas de tus sueños"
          backgroundImage={banner}
        />
        <Titulo>Personalizamos tus Joyas</Titulo>
        {categorias.map((categoria) => (
          <Galeria
            datos={categoria}
            key={categoria.titulo}
            articulos={articulos.filter(
              (articulo) => articulo.categoria === categoria.titulo
            )}
          />
        ))}
      </ContenidoGaleria>
    </Router>
  );
}
export default App;
