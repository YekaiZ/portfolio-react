import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { getRandomFloat, getRandomInt } from "../../utilities/Maths";
import { MeshLine, MeshLineMaterial } from "threejs-meshline";

extend({ MeshLine, MeshLineMaterial });

export const Line = ({ curve, width, color, speed }) => {
  const ref = useRef();

  useFrame(() => {
    const { dashOffset } = ref.current.uniforms;
    dashOffset.value -= speed;
  });

  return (
    <mesh>
      <meshLine attach="geometry" vertices={curve} />
      <meshLineMaterial
        ref={ref}
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={0.6}
        dashRatio={0.3}
      />
    </mesh>
  );
};

export const CurvedLines = ({ count, colors }) => {
  const ref = useRef();

  const lines = useMemo(() => {
    return new Array(count).fill().map(() => {
      const pos = new THREE.Vector3(0, 0, 0);
      let angle = getRandomFloat(0, Math.PI * 2);

      const points = new Array(250).fill().map(() => {
        let radius = 0.2;
        angle += 0.025;
        radius += 0.15;
        return pos
          .add(
            new THREE.Vector3(
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              1
            )
          )
          .clone();
      });

      const curve = new THREE.CatmullRomCurve3(points).getPoints(1000);
      const width = getRandomFloat(0.2, 0.5);
      const speed = getRandomFloat(0.001, 0.002);
      return {
        color: colors[getRandomInt(0, colors.length)],
        width,
        speed: speed / width,
        curve,
      };
    });
  }, [colors, count]);

  return (
    <group ref={ref} position={[0, 0, 0]}>
      {lines.map((props, index) => (
        <Line key={index} {...props} />
      ))}
    </group>
  );
};
