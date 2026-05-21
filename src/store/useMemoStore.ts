import { create } from 'zustand';
import { mockMemos } from '@/lib/mockData';
import { generateId } from '@/lib/utils';

export const useMemoStore = create((set, get) => ({
  memos: [],
  selectedTag: '全部',
  searchQuery: '',
  isLoading: true,

  initializeMemos: () => {
    setTimeout(() => {
      set({ memos: mockMemos, isLoading: false });
    }, 500);
  },

  addMemo: (memoData) => {
    const newMemo = {
      ...memoData,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ memos: [newMemo, ...state.memos] }));
  },

  updateMemo: (id, memoData) => {
    set((state) => ({
      memos: state.memos.map((memo) =>
        memo.id === id ? { ...memo, ...memoData, updatedAt: new Date() } : memo
      ),
    }));
  },

  deleteMemo: (id) => {
    set((state) => ({
      memos: state.memos.filter((memo) => memo.id !== id),
    }));
  },

  toggleFavorite: (id) => {
    set((state) => ({
      memos: state.memos.map((memo) =>
        memo.id === id ? { ...memo, isFavorite: !memo.isFavorite } : memo
      ),
    }));
  },

  setSelectedTag: (tag) => {
    set({ selectedTag: tag });
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },

  getMemoById: (id) => {
    return get().memos.find((memo) => memo.id === id);
  },

  getFilteredMemos: () => {
    const { memos, selectedTag, searchQuery } = get();
    return memos.filter((memo) => {
      let matchesTag = selectedTag === '全部' || memo.tags.includes(selectedTag);
      let matchesSearch = searchQuery === '' ||
        memo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        memo.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  },
}));
