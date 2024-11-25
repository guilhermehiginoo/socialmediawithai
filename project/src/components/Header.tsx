import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 text-blue-500" />
        <span className="font-bold text-xl">AIverse</span>
      </div>
      <Sparkles className="w-6 h-6 text-yellow-500" />
    </div>
  );
}