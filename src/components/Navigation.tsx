import React from 'react';
import { Brain, Heart, Moon, Compass, Globe, Sparkles } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Brain },
    { id: 'whatif', label: 'WhatIfNow', icon: Sparkles },
    { id: 'dreams', label: 'DreamDecoder', icon: Moon },
    { id: 'mirror-love', label: 'MirrorLove', icon: Heart },
    { id: 'dashboard', label: 'MindMirror', icon: Compass },
    { id: 'global', label: 'Global Map', icon: Globe },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MindMultiverse
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
          
          <div className="md:hidden">
            <button className="text-white p-2">
              <Brain className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};