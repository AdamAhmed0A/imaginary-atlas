import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';
import { ParticleField } from './ParticleField';

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
        
        <ParticleField />
        
        <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
          <FloatingGeometry 
            position={[-3, 2, -2]} 
            type="sphere" 
            color="#8B5CF6" 
            scale={0.8}
          />
        </Float>
        
        <Float speed={2} rotationIntensity={1.5} floatIntensity={0.8}>
          <FloatingGeometry 
            position={[3, -1, -3]} 
            type="torus" 
            color="#06B6D4" 
            scale={1.2}
          />
        </Float>
        
        <Float speed={1} rotationIntensity={0.8} floatIntensity={0.6}>
          <FloatingGeometry 
            position={[0, 3, -4]} 
            type="octahedron" 
            color="#EC4899" 
            scale={1}
          />
        </Float>
        
        <Float speed={1.8} rotationIntensity={1.2} floatIntensity={0.7}>
          <FloatingGeometry 
            position={[-2, -2, -1]} 
            type="box" 
            color="#F59E0B" 
            scale={0.9}
          />
        </Float>
        
        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};