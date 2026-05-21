'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

export default function SettingItem({
  icon,
  title,
  description,
  type = 'link',
  value,
  onToggle,
  onClick,
}) {
  return (
    <button
      onClick={type === 'button' || type === 'link' ? onClick : undefined}
      className={`w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 ${
        type === 'toggle' ? 'cursor-default' : 'hover:bg-gray-50'
      } transition-colors`}
      disabled={type === 'toggle'}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
          {icon}
        </div>
        <div className="text-left">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          {description && (
            <p className="text-xs text-gray-500 mt-0.5">{description}</p>
          )}
        </div>
      </div>
      
      {type === 'toggle' && onToggle && (
        <Switch checked={value} onCheckedChange={onToggle} />
      )}
      
      {type === 'link' && (
        <ChevronRight className="w-5 h-5 text-gray-400" />
      )}
    </button>
  );
}
