'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useFarmStore } from '../../store/useFarmStore';
import { ProceduralCommercialFarm } from './ProceduralCommercialFarm';

interface GLTFResult {
  scene: THREE.Group;
}

// Inner GLTF loader component
function GLTFModelInner() {
  const { scene } = useGLTF('/farm.glb') as unknown as GLTFResult;
  const isXRayMode = useFarmStore((state) => state.isXRayMode);
  const clonedScene = React.useMemo(() => scene.clone(), [scene]);
  const originalMaterialsRef = useRef<Map<string, { opacity: number; transparent: boolean; depthWrite: boolean }>>(new Map());

  useEffect(() => {
    if (!clonedScene) return;

    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const name = mesh.name.toLowerCase();
        const isExterior = name.includes('wall') || 
                           name.includes('roof') || 
                           name.includes('exterior') || 
                           name.includes('facade') || 
                           name.includes('ceiling');

        if (isExterior && mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;

          if (!originalMaterialsRef.current.has(mesh.uuid)) {
            originalMaterialsRef.current.set(mesh.uuid, {
              opacity: mat.opacity,
              transparent: mat.transparent,
              depthWrite: mat.depthWrite,
            });
          }

          if (isXRayMode) {
            mat.transparent = true;
            mat.opacity = 0.2;
            mat.depthWrite = false;
            mat.needsUpdate = true;
          } else {
            const original = originalMaterialsRef.current.get(mesh.uuid);
            if (original) {
              mat.transparent = original.transparent;
              mat.opacity = original.opacity;
              mat.depthWrite = original.depthWrite;
              mat.needsUpdate = true;
            }
          }
        }
      }
    });
  }, [clonedScene, isXRayMode]);

  return <primitive object={clonedScene} scale={1} position={[0, 0, 0]} />;
}

// Error boundary to fall back to procedural 3D model if /farm.glb is not yet placed in /public
class GLTFErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // Gracefully catch 404 or parser errors for /farm.glb
    console.info('farm.glb not found or loading procedural farm model instead:', error.message);
  }

  render() {
    if (this.state.hasError) {
      return <ProceduralCommercialFarm />;
    }
    return this.props.children;
  }
}

export function Model() {
  const [useProcedural, setUseProcedural] = useState(true);

  // Check if /farm.glb exists on the server
  useEffect(() => {
    fetch('/farm.glb', { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setUseProcedural(false);
        } else {
          setUseProcedural(true);
        }
      })
      .catch(() => {
        setUseProcedural(true);
      });
  }, []);

  if (useProcedural) {
    return <ProceduralCommercialFarm />;
  }

  return (
    <GLTFErrorBoundary>
      <GLTFModelInner />
    </GLTFErrorBoundary>
  );
}

// Preload if available
try {
  useGLTF.preload('/farm.glb');
} catch {
  // Preload silence
}
