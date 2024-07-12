import styled from "styled-components";

const BotonCrear = styled.button`
  border-radius: 10px;
  font-weight: 700;
  font-family: "GandhiSansBold";
  padding: 24px 32px;
  border: none;
  color: #000000;
  margin: 32px 15px;
  cursor: pointer;
  border-color: #ffffff;
  background-color: #ffffff;
`;

const Boton = (props) => {
  return <BotonCrear>{props.children}</BotonCrear>;
};

export default Boton;
