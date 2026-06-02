import { RideRecord, CommunityPost, UserProfile, Achievement, Device } from '@/types';

// 骑行记录模拟数据
export const mockRideRecords: RideRecord[] = [
  {
    id: '1',
    title: '早间公园环行',
    image: 'https://images.unsplash.com/photo-1541627866638-5d3736b36b36?w=600',
    date: new Date('2023-10-24T08:30:00'),
    distance: 24.5,
    duration: '01:12',
    avgSpeed: 20.2,
    locationType: '公路',
  },
  {
    id: '2',
    title: '周末郊区远行',
    image: 'https://images.unsplash.com/photo-1476480862126-209d4876777d?w=600',
    date: new Date('2023-10-21T14:15:00'),
    distance: 52.1,
    duration: '02:45',
    avgSpeed: 18.9,
    locationType: '公路',
  },
  {
    id: '3',
    title: '夜间城市骑行',
    image: 'https://images.unsplash.com/photo-1532298229147-772459965555?w=600',
    date: new Date('2023-10-18T19:00:00'),
    distance: 12.8,
    duration: '00:45',
    avgSpeed: 16.5,
    locationType: '城市',
  },
];

// 社区帖子模拟数据
export const mockCommunityPosts: CommunityPost[] = [
  {
    id: '1',
    author: {
      name: '张小杰',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
      role: '资深骑手',
      isFollowing: false,
    },
    timeAgo: '2小时前',
    content: '今天挑战了一下大蜀山，清晨的空气真的太棒了！坡度虽然有点抖，但登顶那一刻的成就感是无法替代的。🚴‍♂️',
    images: ['https://images.unsplash.com/photo-1558618047-5b5d7e31e6b5?w=600'],
    stats: {
      distance: 42.5,
      elevation: 580,
      duration: '02:15:40',
    },
    likes: 128,
    comments: 24,
    tags: ['骑行路线'],
  },
  {
    id: '2',
    author: {
      name: '王美美',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      role: '俱乐部达人',
      isFollowing: true,
    },
    timeAgo: '5小时前',
    content: '最近入手的这件骑行服太出片了！不仅排汗效果好，颜色也特别显白。强烈推荐给各位姐妹们✨✨',
    images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600'],
    stats: {
      distance: 0,
      elevation: 0,
      duration: '',
    },
    likes: 356,
    comments: 42,
    tags: ['骑行装备'],
  },
];

// 用户信息模拟数据
export const mockUserProfile: UserProfile = {
  id: '1',
  name: '张伟 (RideFlow Pro)',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
  level: 24,
  motto: '风在耳边，路在脚下。',
  stats: {
    totalDistance: 1248,
    totalRides: 86,
    totalDuration: 54.5,
  },
  achievements: [
    {
      id: '1',
      title: '破风先锋',
      description: '达成单日100km',
      icon: 'trophy',
      color: '#FF6B35',
    },
    {
      id: '2',
      title: '连续打卡',
      description: '连续骑行30天',
      icon: 'star',
      color: '#00D280',
    },
    {
      id: '3',
      title: '爬坡勇士',
      description: '累计海拔上升1000m',
      icon: 'mountain',
      color: '#0066FF',
    },
  ],
  connectedDevices: [
    {
      id: '1',
      name: 'Polar H10',
      type: '心率传感器',
      connected: true,
      battery: 85,
    },
    {
      id: '2',
      name: 'Wahoo Blue SC',
      type: '踏频传感器',
      connected: false,
      battery: 12,
    },
  ],
};
