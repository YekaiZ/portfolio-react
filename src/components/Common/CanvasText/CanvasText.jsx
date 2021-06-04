import styled from "styled-components";

const Text = styled.div`
  -webkit-text-stroke: 1px black;
  color: white;
  font-weight: bold;
  color: white;
  font-size: ${({ size }) => size + "px"};
  width: max-content;
  text-align: center;
`;

export const CanvasText = ({ size = 100, children }) => {
  return <Text size={size}>{children}</Text>;
};
