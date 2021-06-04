import { CanvasDom } from "./components/Canvas/Canvas";
import styled from "styled-components";

const StyledMainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  console.log("v1");
  return (
    <>
      <CanvasDom />
      <StyledMainWrapper>123</StyledMainWrapper>
    </>
  );
};

export default App;
