'use client';

import React from 'react';
import { Home, Settings } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isSettings = pathname === '/settings';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 shadow-lg z-50">
      <div className="flex justify-around max-w-md mx-auto">
        <button
          onClick={() => router.push('/')}
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
            isHome ? 'text-blue-500 bg-blue-50' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Home className={`w-7 h-7 ${isHome ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium">备忘录</span>
        </button>
        
        <button
          onClick={() => router.push('/settings')}
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
            isSettings ? 'text-blue-500 bg-blue-50' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Settings className={`w-7 h-7 ${isSettings ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium">设置</span>
        </button>
      </div>
    </div>
  );
}
