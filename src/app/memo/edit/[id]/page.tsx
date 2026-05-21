'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Check,
  Clock,
  Image,
  Calendar,
  Type,
  MoreHorizontal,
  Tag,
  Plus,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useMemoStore } from '@/store/useMemoStore';
import { generateId } from '@/lib/utils';

export default function MemoEdit() {
  const params = useParams();
  const router = useRouter();
  const getMemoById = useMemoStore((state) => state.getMemoById);
  const addMemo = useMemoStore((state) => state.addMemo);
  const updateMemo = useMemoStore((state) => state.updateMemo);
  
  const isNew = params.id === 'new';
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [newTagInput, setNewTagInput] = useState('');

  useEffect(() => {
    if (!isNew) {
      const memo = getMemoById(params.id as string);
      if (memo) {
        setTitle(memo.title);
        setContent(memo.content);
        setTags(memo.tags);
      }
    }
  }, [isNew, params.id, getMemoById]);

  const handleSave = () => {
    if (!title.trim() && !content.trim()) {
      router.back();
      return;
    }

    const memoData = {
      title: title.trim() || '无标题',
      content: content.trim(),
      tags: tags,
      isFavorite: false,
    };

    if (isNew) {
      addMemo(memoData);
    } else {
      updateMemo(params.id as string, memoData);
    }
    router.back();
  };

  const handleAddTag = () => {
    if (newTagInput.trim() && !tags.includes(newTagInput.trim())) {
      setTags([...tags, newTagInput.trim()]);
      setNewTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
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
          <button
            onClick={handleSave}
            className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
          >
            <Check className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-5 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>最后保存于 今天 {new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      <div className="p-5 pb-40">
        <Input
          type="text"
          placeholder="标题"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-2xl font-bold border-0 bg-transparent px-0 h-auto mb-2 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-300"
        />

        <div className="flex gap-2 flex-wrap mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              <Tag className="w-3.5 h-3.5" />
              {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="ml-1 hover:text-gray-900"
              >
                ×
              </button>
            </span>
          ))}
          <div className="flex items-center gap-1">
            <Input
              type="text"
              placeholder="添加标签..."
              value={newTagInput}
              onChange={(e) => setNewTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
              className="w-24 h-8 text-sm px-2 py-1 bg-gray-100 border-0 focus-visible:ring-0"
            />
            <button
              onClick={handleAddTag}
              className="p-1.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <Textarea
          placeholder="开始输入内容..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[400px] text-base border-0 bg-transparent p-0 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-300"
        />
      </div>

      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 z-50">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 text-gray-600">
            <Tag className="w-5 h-5" />
            <span className="text-xs">标签</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 text-gray-600">
            <Clock className="w-5 h-5" />
            <span className="text-xs">提醒</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 text-gray-600">
            <Image className="w-5 h-5" />
            <span className="text-xs">图片</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="text-xs">日期</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 text-gray-600">
            <Type className="w-5 h-5" />
            <span className="text-xs">格式</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 text-gray-600">
            <MoreHorizontal className="w-5 h-5" />
            <span className="text-xs">更多</span>
          </button>
        </div>
      </div>
    </div>
  );
}
