import React from 'react';
import { Sparkles, Moon, Heart, Compass, ChevronDown } from 'lucide-react';

interface LandingPageProps {
  setCurrentPage: (page: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: Sparkles,
      title: 'WhatIfNow',
      description: 'Explore alternate life paths and witness the lives you never lived',
      gradient: 'from-purple-500 to-pink-500',
      page: 'whatif',
    },
    {
      icon: Moon,
      title: 'DreamDecoder',
      description: 'Decode your dreams and visualize your subconscious mind',
      gradient: 'from-blue-500 to-purple-500',
      page: 'dreams',
    },
    {
      icon: Heart,
      title: 'MirrorLove',
      description: 'Share dreams and alternate realities with your partner',
      gradient: 'from-pink-500 to-red-500',
      page: 'mirror-love',
    },
    {
      icon: Compass,
      title: 'MindMirror',
      description: 'Your personal consciousness dashboard and soul compass',
      gradient: 'from-green-500 to-blue-500',
      page: 'dashboard',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <Compass className="w-16 h-16 text-purple-400 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            MindMultiverse
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Journey into the infinite realms of your consciousness.<br />
            Explore alternate realities, decode dreams, and discover your soul's true nature.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('whatif')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Begin Your Journey
            </button>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="px-8 py-4 border border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Dashboard
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore Your Inner Universe
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  onClick={() => setCurrentPage(feature.page)}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Your Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of consciousness explorers on a journey of self-discovery
          </p>
          <button
            onClick={() => setCurrentPage('whatif')}
            className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Start Exploring Now
          </button>
        </div>
      </section>
    </div>
  );
};