import React, { useState, useEffect } from 'react';
import { Globe, TrendingUp, Users, Activity } from 'lucide-react';

export const GlobalMap: React.FC = () => {
  const [globalStats, setGlobalStats] = useState({
    activeUsers: 847,
    dreamsAnalyzed: 12453,
    realitiesExplored: 5672,
  });

  const [trendingEmotions, setTrendingEmotions] = useState([
    { emotion: 'Wonder', percentage: 34, color: '#8B5CF6' },
    { emotion: 'Curiosity', percentage: 28, color: '#3B82F6' },
    { emotion: 'Peace', percentage: 22, color: '#10B981' },
    { emotion: 'Excitement', percentage: 16, color: '#F59E0B' },
  ]);

  const globalActivities = [
    { location: 'Tokyo', activity: 'Shared dream about cherry blossoms', time: '2 min ago', type: 'dream' },
    { location: 'New York', activity: 'Explored alternate reality as a musician', time: '5 min ago', type: 'reality' },
    { location: 'London', activity: 'Connected with soulmate', time: '8 min ago', type: 'connection' },
    { location: 'Sydney', activity: 'Decoded recurring ocean dream', time: '12 min ago', type: 'dream' },
    { location: 'São Paulo', activity: 'Achieved enlightenment level', time: '15 min ago', type: 'achievement' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        dreamsAnalyzed: prev.dreamsAnalyzed + Math.floor(Math.random() * 5),
        realitiesExplored: prev.realitiesExplored + Math.floor(Math.random() * 2),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Globe className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Global Subconscious Map
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Witness the collective consciousness of humanity. Real-time dreams, emotions, and alternate realities from around the world.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{globalStats.activeUsers.toLocaleString()}</div>
            <p className="text-gray-400">Active Minds</p>
            <div className="mt-2 flex items-center justify-center space-x-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">+12% today</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <Activity className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{globalStats.dreamsAnalyzed.toLocaleString()}</div>
            <p className="text-gray-400">Dreams Decoded</p>
            <div className="mt-2 flex items-center justify-center space-x-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">+847 this hour</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <Globe className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{globalStats.realitiesExplored.toLocaleString()}</div>
            <p className="text-gray-400">Realities Explored</p>
            <div className="mt-2 flex items-center justify-center space-x-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">+234 this hour</span>
            </div>
          </div>
        </div>

        {/* World Map Visualization */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Live Consciousness Activity</h3>
          
          <div className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-8 overflow-hidden">
            {/* Simplified world map representation */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  {/* Continents as simple shapes */}
                  <path d="M150 150 L300 140 L320 180 L280 220 L150 210 Z" fill="#374151" />
                  <path d="M350 120 L500 110 L520 160 L480 200 L350 190 Z" fill="#374151" />
                  <path d="M100 250 L200 240 L220 300 L180 340 L100 330 Z" fill="#374151" />
                  <path d="M550 180 L650 170 L670 220 L630 260 L550 250 Z" fill="#374151" />
                </svg>
              </div>
              
              {/* Activity Pulses */}
              {[
                { x: 20, y: 30, intensity: 'high' },
                { x: 40, y: 40, intensity: 'medium' },
                { x: 60, y: 35, intensity: 'high' },
                { x: 80, y: 50, intensity: 'low' },
                { x: 15, y: 70, intensity: 'medium' },
                { x: 75, y: 60, intensity: 'high' },
              ].map((pulse, index) => (
                <div
                  key={index}
                  className={`absolute w-4 h-4 rounded-full animate-ping ${
                    pulse.intensity === 'high' ? 'bg-purple-400' :
                    pulse.intensity === 'medium' ? 'bg-blue-400' : 'bg-green-400'
                  }`}
                  style={{
                    left: `${pulse.x}%`,
                    top: `${pulse.y}%`,
                    animationDelay: `${index * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-8 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">High Activity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Medium Activity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Low Activity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Trending Emotions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Trending Emotions</h3>
            
            <div className="space-y-4">
              {trendingEmotions.map((emotion, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{emotion.emotion}</span>
                    <span className="text-gray-400">{emotion.percentage}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${emotion.percentage}%`,
                        backgroundColor: emotion.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Live Activity Stream</h3>
            
            <div className="space-y-4">
              {globalActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    activity.type === 'dream' ? 'bg-blue-400' :
                    activity.type === 'reality' ? 'bg-purple-400' :
                    activity.type === 'connection' ? 'bg-pink-400' : 'bg-green-400'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-white font-medium">{activity.location}</span>
                      <span className="text-gray-400 text-sm">{activity.time}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{activity.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};