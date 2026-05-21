'use client';

import React, { useEffect } from 'react';
import { Plus, Search, Zap, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemoStore } from '@/store/useMemoStore';
import MemoCard from '@/components/MemoCard';
import TagFilter from '@/components/TagFilter';
import { Input } from '@/components/ui/input';

export default function Home() {
  const router = useRouter();
  const memos = useMemoStore((state) => state.memos);
  const searchQuery = useMemoStore((state) => state.searchQuery);
  const isLoading = useMemoStore((state) => state.isLoading);
  const initializeMemos = useMemoStore((state) => state.initializeMemos);
  const setSearchQuery = useMemoStore((state) => state.setSearchQuery);
  const getFilteredMemos = useMemoStore((state) => state.getFilteredMemos);

  useEffect(() => {
    initializeMemos();
  }, [initializeMemos]);

  const filteredMemos = getFilteredMemos();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-5 pt-10 pb-6 bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">MemoFlow</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="搜索备忘录..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 h-12 bg-gray-100 border-0 text-base"
          />
        </div>

        <TagFilter />
      </div>

      <div className="p-5">
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 animate-pulse"
              >
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredMemos.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mb-2">
              暂无备忘录
            </h2>
            <p className="text-gray-500 mb-6">
              点击下方按钮开始创建第一个备忘录
            </p>
            <button
              onClick={() => router.push('/memo/edit/new')}
              className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
            >
              创建备忘录
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMemos.map((memo) => (
              <MemoCard key={memo.id} memo={memo} />
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => router.push('/memo/edit/new')}
        className="fixed bottom-28 right-5 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-105 z-50"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
