import { create } from 'zustand';
import { FarmMachine } from '../data/farmEquipment';

export interface FarmState {
  isXRayMode: boolean;
  toggleXRay: () => void;
  setXRayMode: (val: boolean) => void;

  autoRotate: boolean;
  toggleAutoRotate: () => void;
  setAutoRotate: (val: boolean) => void;

  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;

  selectedMachine: FarmMachine | null;
  setSelectedMachine: (machine: FarmMachine | null) => void;

  resetCameraTrigger: number;
  triggerResetCamera: () => void;

  cameraTarget: [number, number, number];
  setCameraTarget: (target: [number, number, number]) => void;

  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;

  isDetailModalOpen: boolean;
  setIsDetailModalOpen: (open: boolean) => void;

  activeDepartment: string;
  setActiveDepartment: (dept: string) => void;
}

export const useFarmStore = create<FarmState>((set) => ({
  isXRayMode: false,
  toggleXRay: () => set((state) => ({ isXRayMode: !state.isXRayMode })),
  setXRayMode: (val) => set({ isXRayMode: val }),

  autoRotate: true,
  toggleAutoRotate: () => set((state) => ({ autoRotate: !state.autoRotate })),
  setAutoRotate: (val) => set({ autoRotate: val }),

  selectedCategory: null,
  setSelectedCategory: (cat) => set({ selectedCategory: cat }),

  selectedMachine: null,
  setSelectedMachine: (machine) => set({ 
    selectedMachine: machine, 
    isDetailModalOpen: !!machine 
  }),

  resetCameraTrigger: 0,
  triggerResetCamera: () => set((state) => ({ 
    resetCameraTrigger: state.resetCameraTrigger + 1,
    cameraTarget: [0, 2, 0]
  })),

  cameraTarget: [0, 2, 0],
  setCameraTarget: (target) => set({ cameraTarget: target }),

  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  isDetailModalOpen: false,
  setIsDetailModalOpen: (open) => set({ isDetailModalOpen: open }),

  activeDepartment: 'all',
  setActiveDepartment: (dept) => set({ activeDepartment: dept }),
}));
