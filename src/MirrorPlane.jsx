/* eslint-disable react/no-unknown-property */
import { Clone, MeshReflectorMaterial } from '@react-three/drei';
import { DoubleSide, InstancedMesh } from 'three';
import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function CloneMirrorPlane() {
  const mirrorRef = useRef();

  return (
    <mesh
      ref={mirrorRef}
      position={[(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3]}
      rotation={[
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
      ]}
    >
      <instancedMesh />
      <planeGeometry args={[1, 1]} />
      <MeshReflectorMaterial
        mirror={0.95}
        mixBlur={0.5}
        mixStrength={0.5}
        color="#197bbd"
        metalness={1}
        side={DoubleSide}
      />
    </mesh>
  );
}

export default function MirrorPlane() {
  return (
    <Clone object={CloneMirrorPlane} />
  );
}
