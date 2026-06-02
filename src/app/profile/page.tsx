'use client';

import React, { useState } from 'react';
import { Zap, Share, Trophy, Star, Mountain, Bluetooth, Bell, Shield, RefreshCw, Moon, Settings as SettingsIcon, Activity, ChevronRight, User, CheckCircle2 } from 'lucide-react';
import { mockUserProfile } from '@/lib/mockData';

export default function ProfilePage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-white px-5 pt-12 pb-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12"></div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900">个人中心</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Share className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* 用户信息 */}
      <div className="px-5 pt-6 pb-32">
        <div className="text-center mb-6">
          <div className="relative inline-block mb-4">
            <img
              src={mockUserProfile.avatar}
              alt={mockUserProfile.name}
              className="w-28 h-28 rounded-full object-cover shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              Lv.{mockUserProfile.level}
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{mockUserProfile.name}</h2>
          <p className="text-sm text-gray-500">“{mockUserProfile.motto}”</p>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-500">{mockUserProfile.stats.totalDistance.toLocaleString()}</div>
            <div className="text-xs text-gray-500">总里程</div>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-500">{mockUserProfile.stats.totalRides}</div>
            <div className="text-xs text-gray-500">骑行次数</div>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-500">{mockUserProfile.stats.totalDuration.toFixed(1)}</div>
            <div className="text-xs text-gray-500">骑行时长</div>
          </div>
        </div>

        {/* 成就卡片 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              我的骑行成就
            </h3>
            <button className="text-blue-500 text-sm font-medium">查看全部</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {mockUserProfile.achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center"
                style={{
                  background: achievement.color === '#FF6B35' ? 'linear-gradient(135deg, #FFF1EB 0%, #FFF5F0 100%)' :
                             achievement.color === '#00D280' ? 'linear-gradient(135deg, #E8FBF1 0%, #F0FDF5 100%)' :
                             'linear-gradient(135deg, #EBF5FF 0%, #F0F7FF 100%)'
                }}
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: `${achievement.color}20` }}>
                  {achievement.icon === 'trophy' && <Trophy className="w-6 h-6" style={{ color: achievement.color }} />}
                  {achievement.icon === 'star' && <Star className="w-6 h-6" style={{ color: achievement.color }} fill="currentColor" />}
                  {achievement.icon === 'mountain' && <Mountain className="w-6 h-6" style={{ color: achievement.color }} />}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{achievement.title}</div>
                <div className="text-xs text-gray-500">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 已连接设备 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
              <Bluetooth className="w-5 h-5 text-blue-500" />
              已连接设备
            </h3>
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
              管理
            </button>
          </div>
          <div className="space-y-3">
            {mockUserProfile.connectedDevices.map((device) => (
              <div
                key={device.id}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{device.name}</div>
                    <div className="text-xs text-gray-500">{device.type}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {device.connected ? (
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xs font-medium">已连接</span>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-500">未连接</span>
                  )}
                  <div className="text-xs text-gray-400">{device.battery}% 电量</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 设置选项 */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <SettingsIcon className="w-5 h-5 text-gray-600" />
            账户与应用
          </h3>
          <div className="space-y-2">
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">实时通知</div>
                  <div className="text-xs text-gray-500">收到骑友互动或活动提醒时发送</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">隐私保护</div>
                  <div className="text-xs text-gray-500">管理谁可以查看你的骑行轨迹</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">同步与备份</div>
                  <div className="text-xs text-gray-500">最后一次同步: 2小时前</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
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
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
          </div>
        </div>

        {/* 更多设置 */}
        <div className="space-y-2">
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                <SettingsIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">骑行偏好设置</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">应用版本</div>
                <div className="text-xs text-gray-500">v2.4.0 (Build 2024)</div>
              </div>
            </div>
            <div className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              最新版
            </div>
          </div>
        </div>

        {/* 底部标语 */}
        <div className="text-center py-8">
          <p className="text-gray-300 text-sm">RideFlow: 骑行让生活更有温度</p>
        </div>
      </div>
    </div>
  );
}
