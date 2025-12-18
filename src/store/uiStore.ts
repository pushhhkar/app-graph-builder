import { create } from 'zustand';

type InspectorTab = 'config' | 'runtime';

interface UIState {
  selectedAppId: string | null;
  selectedNodeId: string | null;
  isMobilePanelOpen: boolean;
  activeInspectorTab: InspectorTab;

  setSelectedAppId: (id: string) => void;
  setSelectedNodeId: (id: string | null) => void;
  toggleMobilePanel: () => void;
  setActiveInspectorTab: (tab: InspectorTab) => void;
}

export const useUIStore = create<UIState>((set) => ({
  selectedAppId: null,
  selectedNodeId: null,
  isMobilePanelOpen: false,
  activeInspectorTab: 'config',

  setSelectedAppId: (id) => set({ selectedAppId: id }),
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  toggleMobilePanel: () =>
    set((state) => ({ isMobilePanelOpen: !state.isMobilePanelOpen })),
  setActiveInspectorTab: (tab) => set({ activeInspectorTab: tab }),
}));
