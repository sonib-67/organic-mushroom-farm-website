'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFarmStore } from '../../store/useFarmStore';
import { Html } from '@react-three/drei';
import { FARM_EQUIPMENT_DATA, FarmMachine } from '../../data/farmEquipment';

export function ProceduralCommercialFarm() {
  const groupRef = useRef<THREE.Group>(null);
  const isXRayMode = useFarmStore((state) => state.isXRayMode);
  const setSelectedCategory = useFarmStore((state) => state.setSelectedCategory);
  const setSelectedMachine = useFarmStore((state) => state.setSelectedMachine);
  const setCameraTarget = useFarmStore((state) => state.setCameraTarget);

  // Materials with memory to restore original properties when X-Ray is toggled off
  const originalMaterialsRef = useRef<Map<string, { opacity: number; transparent: boolean; depthWrite: boolean }>>(new Map());

  // Handle X-Ray transformation
  useEffect(() => {
    if (!groupRef.current) return;

    groupRef.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const isExterior = mesh.name.includes('exterior') || 
                           mesh.name.includes('roof') || 
                           mesh.name.includes('wall') ||
                           mesh.userData?.isExterior;

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
            mat.opacity = 0.12;
            mat.depthWrite = false;
            mat.roughness = 0.1;
            mat.metalness = 0.8;
            mat.needsUpdate = true;
          } else {
            const original = originalMaterialsRef.current.get(mesh.uuid);
            if (original) {
              mat.transparent = original.transparent;
              mat.opacity = original.opacity;
              mat.depthWrite = original.depthWrite;
              mat.roughness = 0.6;
              mat.metalness = 0.2;
              mat.needsUpdate = true;
            }
          }
        }
      }
    });
  }, [isXRayMode]);

  // Click handler for 3D room markers
  const handleRoomClick = (categorySlug: string, targetPos: [number, number, number]) => {
    setSelectedCategory(categorySlug);
    setCameraTarget(targetPos);
    
    // Find first machine in that category
    const cat = FARM_EQUIPMENT_DATA.find((c) => c.slug === categorySlug);
    if (cat && cat.machinery.length > 0) {
      setSelectedMachine(cat.machinery[0]);
    }
  };

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* ================= FLOOR / GROUND FOUNDATION ================= */}
      {/* Industrial Polished Concrete Floor */}
      <mesh receiveShadow position={[0, -0.2, 0]}>
        <boxGeometry args={[48, 0.4, 36]} />
        <meshStandardMaterial color="#2d3748" roughness={0.7} metalness={0.2} />
      </mesh>

      {/* Concrete Apron / Roadway Around Facility */}
      <mesh receiveShadow position={[0, -0.25, 0]}>
        <boxGeometry args={[56, 0.3, 44]} />
        <meshStandardMaterial color="#1a202c" roughness={0.9} />
      </mesh>

      {/* Safety Yellow Floor Aisle Markings */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.3, 30]} />
        <meshStandardMaterial color="#ecc94b" />
      </mesh>
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[0.3, 40]} />
        <meshStandardMaterial color="#ecc94b" />
      </mesh>

      {/* ================= STRUCTURAL STEEL PEB COLUMNS ================= */}
      {[-22, -11, 0, 11, 22].map((x, i) =>
        [-16, 0, 16].map((z, j) => (
          <mesh key={`col-${i}-${j}`} position={[x, 4.5, z]} castShadow receiveShadow>
            <boxGeometry args={[0.5, 9, 0.5]} />
            <meshStandardMaterial color="#4a5568" metalness={0.8} roughness={0.4} />
          </mesh>
        ))
      )}

      {/* ================= EXTERIOR ROOF (X-RAY TARGET) ================= */}
      <group name="roof_group">
        {/* Left Roof Slant */}
        <mesh
          name="roof_mesh_left"
          position={[-11, 9.5, 0]}
          rotation={[0, 0, -0.15]}
          castShadow
          userData={{ isExterior: true }}
        >
          <boxGeometry args={[23.5, 0.25, 34]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.4}
            roughness={0.3}
            transparent={false}
            opacity={1}
          />
        </mesh>
        {/* Right Roof Slant */}
        <mesh
          name="roof_mesh_right"
          position={[11, 9.5, 0]}
          rotation={[0, 0, 0.15]}
          castShadow
          userData={{ isExterior: true }}
        >
          <boxGeometry args={[23.5, 0.25, 34]} />
          <meshStandardMaterial
            color="#2563eb"
            metalness={0.4}
            roughness={0.3}
            transparent={false}
            opacity={1}
          />
        </mesh>
      </group>

      {/* ================= EXTERIOR WALLS (X-RAY TARGET) ================= */}
      <group name="walls_group">
        {/* Front Exterior Wall (Facing Viewer with Industrial Loading Bay Doors) */}
        <mesh
          name="exterior_wall_front"
          position={[0, 4, 16.8]}
          castShadow
          receiveShadow
          userData={{ isExterior: true }}
        >
          <boxGeometry args={[46, 8, 0.4]} />
          <meshStandardMaterial
            color="#e2e8f0"
            roughness={0.6}
            metalness={0.1}
            transparent={false}
            opacity={1}
          />
        </mesh>

        {/* Back Exterior Wall */}
        <mesh
          name="exterior_wall_back"
          position={[0, 4, -16.8]}
          castShadow
          receiveShadow
          userData={{ isExterior: true }}
        >
          <boxGeometry args={[46, 8, 0.4]} />
          <meshStandardMaterial
            color="#cbd5e1"
            roughness={0.6}
            metalness={0.1}
            transparent={false}
            opacity={1}
          />
        </mesh>

        {/* Left Exterior Wall */}
        <mesh
          name="exterior_wall_left"
          position={[-23, 4, 0]}
          castShadow
          receiveShadow
          userData={{ isExterior: true }}
        >
          <boxGeometry args={[0.4, 8, 33.6]} />
          <meshStandardMaterial
            color="#e2e8f0"
            roughness={0.6}
            metalness={0.1}
            transparent={false}
            opacity={1}
          />
        </mesh>

        {/* Right Exterior Wall */}
        <mesh
          name="exterior_wall_right"
          position={[23, 4, 0]}
          castShadow
          receiveShadow
          userData={{ isExterior: true }}
        >
          <boxGeometry args={[0.4, 8, 33.6]} />
          <meshStandardMaterial
            color="#cbd5e1"
            roughness={0.6}
            metalness={0.1}
            transparent={false}
            opacity={1}
          />
        </mesh>
      </group>

      {/* ================= DEPARTMENT 5 & 6: COMMERCIAL GROWING CHAMBERS ================= */}
      {/* Dutch Growing Room 1 (Left Wing Front) */}
      <group position={[-12, 0, 7]}>
        {/* Room Partition Walls */}
        <mesh position={[0, 3, 0]}>
          <boxGeometry args={[16, 6, 12]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.8} wireframe={isXRayMode} transparent={isXRayMode} opacity={isXRayMode ? 0.05 : 0.8} />
        </mesh>

        {/* Dutch 6-Tier Aluminum Shelving System (Bed 1 & Bed 2) */}
        {[-3.5, 3.5].map((bedX, bIdx) => (
          <group key={`shelf-${bIdx}`} position={[bedX, 0, 0]}>
            {/* Shelf Vertical Aluminum Uprights */}
            {[-4, -2, 0, 2, 4].map((z, uIdx) => (
              <React.Fragment key={`up-${uIdx}`}>
                <mesh position={[-0.8, 2.7, z]} castShadow>
                  <boxGeometry args={[0.08, 5.4, 0.08]} />
                  <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
                </mesh>
                <mesh position={[0.8, 2.7, z]} castShadow>
                  <boxGeometry args={[0.08, 5.4, 0.08]} />
                  <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
                </mesh>
              </React.Fragment>
            ))}

            {/* 6 Tiers of Mushroom Growing Beds with Compost & White Pinheads */}
            {[0.8, 1.6, 2.4, 3.2, 4.0, 4.8].map((tierY, tIdx) => (
              <group key={`tier-${tIdx}`} position={[0, tierY, 0]}>
                {/* Aluminum Bed Frame */}
                <mesh castShadow>
                  <boxGeometry args={[1.7, 0.1, 9]} />
                  <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
                </mesh>
                {/* Dark Compost Substrate Layer */}
                <mesh position={[0, 0.07, 0]}>
                  <boxGeometry args={[1.55, 0.08, 8.8]} />
                  <meshStandardMaterial color="#3f2712" roughness={0.95} />
                </mesh>
                {/* White Mushroom Pinhead Clusters on Beds */}
                {[-3.5, -2.0, -0.5, 1.0, 2.5, 3.8].map((mz, mIdx) => (
                  <mesh key={`mush-${mIdx}`} position={[((mIdx % 3) - 1) * 0.4, 0.16, mz]} castShadow>
                    <sphereGeometry args={[0.07, 8, 8]} />
                    <meshStandardMaterial color="#fefefe" roughness={0.4} />
                  </mesh>
                ))}
              </group>
            ))}
          </group>
        ))}

        {/* Overhead Climate Control Air Duct (AHU Supply Line) */}
        <mesh position={[0, 5.5, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 10, 16]} />
          <meshStandardMaterial color="#38bdf8" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Ultrasonic Humidifier Jet Nozzles along Duct */}
        {[-3, 0, 3].map((nz, nIdx) => (
          <mesh key={`nozzle-${nIdx}`} position={[0, 5.15, nz]}>
            <sphereGeometry args={[0.12, 12, 12]} />
            <meshStandardMaterial color="#67e8f9" emissive="#0284c7" emissiveIntensity={0.6} />
          </mesh>
        ))}

        {/* 3D Room Label Marker */}
        <Html position={[0, 6.2, 0]} center distanceFactor={25}>
          <button
            onClick={() => handleRoomClick('commercial-growing-room', [-12, 3, 7])}
            className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white text-[11px] font-bold shadow-lg backdrop-blur-md border border-white/40 transition-all hover:scale-110 cursor-pointer whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Growing Room 1 (Dutch Racks)</span>
          </button>
        </Html>
      </group>

      {/* Dutch Growing Room 2 (Left Wing Back) */}
      <group position={[-12, 0, -7]}>
        <mesh position={[0, 3, 0]}>
          <boxGeometry args={[16, 6, 12]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.8} wireframe={isXRayMode} transparent={isXRayMode} opacity={isXRayMode ? 0.05 : 0.8} />
        </mesh>

        {/* Shelving Racks */}
        {[-3.5, 3.5].map((bedX, bIdx) => (
          <group key={`shelf2-${bIdx}`} position={[bedX, 0, 0]}>
            {[0.8, 1.8, 2.8, 3.8, 4.8].map((tierY, tIdx) => (
              <mesh key={`tier2-${tIdx}`} position={[0, tierY, 0]} castShadow>
                <boxGeometry args={[1.7, 0.1, 9]} />
                <meshStandardMaterial color="#64748b" metalness={0.7} />
              </mesh>
            ))}
          </group>
        ))}

        {/* Ducting */}
        <mesh position={[0, 5.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 10, 16]} />
          <meshStandardMaterial color="#38bdf8" metalness={0.6} />
        </mesh>

        <Html position={[0, 6.2, 0]} center distanceFactor={25}>
          <button
            onClick={() => handleRoomClick('button-mushroom-specialized', [-12, 3, -7])}
            className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white text-[11px] font-bold shadow-lg backdrop-blur-md border border-white/40 transition-all hover:scale-110 cursor-pointer whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Growing Room 2 (Harvest Zone)</span>
          </button>
        </Html>
      </group>

      {/* ================= DEPARTMENT 2: SPAWN LABORATORY CLEANROOM ================= */}
      <group position={[12, 0, -8]}>
        {/* Sterile Cleanroom Partition */}
        <mesh position={[0, 2.5, 0]}>
          <boxGeometry args={[14, 5, 10]} />
          <meshStandardMaterial color="#e0f2fe" roughness={0.2} transparent opacity={isXRayMode ? 0.08 : 0.6} />
        </mesh>

        {/* Laminar Air Flow Benches (SS304 Tables) */}
        {[-3.5, 0, 3.5].map((benchX, idx) => (
          <group key={`laf-${idx}`} position={[benchX, 0, -2]}>
            {/* Table Base */}
            <mesh position={[0, 0.9, 0]} castShadow>
              <boxGeometry args={[2.2, 0.08, 1.2]} />
              <meshStandardMaterial color="#e2e8f0" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* Table Legs */}
            {[-1, 1].map((lx) =>
              [-0.5, 0.5].map((lz) => (
                <mesh key={`leg-${lx}-${lz}`} position={[lx, 0.45, lz]}>
                  <cylinderGeometry args={[0.04, 0.04, 0.9, 8]} />
                  <meshStandardMaterial color="#94a3b8" metalness={0.9} />
                </mesh>
              ))
            )}
            {/* HEPA Filter Hood on top */}
            <mesh position={[0, 1.8, -0.3]} castShadow>
              <boxGeometry args={[2.2, 1.6, 0.8]} />
              <meshStandardMaterial color="#0284c7" metalness={0.5} roughness={0.3} />
            </mesh>
            {/* UV-C Sterile Glow Light */}
            <pointLight position={[0, 1.5, 0]} intensity={2} distance={3} color="#a855f7" />
          </group>
        ))}

        {/* Vertical Autoclave Sterilizer Tank */}
        <group position={[4, 0, 2]}>
          <mesh position={[0, 1.2, 0]} castShadow>
            <cylinderGeometry args={[0.55, 0.55, 1.8, 16]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.1} />
          </mesh>
          <mesh position={[0, 2.2, 0]} castShadow>
            <sphereGeometry args={[0.55, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} />
          </mesh>
        </group>

        {/* 3D Label */}
        <Html position={[0, 5.5, 0]} center distanceFactor={25}>
          <button
            onClick={() => handleRoomClick('spawn-laboratory', [12, 3, -8])}
            className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white text-[11px] font-bold shadow-lg backdrop-blur-md border border-white/40 transition-all hover:scale-110 cursor-pointer whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-fuchsia-300 animate-pulse" />
            <span>Spawn Lab & Cleanroom (ISO-5)</span>
          </button>
        </Html>
      </group>

      {/* ================= DEPARTMENT 13: BOILER & STEAM UTILITY ROOM ================= */}
      <group position={[16, 0, 7]}>
        {/* Steam Boiler Unit */}
        <mesh position={[0, 1.6, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[1.2, 1.2, 4.5, 24]} />
          <meshStandardMaterial color="#b91c1c" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Boiler Burner / Infeed Hatch */}
        <mesh position={[-2.3, 1.2, 0]} castShadow>
          <boxGeometry args={[0.6, 1.4, 1.4]} />
          <meshStandardMaterial color="#334155" metalness={0.6} />
        </mesh>
        {/* Tall Exhaust Chimney Stack */}
        <mesh position={[1.5, 6.0, 0]} castShadow>
          <cylinderGeometry args={[0.25, 0.35, 9, 16]} />
          <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Insulated Steam Pipes Running to Growing Rooms */}
        <mesh position={[-4, 4.8, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 8, 12]} />
          <meshStandardMaterial color="#ef4444" metalness={0.7} />
        </mesh>

        {/* Water Softener FRP Cylinders */}
        {[-1.2, -0.4].map((tx, idx) => (
          <mesh key={`soft-${idx}`} position={[tx, 1.1, 2.2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 2.0, 16]} />
            <meshStandardMaterial color="#0284c7" metalness={0.4} roughness={0.2} />
          </mesh>
        ))}

        <Html position={[0, 4.5, 0]} center distanceFactor={25}>
          <button
            onClick={() => handleRoomClick('boiler-steam-system', [16, 3, 7])}
            className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/90 hover:bg-red-500 text-white text-[11px] font-bold shadow-lg backdrop-blur-md border border-white/40 transition-all hover:scale-110 cursor-pointer whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Industrial Steam Boiler & Piping</span>
          </button>
        </Html>
      </group>

      {/* ================= DEPARTMENT 7: COLD CHAIN & BLAST CHILLER ================= */}
      <group position={[6, 0, 7]}>
        {/* PUF Insulated Cold Storage Enclosure */}
        <mesh position={[0, 2.5, 0]}>
          <boxGeometry args={[6, 5, 8]} />
          <meshStandardMaterial color="#f1f5f9" roughness={0.3} wireframe={isXRayMode} transparent={isXRayMode} opacity={isXRayMode ? 0.08 : 0.85} />
        </mesh>

        {/* Bitzer / Copeland Refrigeration Condenser Units on Roof */}
        {[-1.5, 1.5].map((cx, idx) => (
          <group key={`cond-${idx}`} position={[cx, 5.3, 0]}>
            <mesh castShadow>
              <boxGeometry args={[1.4, 0.8, 1.2]} />
              <meshStandardMaterial color="#0f172a" metalness={0.8} />
            </mesh>
            {/* Fan Grille */}
            <mesh position={[0, 0.42, 0]}>
              <cylinderGeometry args={[0.4, 0.4, 0.05, 16]} />
              <meshStandardMaterial color="#38bdf8" />
            </mesh>
          </group>
        ))}

        {/* Internal Harvest Crates Stacked inside Cold Room */}
        {[-1, 0, 1].map((sx, i) =>
          [-1.5, 0, 1.5].map((sz, j) => (
            <mesh key={`crate-${i}-${j}`} position={[sx * 1.5, 0.8, sz]} castShadow>
              <boxGeometry args={[0.9, 1.4, 0.7]} />
              <meshStandardMaterial color="#10b981" roughness={0.6} />
            </mesh>
          ))
        )}

        <Html position={[0, 4.5, 0]} center distanceFactor={25}>
          <button
            onClick={() => handleRoomClick('cold-chain', [6, 3, 7])}
            className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-600/90 hover:bg-teal-500 text-white text-[11px] font-bold shadow-lg backdrop-blur-md border border-white/40 transition-all hover:scale-110 cursor-pointer whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-teal-200 animate-pulse" />
            <span>Blast Pre-Chiller & Cold Vault</span>
          </button>
        </Html>
      </group>

      {/* ================= DEPARTMENT 8 & 9: PACKAGING & PROCESSING LINE ================= */}
      <group position={[0, 0, -7]}>
        {/* Conveyor Belt System */}
        <mesh position={[0, 0.8, 0]} castShadow>
          <boxGeometry args={[10, 0.15, 1.0]} />
          <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.4} />
        </mesh>
        {/* Conveyor Support Legs */}
        {[-4, -2, 0, 2, 4].map((cx, idx) => (
          <mesh key={`cleg-${idx}`} position={[cx, 0.4, 0]}>
            <boxGeometry args={[0.1, 0.8, 0.9]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.8} />
          </mesh>
        ))}

        {/* Automatic Cling Film Tray Wrapping Machine */}
        <group position={[-2, 0, 0]}>
          <mesh position={[0, 1.3, 0]} castShadow>
            <boxGeometry args={[1.6, 1.2, 1.4]} />
            <meshStandardMaterial color="#e2e8f0" metalness={0.85} roughness={0.2} />
          </mesh>
          {/* Touchscreen HMI on Swing Arm */}
          <mesh position={[0.7, 1.9, 0.5]}>
            <boxGeometry args={[0.3, 0.4, 0.05]} />
            <meshStandardMaterial color="#0284c7" emissive="#0284c7" emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Dynamic Checkweigher & Rejector */}
        <mesh position={[1.5, 1.1, 0]} castShadow>
          <boxGeometry args={[1.0, 0.5, 1.1]} />
          <meshStandardMaterial color="#f8fafc" metalness={0.9} />
        </mesh>

        {/* Commercial Heat Pump Dehydrator Drying Room */}
        <group position={[4, 0, 2]}>
          <mesh position={[0, 1.8, 0]} castShadow>
            <boxGeometry args={[2.5, 3.2, 2.2]} />
            <meshStandardMaterial color="#f97316" metalness={0.3} roughness={0.5} />
          </mesh>
        </group>

        <Html position={[0, 3.2, 0]} center distanceFactor={25}>
          <button
            onClick={() => handleRoomClick('mushroom-packaging', [0, 2, -7])}
            className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-600/90 hover:bg-amber-500 text-white text-[11px] font-bold shadow-lg backdrop-blur-md border border-white/40 transition-all hover:scale-110 cursor-pointer whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-300" />
            <span>Packaging & Processing Line</span>
          </button>
        </Html>
      </group>

      {/* ================= DEPARTMENT 1: COMPOST YARD & BUNKER SYSTEMS ================= */}
      <group position={[-16, 0, 18]}>
        {/* Open Aerated Compost Bunker Slab */}
        <mesh position={[0, 0.2, 0]} receiveShadow>
          <boxGeometry args={[12, 0.4, 8]} />
          <meshStandardMaterial color="#78350f" roughness={0.9} />
        </mesh>
        {/* Concrete Bunker Retaining Walls */}
        <mesh position={[-6, 1.2, 0]} castShadow>
          <boxGeometry args={[0.5, 2.0, 8]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
        <mesh position={[6, 1.2, 0]} castShadow>
          <boxGeometry args={[0.5, 2.0, 8]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>

        {/* Heavy Compost Turner Machine Simulation */}
        <group position={[0, 1.2, 0]}>
          <mesh castShadow>
            <boxGeometry args={[3.2, 1.8, 2.4]} />
            <meshStandardMaterial color="#eab308" metalness={0.6} roughness={0.4} />
          </mesh>
          {/* Rotary Turner Flail Drum */}
          <mesh position={[0, -0.4, 1.4]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.6, 0.6, 3.0, 16]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} />
          </mesh>
        </group>

        <Html position={[0, 3.5, 0]} center distanceFactor={25}>
          <button
            onClick={() => handleRoomClick('compost-preparation', [-16, 2, 18])}
            className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-700/90 hover:bg-yellow-600 text-white text-[11px] font-bold shadow-lg backdrop-blur-md border border-white/40 transition-all hover:scale-110 cursor-pointer whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Compost Yard & Aerated Bunker</span>
          </button>
        </Html>
      </group>

      {/* ================= DEPARTMENT 10: CENTRAL SCADA & IOT RACK ================= */}
      <group position={[0, 0, 0]}>
        {/* SCADA Automation Control Cabinet */}
        <mesh position={[0, 1.5, 0]} castShadow>
          <boxGeometry args={[1.8, 2.8, 0.6]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* 15-inch Touchscreen Color Display */}
        <mesh position={[0, 2.0, 0.31]}>
          <planeGeometry args={[1.2, 0.8]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.6} />
        </mesh>
        {/* Status Indicating Stack Light (Green / Amber / Red) */}
        <group position={[0.7, 3.2, 0]}>
          <mesh position={[0, 0.15, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.1, 12]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.8} />
          </mesh>
          <mesh position={[0, 0.05, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.1, 12]} />
            <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.8} />
          </mesh>
          <mesh position={[0, -0.05, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.1, 12]} />
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1.0} />
          </mesh>
        </group>
      </group>

      {/* ================= DEPARTMENT 11: ELECTRIC FORKLIFT & PALLETS ================= */}
      <group position={[8, 0, 0]} rotation={[0, -Math.PI / 4, 0]}>
        {/* Forklift Body */}
        <mesh position={[0, 0.9, 0]} castShadow>
          <boxGeometry args={[1.4, 1.4, 2.2]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.5} roughness={0.3} />
        </mesh>
        {/* Mast & Forks */}
        <mesh position={[0, 1.4, 1.2]} castShadow>
          <boxGeometry args={[0.8, 2.6, 0.1]} />
          <meshStandardMaterial color="#334155" metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.15, 1.7]} castShadow>
          <boxGeometry args={[0.7, 0.06, 1.0]} />
          <meshStandardMaterial color="#334155" metalness={0.9} />
        </mesh>
        {/* Wheels */}
        {[-0.6, 0.6].map((wx, i) =>
          [-0.7, 0.7].map((wz, j) => (
            <mesh key={`wheel-${i}-${j}`} position={[wx, 0.25, wz]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.25, 0.25, 0.2, 16]} />
              <meshStandardMaterial color="#0f172a" roughness={0.9} />
            </mesh>
          ))
        )}
      </group>
    </group>
  );
}
