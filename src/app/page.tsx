'use client';

import React from 'react';
import { Zap, Settings, Activity, MapPin, Clock, Mountain, Heart, Share2, StopCircle, PlayCircle, Share, Save, Share2 as ShareIcon } from 'lucide-react';

export default function RideRecordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 顶部导航栏 */}
      <div className="bg-white px-5 pt-12 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" fill="currentColor" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900">实时记录</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <Settings className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* 主内容区域 */}
      <div className="px-5 pb-32">
        {/* 背景图片 */}
        <div className="relative rounded-3xl overflow-hidden mb-6" style={{ aspectRatio: '9/16' }}>
          <img 
            src="https://images.unsplash.com/photo-1541627866638-5d3736b36b36?w=800" 
            alt="骑行背景" 
            className="w-full h-full object-cover"
          />
          
          {/* 数据覆盖层 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 flex flex-col justify-end p-6">
            {/* 速度显示 */}
            <div className="mb-8">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 mx-auto w-4/5 shadow-xl">
                <div className="text-center">
                  <div className="text-blue-500 font-semibold text-sm mb-1">当前速度</div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-6xl font-bold text-gray-900">32.5</span>
                    <span className="ml-2 text-lg text-gray-600">km/h</span>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-1 text-green-600">
                    <Activity className="w-4 h-4" />
                    <span className="font-medium">状态良好</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 数据卡片网格 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/85 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg">
                <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">距离</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">12.4</div>
                <div className="text-sm text-gray-600">km</div>
              </div>
              
              <div className="bg-white/85 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg">
                <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">时长</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">00:45:12</div>
              </div>
              
              <div className="bg-white/85 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg">
                <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                  <Mountain className="w-4 h-4" />
                  <span className="text-sm font-medium">海拔</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">+245</div>
                <div className="text-sm text-gray-600">m</div>
              </div>
              
              <div className="bg-white/85 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg">
                <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">心率</span>
                </div>
                <div className="text-3xl font-bold text-red-500">142</div>
                <div className="text-sm text-gray-600">bpm</div>
              </div>
            </div>

            {/* 实时数据图表 */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-5 shadow-lg mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  <Activity className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-900">实时速度记录（最近5分钟）</span>
                </div>
                <div className="text-sm text-gray-600">平均: 24.8 km/h</div>
              </div>
              
              {/* 模拟图表 */}
              <div className="h-24 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-full">
                  <svg viewBox="0 0 100 50" className="w-full h-full">
                    <defs>
                      <linearGradient id="speedGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0,40 Q10,30 20,35 T40,30 T60,38 T80,32 T100,40 L100,50 L0,50 Z" 
                      fill="url(#speedGradient)" 
                    />
                    <path 
                      d="M0,40 Q10,30 20,35 T40,30 T60,38 T80,32 T100,40" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* 控制按钮 */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <button className="w-16 h-16 bg-white/90 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 hover:bg-gray-50 transition-colors">
                <StopCircle className="w-8 h-8 text-red-500" />
              </button>
              
              <button className="w-20 h-20 bg-amber-500 rounded-full shadow-xl flex items-center justify-center hover:bg-amber-600 transition-colors">
                <span className="text-4xl font-bold text-white">00</span>
              </button>
              
              <button className="w-16 h-16 bg-white/90 rounded-full shadow-lg flex items-center justify-center border-2 border-blue-500 hover:bg-blue-50 transition-colors">
                <Share2 className="w-8 h-8 text-blue-500" />
              </button>
            </div>

            {/* 底部操作按钮 */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/90 text-blue-500 rounded-xl font-semibold text-base shadow-lg hover:bg-white transition-colors">
                <Share className="w-5 h-5" />
                实时位置分享
              </button>
              
              <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-500 text-white rounded-xl font-semibold text-base shadow-lg hover:bg-blue-600 transition-colors">
                <Save className="w-5 h-5" />
                保存骑行记录
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
