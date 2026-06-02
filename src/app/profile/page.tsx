'use client';

import React, { useState } from 'react';
import { Trophy, Star, Mountain, Bluetooth, Bell, Shield, RefreshCw, Moon, Settings, User, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ProfilePage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10"></div>
            <h1 className="text-xl font-bold text-gray-900">个人中心</h1>
            <div className="w-10 h-10"></div>
          </div>
        </div>
      </header>

      {/* 用户信息 */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <div className="relative inline-block mb-4">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
              alt="用户头像"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              Lv.12
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">骑行达人</h2>
          <p className="text-sm text-gray-500">"享受每一次骑行"</p>
        </div>

        {/* 统计数据 */}
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

        {/* 成就卡片 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              我的成就
            </h3>
            <button className="text-blue-600 text-sm font-medium">查看全部</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-orange-100 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-sm font-semibold text-gray-900">新手骑士</div>
              <div className="text-xs text-gray-500">已获得</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-green-500" fill="currentColor" />
              </div>
              <div className="text-sm font-semibold text-gray-900">连续骑行</div>
              <div className="text-xs text-gray-500">已获得</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-100 flex items-center justify-center">
                <Mountain className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-sm font-semibold text-gray-900">挑战成功</div>
              <div className="text-xs text-gray-500">进行中</div>
            </div>
          </div>
        </div>

        {/* 已连接设备 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Bluetooth className="w-5 h-5 text-blue-600" />
              已连接设备
            </h3>
            <button className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm font-medium">
              管理
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">智能码表</div>
                  <div className="text-xs text-gray-500">速度/里程</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-medium">已连接</span>
                </div>
                <div className="text-xs text-gray-400">85%</div>
              </div>
            </div>
          </div>
        </div>

        {/* 设置选项 */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <Settings className="w-5 h-5 text-gray-600" />
            账户与应用
          </h3>
          <div className="space-y-2">
            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">实时通知</div>
                  <div className="text-xs text-gray-500">收到骑友互动时提醒</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">隐私保护</div>
                  <div className="text-xs text-gray-500">管理谁可以查看你的骑行</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">深色模式</div>
                  <div className="text-xs text-gray-500">根据系统设置自动切换</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkModeEnabled}
                  onChange={() => setDarkModeEnabled(!darkModeEnabled)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* 底部标语 */}
        <div className="text-center py-6">
          <p className="text-gray-400 text-sm">RideFlow - 骑行让生活更精彩</p>
        </div>
      </div>
    </div>
  );
}
