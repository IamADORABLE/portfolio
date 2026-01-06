import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00d9ff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingCube() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        color="#ff006e"
        wireframe={true}
        emissive="#ff006e"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function FloatingSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.25;
    meshRef.current.position.y = Math.cos(state.clock.getElapsedTime()) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#8338ec"
        wireframe={true}
        emissive="#8338ec"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

const Hero = () => {
  return (
    <section id="home" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* 3D Background */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars />
          <FloatingCube />
          <FloatingSphere />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="fade-in-up">
          <p style={{ fontSize: '1.3rem', color: '#00d9ff', marginBottom: '1rem' }}>
            Hi, I'm
          </p>
          <h1 className="glow" style={{ color: '#ff006e' }}>Mariam Oyindamola Ojikutu</h1>
          <h3 style={{ color: '#ff006e', marginBottom: '2rem' }}>
            Data Scientist | AI Developer | Problem Solver
          </h3>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', lineHeight: '1.8', marginBottom: '2rem' }}>
            Transforming data into actionable insights with Machine Learning, 
            Generative AI, and cutting-edge technologies. Building intelligent 
            solutions that make a difference.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn" style={{ borderColor: '#ff006e', color: '#ff006e' }}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
