/* eslint-disable react/no-unknown-property */
import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';
import { AccumulativeShadows, OrbitControls, RandomizedLight, Stars } from '@react-three/drei';
import MirrorPlane from './MirrorPlane';

function App() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 55,
        near: 0.1,
        far: 600,
        position: [0, 0, 5],
      }}
      gl={{
        antialias: true,
        outputEncoding: sRGBEncoding,
        toneMapping: ACESFilmicToneMapping,
      }}
    >
      {/* <AccumulativeShadows temporal frames={100} scale={10}> */}
      <RandomizedLight amount={8} position={[5, 5, -10]} />
      {/* </AccumulativeShadows> */}
      <Experience />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <ambientLight intensity={0.2} />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
