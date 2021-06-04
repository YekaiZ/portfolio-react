import styled from "styled-components";
import { MobileMotinConsent } from "../MobileMotionConsent/MobileMotinConsent";
import { CanvasDom } from "../../Canvas/Canvas";
import { useState } from "react";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const MobileLandingPage = () => {
  const [access, setAccess] = useState(false);

  const handleOnClick = () => {
    if (DeviceOrientationEvent) {
      DeviceOrientationEvent.requestPermission()
        .then(() => setAccess(true))
        .catch((error) => {});
    }
  };

  return (
    <StyledWrapper>
      {access ? (
        <CanvasDom />
      ) : (
        <>
          {/* todo add actuall mobile landing page with no motion consent */}
          <h1>This is a placeholder for mobile page</h1>
          <MobileMotinConsent handleClick={handleOnClick} />
        </>
      )}
    </StyledWrapper>
  );
};
