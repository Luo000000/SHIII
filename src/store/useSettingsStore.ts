import { create } from 'zustand';
import { mockUserSettings } from '@/lib/mockData';

export const useSettingsStore = create((set) => ({
  settings: mockUserSettings,
  
  updateSettings: (newSettings) => {
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    }));
  },
  
  toggleCloudSync: () => {
    set((state) => ({
      settings: { ...state.settings, cloudSync: !state.settings.cloudSync },
    }));
  },
  
  toggleDarkMode: () => {
    set((state) => ({
      settings: { ...state.settings, darkMode: !state.settings.darkMode },
    }));
  },
  
  toggleNotifications: () => {
    set((state) => ({
      settings: { ...state.settings, notifications: !state.settings.notifications },
    }));
  },
}));
