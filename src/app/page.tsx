'use client';

import React, { useEffect } from 'react';
import { Plus, Search, Zap, Filter, Heart, Trash2, Clock, MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemoStore } from '@/store/useMemoStore';

export default function Home() {
  const router = useRouter();
  const memos = useMemoStore((state) => state.memos);
  const selectedTag = useMemoStore((state) => state.selectedTag);
  const searchQuery = useMemoStore((state) => state.searchQuery);
  const isLoading = useMemoStore((state) => state.isLoading);
  const initializeMemos = useMemoStore((state) => state.initializeMemos);
  const setSelectedTag = useMemoStore((state) => state.setSelectedTag);
  const setSearchQuery = useMemoStore((state) => state.setSearchQuery);
  const toggleFavorite = useMemoStore((state) => state.toggleFavorite);
  const deleteMemo = useMemoStore((state) => state.deleteMemo);
  const getFilteredMemos = useMemoStore((state) => state.getFilteredMemos);

  useEffect(() => {
    initializeMemos();
  }, [initializeMemos]);

  const filteredMemos = getFilteredMemos();

  const ALL_TAGS = ['全部', '工作', '生活', '创意', '学习'];

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    
    if (diff < oneDay && date.getDate() === now.getDate()) {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `今天 ${hours}:${minutes}`;
    } else if (diff < oneDay * 2) {
      return '昨天';
    } else {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}年${month}月${day}日`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部栏 */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="px-5 pt-6 pb-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">MemoFlow</h1>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Filter className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* 搜索栏 */}
          <div className="relative mb-6">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索备忘录..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-5 py-4 bg-gray-100 rounded-2xl text-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* 标签筛选 */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-6 py-3 rounded-full text-base font-medium whitespace-nowrap transition-all ${
                  selectedTag === tag
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 备忘录列表 */}
      <div className="px-5 pt-6 pb-32">
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
          <div className="text-center py-24">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">暂无备忘录</h2>
            <p className="text-gray-500 mb-8">点击下方按钮开始创建第一个备忘录</p>
            <button
              onClick={() => router.push('/memo/edit/new')}
              className="px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              创建备忘录
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMemos.map((memo) => (
              <div
                key={memo.id}
                onClick={() => router.push(`/memo/${memo.id}`)}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 flex-1 mr-4">{memo.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
                    <Clock className="w-4 h-4" />
                    <span>{formatDate(memo.updatedAt)}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-5 line-clamp-3 whitespace-pre-wrap text-base">
                  {memo.content}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 flex-wrap">
                    {memo.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {memo.tags.length > 2 && (
                      <span className="px-4 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{memo.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(memo.id);
                      }}
                      className={`p-3 rounded-xl hover:bg-gray-100 transition-colors ${
                        memo.isFavorite ? 'text-red-500' : 'text-gray-400'
                      }`}
                    >
                      <Heart className={`w-6 h-6 ${memo.isFavorite ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm('确定要删除这个备忘录吗？')) {
                          deleteMemo(memo.id);
                        }
                      }}
                      className="p-3 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-6 h-6" />
                    </button>
                    <button className="p-3 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors">
                      <MoreHorizontal className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 浮动添加按钮 */}
      <button
        onClick={() => router.push('/memo/edit/new')}
        className="fixed bottom-36 right-6 w-16 h-16 bg-blue-500 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-105 z-50"
      >
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}
