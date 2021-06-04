import { Canvas } from "@react-three/fiber";
import { Effects } from "./Effects";
import { CurvedLines } from "./Lines";
import { Html } from "@react-three/drei";
import { Camera } from "./Camera";
// import { colors } from "../../constants/colors";
import { CanvasText } from "../Common/CanvasText/CanvasText";
import niceColors from "nice-color-palettes";
const colors = new Array(100)
  .fill()
  .map((_, idx) => niceColors[idx][Math.floor(Math.random() * 5)]);

export const CanvasDom = () => {
  let count = 69;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Canvas
      linear
      gl={{
        antialias: true,
        pixelRatio: window.devicePixelRatio
          ? Math.min(2, window.devicePixelRatio)
          : 1,
      }}
      pixelRatio={window.devicePixelRatio}
      onCreated={({ gl }) => {
        gl.setClearColor("#000125");
      }}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Html position={[-50, 0, 0]}>
        {/* todo doesnt apply to mobile since its motion camera, change content */}
        <CanvasText size={40}>Click anywhere to control the camera.</CanvasText>
        <CanvasText size={40}>Press Esc key or scroll down to exit.</CanvasText>
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
