'use client';

import React from 'react';
import { useMemoStore } from '@/store/useMemoStore';

const ALL_TAGS = ['全部', '工作', '生活', '创意', '学习'];

export default function TagFilter() {
  const selectedTag = useMemoStore((state) => state.selectedTag);
  const setSelectedTag = useMemoStore((state) => state.setSelectedTag);

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {ALL_TAGS.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(tag)}
          className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            selectedTag === tag
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
