/* eslint-disable react/no-unknown-property */
export default function Cube() {
  return (
    <>
      <group rotation={[Math.PI * -0.25, 0, Math.PI * -0.25]}>
        <mesh castShadow receiveShadow position={[0, 1, 0]}>
          <boxGeometry args={[1, 0.4, 1]} />
          <meshPhysicalMaterial color="limegreen" />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 1.5, 0]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshPhysicalMaterial color="blue" />
        </mesh>
        <mesh castShadow receiveShadow position={[-1, 0, 0]}>
          <boxGeometry args={[0.4, 1, 1]} />
          <meshPhysicalMaterial color="limegreen" />
        </mesh>
        <mesh castShadow receiveShadow position={[-1.5, 0, 0]}>
          <boxGeometry args={[-0.1, 1, 1]} />
          <meshPhysicalMaterial color="blue" />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial color="#197bbd" />
        </mesh>
        <mesh castShadow receiveShadow position={[-1, 1, 0]}>
          <boxGeometry args={[0.4, 0.4, 1]} />
          <meshPhongMaterial metalness={0.8} roughness={0.3} color="limegreen" />
        </mesh>
        <mesh castShadow receiveShadow position={[-1.5, 1, 0]}>
          <boxGeometry args={[0.1, 0.4, 1]} />
          <meshPhysicalMaterial color="blue" />
        </mesh>
        <mesh castShadow receiveShadow position={[-1, 1.5, 0]}>
          <boxGeometry args={[0.4, 0.1, 1]} />
          <meshPhysicalMaterial color="blue" />
        </mesh>
        <mesh castShadow receiveShadow position={[-1.5, 1.5, 0]}>
          <boxGeometry args={[0.1, 0.1, 1]} />
          <meshPhysicalMaterial color="blue" />
        </mesh>
      </group>
    </>
  );
}
