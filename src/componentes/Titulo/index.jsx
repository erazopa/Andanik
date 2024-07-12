import styled from "styled-components";

const Titulo = styled.h2`
  font-size: 32px;
  color: #a65d03;
  text-align: ${(props) => (props.$align ? props.$align : "left")};
`;
export default Titulo;
