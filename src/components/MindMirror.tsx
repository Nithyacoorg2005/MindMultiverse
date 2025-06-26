import React, { useState, useEffect } from 'react';
import { Compass, Brain, Zap, Target, Award, Calendar } from 'lucide-react';

export const MindMirror: React.FC = () => {
  const [soulCompassAngle, setSoulCompassAngle] = useState(0);
  const [userLevel, setUserLevel] = useState(7);
  const [experiencePoints, setExperiencePoints] = useState(2840);
  const [currentStreak, setCurrentStreak] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setSoulCompassAngle(prev => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const subconsciousProfile = {
    dominantArchetype: "The Mystic Explorer",
    emotionalSpectrum: ["Curiosity", "Wonder", "Introspection", "Creativity"],
    dreamThemes: ["Flying", "Ocean", "Transformation", "Light"],
    mindState: "Harmonious",
  };

  const achievements = [
    { name: "Dream Decoder", description: "Analyzed 10 dreams", icon: "🌙", unlocked: true },
    { name: "Reality Shifter", description: "Explored 5 alternate lives", icon: "✨", unlocked: true },
    { name: "Soul Connector", description: "Connected with partner", icon: "💕", unlocked: true },
    { name: "Consciousness Master", description: "Reach level 10", icon: "🧠", unlocked: false },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Compass className="w-8 h-8 text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              MindMirror Dashboard
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your comprehensive consciousness profile and soul compass. Track your journey through the multiverse of mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Soul Compass */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <h3 className="text-xl font-bold text-white mb-6">Soul Compass</h3>
              
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500/40 to-green-500/40"></div>
                
                {/* Compass Needle */}
                <div
                  className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-yellow-400 to-red-400 origin-bottom rounded-full"
                  style={{
                    transform: `translate(-50%, -100%) rotate(${soulCompassAngle}deg)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                ></div>
                
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Direction Labels */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm">Intuition</div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm">Logic</div>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-sm">Past</div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm">Future</div>
              </div>
              
              <p className="text-green-300 font-semibold">Currently pointing towards Intuitive Future</p>
            </div>
          </div>

          {/* Subconscious Profile */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-2 mb-6">
                <Brain className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Subconscious Profile</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Dominant Archetype</h4>
                  <p className="text-white text-2xl font-bold mb-2">{subconsciousProfile.dominantArchetype}</p>
                  <p className="text-gray-400 text-sm">You seek deeper truths and hidden meanings in all experiences.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Current Mind State</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 font-semibold">{subconsciousProfile.mindState}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Balanced consciousness with clear emotional flow</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-pink-300 mb-3">Emotional Spectrum</h4>
                  <div className="flex flex-wrap gap-2">
                    {subconsciousProfile.emotionalSpectrum.map((emotion, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30"
                      >
                        {emotion}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">Dream Themes</h4>
                  <div className="flex flex-wrap gap-2">
                    {subconsciousProfile.dreamThemes.map((theme, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Progress */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Level {userLevel}</h3>
                <p className="text-sm text-gray-400">Consciousness Explorer</p>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full"
                style={{ width: `${(experiencePoints % 500) / 5}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-300 mt-2">{experiencePoints} XP / {Math.ceil(experiencePoints / 500) * 500} XP</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-8 h-8 text-red-400" />
              <div>
                <h3 className="text-lg font-bold text-white">{currentStreak} Days</h3>
                <p className="text-sm text-gray-400">Current Streak</p>
              </div>
            </div>
            <div className="flex space-x-1">
              {[...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-8 rounded ${
                    index < currentStreak % 7 ? 'bg-red-400' : 'bg-white/20'
                  }`}
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-300 mt-2">Keep exploring daily!</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-lg font-bold text-white">45 Sessions</h3>
                <p className="text-sm text-gray-400">This Month</p>
              </div>
            </div>
            <div className="text-3xl text-blue-300 font-bold">+127%</div>
            <p className="text-sm text-gray-300">vs last month</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex items-center space-x-2 mb-6">
            <Award className="w-6 h-6 text-gold-400" />
            <h3 className="text-2xl font-bold text-white">Achievements</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border text-center transition-all duration-300 ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-400/50 hover:scale-105'
                    : 'bg-white/5 border-white/10 opacity-50'
                }`}
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="font-bold text-white mb-2">{achievement.name}</h4>
                <p className="text-sm text-gray-300">{achievement.description}</p>
                {achievement.unlocked && (
                  <div className="mt-3 px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded-full text-xs">
                    Unlocked
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};