// components/Globe.jsx
import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshWobbleMaterial } from '@react-three/drei';

const Globe = () => {
  const globeRef = useRef();
  const pointsRef = useRef();
  const linesRef = useRef();
  
  // Market data for 46 markets
  const markets = useMemo(() => [
    // Americas
    { lat: 37.09, lng: -95.71, size: 1.2, color: '#3b82f6', name: 'USA' },
    { lat: 56.13, lng: -106.35, size: 0.8, color: '#60a5fa', name: 'Canada' },
    { lat: 23.63, lng: -102.55, size: 0.7, color: '#60a5fa', name: 'Mexico' },
    { lat: -38.42, lng: -63.62, size: 0.6, color: '#93c5fd', name: 'Argentina' },
    { lat: -14.24, lng: -51.93, size: 0.9, color: '#3b82f6', name: 'Brazil' },
    { lat: 4.57, lng: -74.30, size: 0.5, color: '#93c5fd', name: 'Colombia' },
    { lat: -35.68, lng: -71.54, size: 0.5, color: '#93c5fd', name: 'Chile' },
    
    // APAC
    { lat: -25.27, lng: 133.78, size: 0.8, color: '#8b5cf6', name: 'Australia' },
    { lat: 35.86, lng: 104.20, size: 1.5, color: '#3b82f6', name: 'China' },
    { lat: 22.32, lng: 114.17, size: 0.4, color: '#a78bfa', name: 'Hong Kong' },
    { lat: 20.59, lng: 78.96, size: 1.3, color: '#8b5cf6', name: 'India' },
    { lat: -0.79, lng: 113.92, size: 0.7, color: '#a78bfa', name: 'Indonesia' },
    { lat: 36.20, lng: 138.25, size: 1.0, color: '#8b5cf6', name: 'Japan' },
    { lat: 4.21, lng: 101.98, size: 0.5, color: '#a78bfa', name: 'Malaysia' },
    { lat: -40.90, lng: 174.89, size: 0.4, color: '#a78bfa', name: 'New Zealand' },
    { lat: 12.88, lng: 121.77, size: 0.6, color: '#a78bfa', name: 'Philippines' },
    { lat: 35.91, lng: 127.77, size: 0.6, color: '#a78bfa', name: 'South Korea' },
    { lat: 1.35, lng: 103.82, size: 0.3, color: '#a78bfa', name: 'Singapore' },
    { lat: 23.70, lng: 120.96, size: 0.4, color: '#a78bfa', name: 'Taiwan' },
    { lat: 15.87, lng: 100.99, size: 0.6, color: '#a78bfa', name: 'Thailand' },
    { lat: 14.06, lng: 108.28, size: 0.6, color: '#a78bfa', name: 'Vietnam' },
    
    // EMEA - 28 markets (adding key ones)
    { lat: 47.52, lng: 14.55, size: 0.4, color: '#10b981', name: 'Austria' },
    { lat: 50.85, lng: 4.35, size: 0.4, color: '#10b981', name: 'Belgium' },
    { lat: 51.51, lng: -0.13, size: 0.9, color: '#3b82f6', name: 'UK' },
    { lat: 48.86, lng: 2.35, size: 0.9, color: '#8b5cf6', name: 'France' },
    { lat: 51.17, lng: 10.45, size: 1.1, color: '#3b82f6', name: 'Germany' },
    { lat: 41.90, lng: 12.48, size: 0.8, color: '#8b5cf6', name: 'Italy' },
    { lat: 52.13, lng: 5.29, size: 0.5, color: '#10b981', name: 'Netherlands' },
    { lat: 60.47, lng: 8.47, size: 0.4, color: '#10b981', name: 'Norway' },
    { lat: 51.92, lng: 19.15, size: 0.6, color: '#10b981', name: 'Poland' },
    { lat: 39.40, lng: -8.22, size: 0.4, color: '#10b981', name: 'Portugal' },
    { lat: 61.52, lng: 105.32, size: 0.8, color: '#10b981', name: 'Russia' },
    { lat: 40.46, lng: -3.75, size: 0.7, color: '#8b5cf6', name: 'Spain' },
    { lat: 60.13, lng: 18.64, size: 0.4, color: '#10b981', name: 'Sweden' },
    { lat: 46.82, lng: 8.23, size: 0.4, color: '#10b981', name: 'Switzerland' },
    { lat: 38.96, lng: 35.24, size: 0.6, color: '#10b981', name: 'Turkey' },
    { lat: 23.42, lng: 53.85, size: 0.4, color: '#10b981', name: 'UAE' },
  ], []);

  // Convert lat/lng to 3D coordinates
  const latLngToVector3 = (lat, lng, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  };

  // Create particle system
  const particles = useMemo(() => {
    const positions = [];
    const colors = [];
    const sizes = [];
    
    markets.forEach(market => {
      const pos = latLngToVector3(market.lat, market.lng, 5);
      positions.push(pos.x, pos.y, pos.z);
      
      const color = new THREE.Color(market.color);
      colors.push(color.r, color.g, color.b);
      
      sizes.push(market.size);
    });
    
    return { positions: new Float32Array(positions), colors: new Float32Array(colors), sizes: new Float32Array(sizes) };
  }, [markets]);

  // Create connection lines
  const connections = useMemo(() => {
    const lines = [];
    const positions = [];
    
    // Create connections between major markets
    const majorMarkets = markets.filter(m => m.size > 0.8);
    for (let i = 0; i < majorMarkets.length; i++) {
      for (let j = i + 1; j < majorMarkets.length; j++) {
        const start = latLngToVector3(majorMarkets[i].lat, majorMarkets[i].lng, 5);
        const end = latLngToVector3(majorMarkets[j].lat, majorMarkets[j].lng, 5);
        
        // Only connect if relatively close
        if (start.distanceTo(end) < 8) {
          positions.push(start.x, start.y, start.z);
          positions.push(end.x, end.y, end.z);
          lines.push({ start, end });
        }
      }
    }
    
    return { positions: new Float32Array(positions), lines };
  }, [markets]);

  // Animation frame updates
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
      globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
    }
    
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group>
      {/* Main Globe */}
      <mesh ref={globeRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[5, 2]} />
        <MeshWobbleMaterial
          color="#1e40af"
          emissive="#1e3a8a"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
          factor={0.2}
          speed={0.5}
        />
        
        {/* Wireframe overlay */}
        <lineSegments>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(5.02, 1)]} />
          <lineBasicMaterial color="#3b82f6" transparent opacity={0.3} />
        </lineSegments>
      </mesh>

      {/* Market Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={particles.sizes.length}
            array={particles.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.3}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.positions.length / 3}
            array={connections.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.2}
          linewidth={1}
        />
      </lineSegments>

      {/* Pulsing Rings for Major Markets */}
      {markets.filter(m => m.size > 1).map((market, i) => {
        const pos = latLngToVector3(market.lat, market.lng, 5.1);
        return (
          <mesh key={`ring-${i}`} position={[pos.x, pos.y, pos.z]}>
            <ringGeometry args={[0.5, 0.7, 32]} />
            <meshBasicMaterial
              color={market.color}
              transparent
              opacity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}

      {/* Data Flow Particles */}
      <DataFlowParticles markets={markets} />
    </group>
  );
};

// Animated data flow particles component
const DataFlowParticles = ({ markets }) => {
  const particlesRef = useRef();
  const particleCount = 100;
  
  const particles = useMemo(() => {
    const positions = [];
    const velocities = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 2;
      positions.push(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2,
        Math.sin(angle) * radius
      );
      
      velocities.push(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
    }
    
    return { positions: new Float32Array(positions), velocities: new Float32Array(velocities) };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        // Move towards nearest market
        let targetPos = new THREE.Vector3(0, 0, 0);
        if (i % markets.length === 0) {
          const market = markets[i % markets.length];
          targetPos = latLngToVector3(market.lat, market.lng, 5.2);
        }
        
        const currentPos = new THREE.Vector3(positions[idx], positions[idx + 1], positions[idx + 2]);
        const direction = new THREE.Vector3().subVectors(targetPos, currentPos).normalize().multiplyScalar(0.01);
        
        positions[idx] += direction.x + (Math.sin(state.clock.elapsedTime + i) * 0.001);
        positions[idx + 1] += direction.y + (Math.cos(state.clock.elapsedTime + i) * 0.001);
        positions[idx + 2] += direction.z + (Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.001);
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Globe;