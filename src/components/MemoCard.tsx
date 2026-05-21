'use client';

import React from 'react';
import { Heart, Trash2, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemoStore } from '@/store/useMemoStore';

export default function MemoCard({ memo }) {
  const router = useRouter();
  const toggleFavorite = useMemoStore((state) => state.toggleFavorite);
  const deleteMemo = useMemoStore((state) => state.deleteMemo);

  const handleCardClick = () => {
    router.push(`/memo/${memo.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(memo.id);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (confirm('确定要删除这个备忘录吗？')) {
      deleteMemo(memo.id);
    }
  };

  const formatDate = (date) => {
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
    <div
      onClick={handleCardClick}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{memo.title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{formatDate(memo.updatedAt)}</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3 whitespace-pre-wrap">
        {memo.content}
      </p>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {memo.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {memo.tags.length > 2 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{memo.tags.length - 2}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleFavoriteClick}
            className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
              memo.isFavorite ? 'text-red-500' : 'text-gray-400'
            }`}
          >
            <Heart className={`w-5 h-5 ${memo.isFavorite ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleDeleteClick}
            className="p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
