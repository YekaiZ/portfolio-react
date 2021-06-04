import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import {
  PerspectiveCamera,
  PointerLockControls,
  DeviceOrientationControls,
} from "@react-three/drei";

export const Camera = ({ isMobile }) => {
  const { camera } = useThree();

  useEffect(() => camera.translateZ(isMobile ? 80 : 100), [camera, isMobile]);
  window.addEventListener("wheel", () => {
    document.exitPointerLock();
  });

  return (
    <>
      <PerspectiveCamera position={[0, 0, 150]} />
      {isMobile ? (
        <DeviceOrientationControls camera={camera} />
      ) : (
        <PointerLockControls />
      )}
    </>
  );
};
