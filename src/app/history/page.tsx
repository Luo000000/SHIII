'use client';

import React, { useState } from 'react';
import { Filter, MapPin, Clock, Zap, Calendar, ChevronRight, TrendingUp, TrendingDown, Award } from 'lucide-react';
import { mockRideRecords } from '@/lib/mockData';

export default function RideHistoryPage() {
  const [activeTab, setActiveTab] = useState('最近骑行');

  const tabs = ['最近骑行', '最长距离', '最高速度'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-white px-5 pt-12 pb-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12"></div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900">骑行历史</h1>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Filter className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* 标签选择 */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 骑行记录列表 */}
      <div className="px-5 pt-6 pb-32 max-w-4xl mx-auto">
        <div className="space-y-4">
          {mockRideRecords.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
            >
              {/* 记录图片 */}
              <div className="relative">
                <img
                  src={record.image}
                  alt={record.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  {record.locationType}
                </div>
              </div>

              {/* 记录信息 */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <h3 className="text-lg font-semibold text-gray-900">{record.title}</h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    {record.date.toLocaleDateString('zh-CN', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                </div>

                {/* 数据卡片 */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-500">距离</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">{record.distance.toFixed(1)}</div>
                    <div className="text-xs text-gray-500">KM</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-500">时长</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">{record.duration}</div>
                    <div className="text-xs text-gray-500">MIN</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Zap className="w-4 h-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-500">速度</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">{record.avgSpeed.toFixed(1)}</div>
                    <div className="text-xs text-gray-500">KM/H</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 统计信息卡片 */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">再接再厉！</h3>
          <p className="text-gray-600 text-sm">本周你已经完成了 3 次骑行，共计 89.4 公里。</p>
        </div>
      </div>
    </div>
  );
}
