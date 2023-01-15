import { SpotLight } from '@react-three/drei';


export default function Lights() {
  return (
    <>
      <SpotLight
        intensity={10}
        color={'#ff0000'}
        angle={0.15}
        penumbra={0.2}
        castShadow
        position={[3, 2.5, 1]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-camera-far={100}
        shadow-camera-near={0.1}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <SpotLight
        intensity={10}
        color={'#00ffff'}
        angle={0.15}
        penumbra={0.2}
        castShadow
        position={[-3, 2.5, 1]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-camera-far={100}
        shadow-camera-near={0.1}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <SpotLight
        intensity={8}
        color={'#ff00ff'}
        angle={0.35}
        penumbra={0.4}
        castShadow
        position={[0, 3.5, -2]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-camera-far={100}
        shadow-camera-near={0.1}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
}
