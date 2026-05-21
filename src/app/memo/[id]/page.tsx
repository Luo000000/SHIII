'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Share2,
  Edit3,
  Heart,
  MoreHorizontal,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { formatDateFull } from '@/lib/utils';
import { useMemoStore } from '@/store/useMemoStore';
import { Button } from '@/components/ui/button';

export default function MemoDetail() {
  const params = useParams();
  const router = useRouter();
  const getMemoById = useMemoStore((state) => state.getMemoById);
  const toggleFavorite = useMemoStore((state) => state.toggleFavorite);
  const deleteMemo = useMemoStore((state) => state.deleteMemo);
  
  const memo = getMemoById(params.id as string);

  if (!memo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-900 mb-2">备忘录不存在</h2>
          <Button onClick={() => router.push('/')}>返回首页</Button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (confirm('确定要删除这个备忘录吗？')) {
      deleteMemo(memo.id);
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between px-5 py-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => router.push(`/memo/edit/${memo.id}`)}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Edit3 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
            {memo.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>修改于 {formatDateFull(memo.updatedAt)}</span>
            </div>
            {memo.reminderDate && (
              <div className="flex items-center gap-1 text-orange-600">
                <AlertCircle className="w-4 h-4" />
                <span>提醒: {formatDateFull(memo.reminderDate)}</span>
              </div>
            )}
          </div>

          <div className="flex gap-2 flex-wrap mb-6">
            {memo.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {memo.content}
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mb-8">
          创建于 {formatDateFull(memo.createdAt)}
        </div>

        <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFavorite(memo.id)}
              className={`p-3 rounded-xl hover:bg-gray-50 transition-colors ${
                memo.isFavorite ? 'text-red-500 bg-red-50' : 'text-gray-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${memo.isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button className="p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-500">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={handleDelete}
            className="px-6 py-3 bg-red-50 text-red-500 rounded-xl font-medium hover:bg-red-100 transition-colors"
          >
            删除备忘录
          </button>
        </div>
      </div>
    </div>
  );
}
