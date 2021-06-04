import { Canvas } from "@react-three/fiber";
import { Effects } from "./Effects";
import { CurvedLines } from "./Lines";
import { Html } from "@react-three/drei";
import { Camera } from "./Camera";
import { colors } from "../../constants/colors";
import { CanvasText } from "../Common/CanvasText/CanvasText";

export const CanvasDom = () => {
  let count = 69;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Canvas
      linear
      gl={{ antialias: true }}
      onCreated={({ gl }) => gl.setClearColor("#000125")}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Html position={[-50, 0, 0]}>
        <CanvasText size={40}>Click anywhere to control the camera.</CanvasText>
        <CanvasText size={40}>Press Esc key or scroll down to exit.</CanvasText>
      </Html>

      <Html position={[-200, -200, 0]}>
        <button
          onClick={() => {
            if (DeviceOrientationEvent) {
              DeviceOrientationEvent.requestPermission();
            }
          }}
        >
          <CanvasText>12312311231231231223</CanvasText>
        </button>
      </Html>

      <Html position={[7, 1, 120]}>
        <CanvasText>Hi, Yekai here!</CanvasText>
      </Html>

      <CurvedLines count={count} colors={colors} />
      <Camera isMobile={isMobile} />
      <Effects />
    </Canvas>
  );
};
