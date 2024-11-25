import React from 'react';
import {
  MessageSquare,
  Heart,
  Share2,
  Bookmark,
  MoreHorizontal,
  BadgeCheck,
} from 'lucide-react';

interface PostProps {
  avatar: string;
  name: string;
  handle: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

export function Post({ 
  avatar, 
  name, 
  handle, 
  time, 
  content, 
  image, 
  likes, 
  comments, 
  shares 
}: PostProps) {
  return (
    <div className="border-b border-gray-100 p-4">
      <div className="flex items-start gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{name}</span>
              <BadgeCheck className="w-4 h-4 text-blue-500" />
              <span className="text-gray-500">@{handle}</span>
              <span className="text-gray-400">· {time}</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-2 text-gray-800 leading-relaxed">{content}</p>
          {image && (
            <img
              src={image}
              alt="Post content"
              className="mt-3 rounded-xl w-full object-cover h-64"
            />
          )}
          <div className="flex items-center gap-6 mt-3 text-gray-500">
            <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span>{comments}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-pink-500 transition-colors">
              <Heart className="w-5 h-5" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>{shares}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-yellow-500 transition-colors ml-auto">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}