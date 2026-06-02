// 骑行记录类型
export interface RideRecord {
  id: string;
  title: string;
  image: string;
  date: Date;
  distance: number; // 公里
  duration: string; // 时分
  avgSpeed: number; // 公里/小时
  locationType: string; // 公路、城市、越野等
}

// 社区帖子类型
export interface CommunityPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    isFollowing: boolean;
  };
  timeAgo: string;
  content: string;
  images?: string[];
  stats: {
    distance: number;
    elevation: number;
    duration: string;
  };
  likes: number;
  comments: number;
  tags: string[];
}

// 用户信息类型
export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  level: number;
  motto: string;
  stats: {
    totalDistance: number;
    totalRides: number;
    totalDuration: number;
  };
  achievements: Achievement[];
  connectedDevices: Device[];
}

// 成就类型
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// 设备类型
export interface Device {
  id: string;
  name: string;
  type: string;
  connected: boolean;
  battery: number;
}
