import React, { useState } from 'react';
import { Heart, Users, Sparkles, Calendar, MessageCircle, Clock, Share, Download, Play } from 'lucide-react';

export const MirrorLove: React.FC = () => {
  const [partnerConnected, setPartnerConnected] = useState(false);
  const [sharedDream, setSharedDream] = useState('');
  const [compatibilityScore, setCompatibilityScore] = useState(87);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [dreamAnalyzed, setDreamAnalyzed] = useState(false);
  const [timeCapsuleMessage, setTimeCapsuleMessage] = useState('');

  const handleDreamAnalysis = async () => {
    if (!sharedDream.trim()) return;
    
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsAnalyzing(false);
    setDreamAnalyzed(true);
  };

  const timelineEvents = [
    { year: 2019, event: "Met at a coffee shop in the rain", both: true, memory: "You both ordered the same unusual drink - lavender latte" },
    { year: 2020, event: "First shared dream about flying together", both: true, memory: "You were both phoenixes soaring over crystal mountains" },
    { year: 2021, event: "Moved in together, adopted Luna the cat", both: true, memory: "Luna chose you both by sleeping between you on the first night" },
    { year: 2022, event: "Traveled to 5 countries together", both: true, memory: "Got lost in Tokyo but found the most amazing ramen shop" },
    { year: 2023, event: "Started your joint art project", both: true, memory: "Combined your dreams into a beautiful painting series" },
    { year: 2024, event: "Discovered MindMultiverse together", both: true, memory: "Your compatibility score was 89% on the first try" },
    { year: 2025, event: "Planning a dream wedding in Bali", both: false, memory: "The ceremony will be at sunset on the beach" },
  ];

  const pastMessages = [
    {
      date: '1 year ago',
      message: "We hope you're still as happy as we are today. Remember to always dream together and never stop exploring each other's minds. Our love grows stronger with every shared vision.",
      mood: 'Hopeful'
    },
    {
      date: '2 years ago', 
      message: "Just moved in together and Luna has already claimed the best spot on the couch! Can't wait to see where this journey takes us. We're building something beautiful.",
      mood: 'Excited'
    },
    {
      date: '3 years ago',
      message: "Today we realized we've been having similar dreams for months. Is this what soulmates feel like? We're going to start a dream journal together.",
      mood: 'Amazed'
    }
  ];

  const sharedMemories = [
    {
      title: "First Kiss Under the Stars",
      date: "June 15, 2019",
      description: "After stargazing for hours, talking about parallel universes and what-if scenarios",
      emotion: "Magical",
      visual: "Starlit sky with two silhouettes"
    },
    {
      title: "The Synchronicity Moment", 
      date: "March 3, 2020",
      description: "You both woke up from the exact same dream and described it in perfect detail",
      emotion: "Mystical",
      visual: "Two minds connected by golden threads"
    },
    {
      title: "Dancing in the Kitchen",
      date: "December 24, 2021", 
      description: "Making breakfast became a spontaneous dance party to your favorite song",
      emotion: "Joyful",
      visual: "Warm kitchen light with dancing figures"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Heart className="w-8 h-8 text-pink-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              MirrorLove
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the depths of connection with your partner. Share dreams, discover alternate realities together, and strengthen your soul bond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Partner Connection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-2 mb-6">
              <Users className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Partner Connection</h3>
            </div>
            
            {!partnerConnected ? (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <p className="text-gray-300">Invite your partner to connect your consciousness</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Partner's email address"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400"
                  />
                  <button
                    onClick={() => setPartnerConnected(true)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300"
                  >
                    Send Soul Invitation
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="flex justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">You</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                    <Heart className="w-6 h-6 text-pink-400 mx-2 animate-pulse" />
                    <div className="w-8 h-1 bg-gradient-to-r from-pink-500 to-red-500 animate-pulse"></div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Alex</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-green-300 font-semibold">💕 Connected with Alex</p>
                  <p className="text-sm text-gray-400">Consciousness synchronized • Online now</p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-300">
                    <span>Together for: 1,847 days</span>
                    <span>•</span>
                    <span>Shared dreams: 23</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Soul Thread Score */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Soul Thread Compatibility</h3>
            </div>
            
            <div className="text-center space-y-4">
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#374151"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${compatibilityScore * 3.14} 314`}
                    strokeDashoffset="0"
                    transform="rotate(-90 60 60)"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{compatibilityScore}%</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-yellow-300 font-semibold">Exceptional Soul Bond</p>
                <p className="text-sm text-gray-400">Your souls resonate at remarkably similar frequencies</p>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-300">94%</div>
                    <div className="text-xs text-gray-400">Dream Sync</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-300">91%</div>
                    <div className="text-xs text-gray-400">Emotional Harmony</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">88%</div>
                    <div className="text-xs text-gray-400">Future Vision</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-pink-300">96%</div>
                    <div className="text-xs text-gray-400">Soul Recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {partnerConnected && (
          <>
            {/* Shared Dream Visualizer */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <MessageCircle className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Shared Dream Visualizer</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Describe a dream you both experienced
                  </label>
                  <textarea
                    value={sharedDream}
                    onChange={(e) => setSharedDream(e.target.value)}
                    placeholder="We were both floating in a cosmic garden, planting stars that grew into trees of light..."
                    className="w-full h-32 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  />
                  <button 
                    onClick={handleDreamAnalysis}
                    disabled={!sharedDream.trim() || isAnalyzing}
                    className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300 disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Analyzing Shared Vision...</span>
                      </div>
                    ) : (
                      'Visualize Together'
                    )}
                  </button>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex flex-col items-center justify-center p-6 border border-purple-400/30">
                  {dreamAnalyzed ? (
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-purple-400/30 rounded-full flex items-center justify-center mx-auto">
                        <Sparkles className="w-8 h-8 text-purple-300" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Cosmic Garden Vision</h4>
                        <p className="text-purple-300 text-sm mb-4">A shared dreamscape of infinite possibility and growth</p>
                        <div className="space-y-2 text-xs text-gray-300">
                          <div>Synchronicity Level: 94%</div>
                          <div>Shared Symbols: Stars, Trees, Light</div>
                          <div>Emotional Resonance: Joy, Wonder, Unity</div>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500/30 hover:bg-purple-500/40 rounded-lg border border-purple-400/50 text-purple-300 transition-all duration-300">
                        <Download className="w-4 h-4" />
                        <span>Save Vision</span>
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-8 h-8 text-purple-300" />
                      </div>
                      <p className="text-white/60 text-center">Shared Dream Visualization<br />Will Appear Here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Memory Replayer */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <Play className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Romantic Memory Replayer</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {sharedMemories.map((memory, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                    <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <Play className="w-8 h-8 text-pink-300 group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{memory.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{memory.date}</p>
                    <p className="text-gray-300 text-sm mb-3">{memory.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
                        {memory.emotion}
                      </span>
                      <button className="text-xs text-gray-400 hover:text-white transition-colors">
                        Replay Memory
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Couple Timeline */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Alternate Couple Timeline</h3>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg border border-green-400/50 text-green-300 transition-all duration-300">
                  <Share className="w-4 h-4" />
                  <span>Share Timeline</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg border-l-4 transition-all duration-300 hover:scale-105 cursor-pointer ${
                      event.both
                        ? 'bg-purple-500/20 border-purple-400 hover:bg-purple-500/30'
                        : 'bg-yellow-500/20 border-yellow-400 hover:bg-yellow-500/30'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-lg font-bold text-white">{event.year}</span>
                          <span className="text-white font-medium">{event.event}</span>
                        </div>
                        <p className="text-gray-300 text-sm italic">"{event.memory}"</p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {event.both ? (
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                          </div>
                        ) : (
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Capsule Messages */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Time Capsule Messages</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-4">Send to Future Selves</h4>
                  <textarea
                    value={timeCapsuleMessage}
                    onChange={(e) => setTimeCapsuleMessage(e.target.value)}
                    placeholder="Write a message to yourselves in 5 years..."
                    className="w-full h-32 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <div className="flex space-x-2 mt-4">
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300">
                      Seal Message
                    </button>
                    <button className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 text-gray-300 transition-all duration-300">
                      <Calendar className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">Messages from Past Selves</h4>
                  <div className="space-y-3">
                    {pastMessages.map((msg, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm text-purple-300">{msg.date}</span>
                          <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                            {msg.mood}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">"{msg.message}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};