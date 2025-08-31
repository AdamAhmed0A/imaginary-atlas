import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  type: 'sphere' | 'box' | 'torus' | 'octahedron';
  color: string;
  scale?: number;
}

export const FloatingGeometry = ({ position, type, color, scale = 1 }: FloatingGeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
  });

  const geometry = {
    sphere: <sphereGeometry args={[0.5 * scale, 32, 32]} />,
    box: <boxGeometry args={[0.8 * scale, 0.8 * scale, 0.8 * scale]} />,
    torus: <torusGeometry args={[0.4 * scale, 0.2 * scale, 16, 100]} />,
    octahedron: <octahedronGeometry args={[0.6 * scale]} />
  };

  return (
    <mesh ref={meshRef} position={position}>
      {geometry[type]}
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};