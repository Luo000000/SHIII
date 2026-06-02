'use client';

import React from 'react';
import { Activity, MapPin, Clock, Mountain, Heart } from 'lucide-react';

export default function RideRecordPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">骑行记录</span>
            </div>
            <span className="text-sm text-gray-500">实时模式</span>
          </div>
        </div>
      </header>

      {/* 主内容区域 */}
      <main className="max-w-4xl mx-auto px-4 py-6 pb-32">
        {/* 速度显示卡片 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="text-center">
            <div className="text-blue-600 font-medium mb-2">当前速度</div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-gray-900">32.5</span>
              <span className="text-xl text-gray-600">km/h</span>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1 text-green-600">
              <Activity className="w-4 h-4" />
              <span className="font-medium">状态良好</span>
            </div>
          </div>
        </div>

        {/* 数据网格 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="flex items-center justify-center gap-1 text-gray-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">距离</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">12.4</div>
            <div className="text-sm text-gray-500">km</div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="flex items-center justify-center gap-1 text-gray-600 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">时长</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">00:45:12</div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="flex items-center justify-center gap-1 text-gray-600 mb-2">
              <Mountain className="w-4 h-4" />
              <span className="text-sm font-medium">海拔</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">+245</div>
            <div className="text-sm text-gray-500">m</div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="flex items-center justify-center gap-1 text-gray-600 mb-2">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">心率</span>
            </div>
            <div className="text-3xl font-bold text-red-500">142</div>
            <div className="text-sm text-gray-500">bpm</div>
          </div>
        </div>

        {/* 控制按钮 */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <button className="w-14 h-14 bg-white rounded-full shadow flex items-center justify-center border-2 border-gray-200">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
          </button>
          
          <button className="w-16 h-16 bg-amber-500 rounded-full shadow-xl flex items-center justify-center">
            <span className="text-3xl font-bold text-white">▶</span>
          </button>
          
          <button className="w-14 h-14 bg-white rounded-full shadow flex items-center justify-center border-2 border-blue-500">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
          </button>
        </div>

        {/* 底部操作 */}
        <div className="grid grid-cols-2 gap-3">
          <button className="py-4 bg-white text-blue-600 rounded-xl font-semibold shadow">
            位置分享
          </button>
          
          <button className="py-4 bg-blue-600 text-white rounded-xl font-semibold shadow">
            保存记录
          </button>
        </div>
      </main>
    </div>
  );
}
