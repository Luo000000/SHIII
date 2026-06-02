'use client';

import React from 'react';
import { Zap, Cloud, Shield, Moon, Bell, Smartphone, Database, Trash2, HelpCircle, Info, LogOut, ChevronRight } from 'lucide-react';
import { useSettingsStore } from '@/store/useSettingsStore';

export default function Settings() {
  const settings = useSettingsStore((state) => state.settings);
  const toggleCloudSync = useSettingsStore((state) => state.toggleCloudSync);
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const toggleNotifications = useSettingsStore((state) => state.toggleNotifications);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部栏 */}
      <div className="bg-white border-b border-gray-100">
        <div className="px-5 pt-6 pb-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">设置</h1>
          </div>
        </div>
      </div>

      {/* 设置内容 */}
      <div className="px-5 pt-6 pb-32 space-y-8">
        {/* 用户信息 */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src={settings.avatar}
              alt={settings.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-semibold text-gray-900">{settings.name}</h2>
                {settings.isPro && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    Pro
                  </span>
                )}
              </div>
              <p className="text-base text-gray-500">{settings.email}</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* 账户与同步 */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4 px-2">账户与同步</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Cloud className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium text-gray-900">云端同步</h4>
                  <p className="text-sm text-gray-500">自动将备忘录备份到云端</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.cloudSync}
                  onChange={toggleCloudSync}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium text-gray-900">立即同步</h4>
                  <p className="text-sm text-gray-500">上次同步: 10分钟前</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium text-gray-900">账户安全</h4>
                  <p className="text-sm text-gray-500">管理密码与双重验证</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* 通用偏好 */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4 px-2">通用偏好</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Moon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium text-gray-900">深色模式</h4>
                  <p className="text-sm text-gray-500">根据系统自动切换</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={toggleDarkMode}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Bell className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium text-gray-900">通知与提醒</h4>
                  <p className="text-sm text-gray-500">管理备忘录提醒</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={toggleNotifications}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium text-gray-900">显示设置</h4>
                  <p className="text-sm text-gray-500">字体大小与排版风格</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* 数据管理 */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4 px-2">数据管理</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Database className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium text-gray-900">备份与恢复</h4>
                  <p className="text-sm text-gray-500">导出本地数据到文件</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Trash2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium text-gray-900">清理缓存</h4>
                  <p className="text-sm text-gray-500">当前占用: 45.2 MB</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* 关于与支持 */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4 px-2">关于与支持</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium text-gray-900">帮助中心</h4>
                  <p className="text-sm text-gray-500">查看常见问题与指南</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Info className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium text-gray-900">关于 MemoFlow</h4>
                  <p className="text-sm text-gray-500">版本 v2.4.0 (Build 20231012)</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* 退出登录 */}
        <button className="w-full py-5 bg-red-50 text-red-500 rounded-2xl font-semibold text-lg border border-red-100 hover:bg-red-100 transition-colors">
          退出当前账户
        </button>
      </div>
    </div>
  );
}
