'use client';

import React from 'react';
import {
  Zap,
  Cloud,
  Shield,
  Moon,
  Bell,
  Smartphone,
  Database,
  Trash2,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import SettingItem from '@/components/SettingItem';
import { useSettingsStore } from '@/store/useSettingsStore';
import { Switch } from '@/components/ui/switch';

export default function Settings() {
  const settings = useSettingsStore((state) => state.settings);
  const toggleCloudSync = useSettingsStore((state) => state.toggleCloudSync);
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const toggleNotifications = useSettingsStore((state) => state.toggleNotifications);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-5 pt-10 pb-6 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">设置</h1>
        </div>
      </div>

      <div className="p-5 space-y-6">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src={settings.avatar}
              alt={settings.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-semibold text-gray-900">
                  {settings.name}
                </h2>
                {settings.isPro && (
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    Pro
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{settings.email}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">账户与同步</h3>
          <div className="space-y-2">
            <SettingItem
              icon={<Cloud className="w-5 h-5" />}
              title="云端同步"
              description="自动将备忘录备份到云端"
              type="toggle"
              value={settings.cloudSync}
              onToggle={toggleCloudSync}
            />
            <SettingItem
              icon={<Shield className="w-5 h-5" />}
              title="立即同步"
              description="上次同步: 10分钟前"
              type="link"
            />
            <SettingItem
              icon={<Shield className="w-5 h-5" />}
              title="账户安全"
              description="管理密码与双重验证"
              type="link"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">通用偏好</h3>
          <div className="space-y-2">
            <SettingItem
              icon={<Moon className="w-5 h-5" />}
              title="深色模式"
              description="根据系统自动切换"
              type="toggle"
              value={settings.darkMode}
              onToggle={toggleDarkMode}
            />
            <SettingItem
              icon={<Bell className="w-5 h-5" />}
              title="通知与提醒"
              description="管理备忘录提醒"
              type="toggle"
              value={settings.notifications}
              onToggle={toggleNotifications}
            />
            <SettingItem
              icon={<Smartphone className="w-5 h-5" />}
              title="显示设置"
              description="字体大小与排版风格"
              type="link"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">数据管理</h3>
          <div className="space-y-2">
            <SettingItem
              icon={<Database className="w-5 h-5" />}
              title="备份与恢复"
              description="导出本地数据到文件"
              type="link"
            />
            <SettingItem
              icon={<Trash2 className="w-5 h-5" />}
              title="清理缓存"
              description="当前占用: 45.2 MB"
              type="link"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">关于与支持</h3>
          <div className="space-y-2">
            <SettingItem
              icon={<HelpCircle className="w-5 h-5" />}
              title="帮助中心"
              description="查看常见问题与指南"
              type="link"
            />
            <SettingItem
              icon={<Info className="w-5 h-5" />}
              title="关于 MemoFlow"
              description="版本 v2.4.0 (Build 20231012)"
              type="link"
            />
          </div>
        </div>

        <button className="w-full py-4 bg-red-50 text-red-500 rounded-2xl font-medium border border-red-100 hover:bg-red-100 transition-colors">
          退出当前账户
        </button>
      </div>
    </div>
  );
}
