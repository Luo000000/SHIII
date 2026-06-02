'use client';

import React, { useState } from 'react';
import { Search, Bell, Image, MapPin, Heart, MessageCircle, User, TrendingUp, Users } from 'lucide-react';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('关注');

  const tabs = ['关注', '推荐', '附近'];
  const hotTopics = ['周末约骑', '新车入坑', '川藏线挑战', '骑行装备'];

  const posts = [
    {
      id: 1,
      author: { name: '骑行小明', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50' },
      content: '今天早上的骑行太爽了！空气清新，风景优美，一共骑了45公里！',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d93?w=600',
      likes: 128,
      comments: 32,
      time: '2小时前'
    },
    {
      id: 2,
      author: { name: '单车猎人', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50' },
      content: '分享一下今天的路线，全程都是柏油路，非常适合公路车骑行！',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d93?w=600',
      likes: 86,
      comments: 15,
      time: '5小时前'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold text-gray-900">社区</h1>
          </div>
          
          {/* 搜索框 */}
          <div className="bg-gray-100 rounded-xl p-3 flex items-center gap-2 mb-4">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索骑行相关内容"
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* 快捷操作 */}
          <div className="grid grid-cols-3 gap-3">
            <button className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-xl">
              <Image className="w-6 h-6 text-green-600" />
              <span className="text-sm text-gray-600">图片</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-xl">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="text-sm text-gray-600">路线</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-xl">
              <Users className="w-6 h-6 text-red-600" />
              <span className="text-sm text-gray-600">约骑</span>
            </button>
          </div>
        </div>
      </header>

      {/* 热门话题 */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">热门话题</h3>
          <span className="text-sm text-blue-600">查看全部</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {hotTopics.map((topic, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">{topic}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 标签选择 */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-8 py-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 border-b-2 text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 帖子列表 */}
      <div className="max-w-4xl mx-auto px-4 py-4 pb-32">
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* 作者信息 */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{post.author.name}</div>
                    <div className="text-xs text-gray-500">{post.time}</div>
                  </div>
                </div>
              </div>

              {/* 内容 */}
              <div className="px-4 pb-3">
                <p className="text-gray-700">{post.content}</p>
              </div>

              {/* 图片 */}
              {post.image && (
                <img
                  src={post.image}
                  alt="post"
                  className="w-full h-48 object-cover"
                />
              )}

              {/* 互动按钮 */}
              <div className="flex items-center justify-around py-3 border-t border-gray-100">
                <button className="flex items-center gap-1.5 text-gray-600 text-sm">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 text-gray-600 text-sm">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-1.5 text-gray-600 text-sm">
                  <Image className="w-5 h-5" />
                  <span>分享</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
