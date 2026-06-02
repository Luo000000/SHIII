'use client';

import React from 'react';
import { Activity, MapPin, Users, User } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isRide = pathname === '/';
  const isHistory = pathname === '/history';
  const isCommunity = pathname === '/community';
  const isProfile = pathname === '/profile';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 shadow-lg z-50">
      <div className="flex justify-around max-w-lg mx-auto">
        <button
          onClick={() => router.push('/')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
            isRide ? 'text-blue-500 bg-blue-50' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Activity className={`w-6 h-6 ${isRide ? 'fill-current' : ''}`} />
          <span className="text-xs font-medium">骑行</span>
        </button>
        
        <button
          onClick={() => router.push('/history')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
            isHistory ? 'text-blue-500 bg-blue-50' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <MapPin className={`w-6 h-6 ${isHistory ? 'fill-current' : ''}`} />
          <span className="text-xs font-medium">记录</span>
        </button>
        
        <button
          onClick={() => router.push('/community')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
            isCommunity ? 'text-blue-500 bg-blue-50' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Users className={`w-6 h-6 ${isCommunity ? 'fill-current' : ''}`} />
          <span className="text-xs font-medium">社区</span>
        </button>
        
        <button
          onClick={() => router.push('/profile')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
            isProfile ? 'text-blue-500 bg-blue-50' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <User className={`w-6 h-6 ${isProfile ? 'fill-current' : ''}`} />
          <span className="text-xs font-medium">我的</span>
        </button>
      </div>
    </div>
  );
}
