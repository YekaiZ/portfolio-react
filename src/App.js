import { CanvasDom } from "./components/Canvas/Canvas";
import styled from "styled-components";
import { MobileLandingPage } from "./components/LandingPage/Mobile/MobileLandingPage";
const StyledMainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  console.log("v1.1.2");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <>
      {isMobile ? <MobileLandingPage /> : <CanvasDom />}
      <StyledMainWrapper>123</StyledMainWrapper>
    </>
  );
};

export default App;
