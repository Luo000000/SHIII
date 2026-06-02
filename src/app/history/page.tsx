'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Zap, Calendar, ChevronRight, TrendingUp } from 'lucide-react';

export default function RideHistoryPage() {
  const [activeTab, setActiveTab] = useState('最近骑行');

  const tabs = ['最近骑行', '最长距离', '最高速度'];

  const rides = [
    { id: 1, title: '早间公园骑行', distance: '12.4', duration: '00:45:12', date: '今天 08:30', type: '公路' },
    { id: 2, title: '傍晚郊区骑行', distance: '28.6', duration: '01:20:45', date: '昨天 18:00', type: '郊区' },
    { id: 3, title: '周末长途骑行', distance: '45.2', duration: '02:15:30', date: '3天前', type: '公路' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900">骑行历史</h1>
          </div>
          
          {/* 标签选择 */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 统计卡片 */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">156.8</div>
            <div className="text-xs text-gray-500">总里程(km)</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">24</div>
            <div className="text-xs text-gray-500">骑行次数</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">8.5</div>
            <div className="text-xs text-gray-500">总时长(h)</div>
          </div>
        </div>

        {/* 记录列表 */}
        <div className="space-y-3">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="bg-white rounded-xl shadow p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{ride.title}</div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{ride.distance} km</span>
                    <span>•</span>
                    <span>{ride.duration}</span>
                    <span>•</span>
                    <span>{ride.date}</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
