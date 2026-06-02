'use client';

import React, { useState } from 'react';
import { Search, Bell, Image, MapPin, Zap, Heart, MessageCircle, Share2, User, Plus, TrendingUp, Activity, Map, Camera, MoreHorizontal } from 'lucide-react';
import { mockCommunityPosts } from '@/lib/mockData';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('关注');

  const tabs = ['关注', '推荐', '附近'];
  const hotTopics = ['周末约骑', '新车入坑', '川藏线挑战', '骑行装备', '附近骑行'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-white px-5 pt-12 pb-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12"></div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900">社区</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Search className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* 搜索和发布区域 */}
        <div className="bg-gray-100 rounded-2xl p-4 flex items-center gap-3 mb-6">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50"
            alt="用户头像"
            className="w-10 h-10 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="分享你的精彩骑行..."
            className="flex-1 bg-transparent text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* 快捷发布按钮 */}
        <div className="grid grid-cols-3 gap-4">
          <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <Image className="w-6 h-6 text-green-500" />
            <span className="text-sm text-gray-600">图片</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <MapPin className="w-6 h-6 text-blue-500" />
            <span className="text-sm text-gray-600">路线</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <Zap className="w-6 h-6 text-red-500" />
            <span className="text-sm text-gray-600">地点</span>
          </button>
        </div>
      </div>

      {/* 热门话题 */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-gray-900">热门话题</h3>
          <span className="text-sm text-blue-500 font-medium">全部</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {hotTopics.map((topic, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-2xl px-4 py-2 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-1">
                {index % 3 === 0 && <TrendingUp className="w-4 h-4 text-blue-500" />}
                {index % 3 === 1 && <Activity className="w-4 h-4 text-green-500" />}
                {index % 3 === 2 && <Map className="w-4 h-4 text-purple-500" />}
                <span className="text-sm font-medium text-gray-900">{topic}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 标签选择 */}
      <div className="bg-white border-b border-gray-100">
        <div className="flex items-center gap-8 px-5 py-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4" />
            <span>实时热度</span>
          </div>
        </div>
      </div>

      {/* 帖子列表 */}
      <div className="px-5 py-4 pb-32">
        <div className="space-y-4">
          {mockCommunityPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              {/* 作者信息 */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-gray-900">{post.author.name}</h4>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {post.author.role}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{post.timeAgo}</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-blue-500 text-white text-xs font-medium rounded-full hover:bg-blue-600 transition-colors">
                  {post.author.isFollowing ? '已关注' : '关注'}
                </button>
              </div>

              {/* 帖子内容 */}
              <p className="text-sm text-gray-900 leading-relaxed mb-4">{post.content}</p>

              {/* 帖子图片 */}
              {post.images && post.images.length > 0 && (
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src={post.images[0]}
                    alt="帖子图片"
                    className="w-full aspect-video object-cover"
                  />
                </div>
              )}

              {/* 骑行数据统计 */}
              {post.stats.distance > 0 && (
                <div className="flex items-center gap-4 mb-4 p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Map className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-900">{post.stats.distance.toFixed(1)} km</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-900">{post.stats.elevation} m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-500" />
                    <span className="text-sm text-gray-900">{post.stats.duration}</span>
                  </div>
                </div>
              )}

              {/* 互动按钮 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-1.5 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-600 hover:text-green-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 加载更多 */}
        <div className="mt-8 flex items-center justify-center py-4">
          <div className="flex items-center gap-2 text-gray-500">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">正在加载更多动态...</span>
          </div>
        </div>
      </div>

      {/* 浮动发布按钮 */}
      <button className="fixed bottom-32 right-6 w-16 h-16 bg-blue-500 rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 transition-all z-50">
        <Plus className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}
