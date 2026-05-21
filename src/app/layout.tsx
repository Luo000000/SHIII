import type { Metadata } from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'MemoFlow - 智能备忘录',
  description: '简洁优雅的备忘录应用',
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
