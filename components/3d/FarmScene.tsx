'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Sky, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { Model } from './Model';
import { useFarmStore } from '../../store/useFarmStore';

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/95 text-white backdrop-blur-md border border-slate-700 shadow-2xl select-none">
        <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <div className="text-center">
          <p className="text-sm font-bold tracking-wide">Loading 3D Commercial Farm...</p>
          <p className="text-xs text-slate-400 mt-0.5">Initializing Dutch Shelving & Climate Machinery</p>
        </div>
      </div>
    </Html>
  );
}

function CameraController() {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);
  const resetTrigger = useFarmStore((state) => state.resetCameraTrigger);
  const cameraTarget = useFarmStore((state) => state.cameraTarget);
  const autoRotate = useFarmStore((state) => state.autoRotate);

  // Set initial position once
  useEffect(() => {
    camera.position.set(28, 22, 34);
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 2, 0);
      controlsRef.current.update();
    }
  }, [camera]);

  // Handle reset camera
  useEffect(() => {
    if (resetTrigger > 0 && controlsRef.current) {
      camera.position.set(28, 22, 34);
      controlsRef.current.target.set(0, 2, 0);
      controlsRef.current.update();
    }
  }, [resetTrigger, camera]);

  // Handle target change when clicking room or category
  useEffect(() => {
    if (controlsRef.current && cameraTarget) {
      controlsRef.current.target.set(cameraTarget[0], cameraTarget[1], cameraTarget[2]);
      controlsRef.current.update();
    }
  }, [cameraTarget]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.06}
      autoRotate={autoRotate}
      autoRotateSpeed={0.8}
      minDistance={8}
      maxDistance={90}
      maxPolarAngle={Math.PI / 2 - 0.03}
    />
  );
}

export function FarmScene() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <Canvas
        shadows
        camera={{ position: [28, 22, 34], fov: 42, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <color attach="background" args={['#090d16']} />
        
        {/* Soft Fog for Depth */}
        <fog attach="fog" args={['#090d16', 45, 120]} />

        {/* Ambient Lighting */}
        <ambientLight intensity={0.7} />
        
        {/* Hemisphere Light for Realistic Natural Sky/Ground Fill */}
        <hemisphereLight
          color="#93c5fd"
          groundColor="#1e293b"
          intensity={0.6}
        />

        {/* Primary Sun / Directional Light with Shadows */}
        <directionalLight
          position={[35, 45, 25]}
          intensity={1.6}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={120}
          shadow-camera-left={-35}
          shadow-camera-right={35}
          shadow-camera-top={35}
          shadow-camera-bottom={-35}
          shadow-bias={-0.0001}
        />

        {/* Secondary Fill Directional Light */}
        <directionalLight position={[-30, 25, -25]} intensity={0.4} color="#60a5fa" />

        {/* Ground Contact Shadows */}
        <ContactShadows
          position={[0, -0.22, 0]}
          opacity={0.7}
          scale={50}
          blur={1.8}
          far={10}
        />

        {/* Camera Controls & Target Tracking */}
        <CameraController />

        {/* 3D Farm Model with Suspense */}
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
