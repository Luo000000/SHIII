import type { Metadata } from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'RideFlow - 骑行记录',
  description: '专业的骑行记录与分享应用',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50 min-h-screen">
        <main className="pb-24">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
