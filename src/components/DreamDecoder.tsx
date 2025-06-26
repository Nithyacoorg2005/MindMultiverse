import React, { useState } from 'react';
import { Moon, Brain, Palette, BarChart3, Gem, BookOpen, Download, Share, Sparkles } from 'lucide-react';

export const DreamDecoder: React.FC = () => {
  const [dream, setDream] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [moodScore, setMoodScore] = useState(7);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!dream.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate realistic AI analysis stages
    const stages = [
      'Analyzing dream symbols...',
      'Interpreting psychological patterns...',
      'Generating visual representation...',
      'Creating personalized insights...',
      'Finalizing dream analysis...'
    ];
    
    for (let i = 0; i < stages.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600));
    }
    
    const analysis = generateDreamAnalysis(dream, moodScore);
    setAnalysisResult(analysis);
    setIsAnalyzing(false);
    setHasAnalyzed(true);
  };

  const generateDreamAnalysis = (dreamText: string, mood: number) => {
    // Analyze dream content for key themes
    const isFlying = dreamText.toLowerCase().includes('fly') || dreamText.toLowerCase().includes('flying');
    const isWater = dreamText.toLowerCase().includes('water') || dreamText.toLowerCase().includes('ocean') || dreamText.toLowerCase().includes('sea');
    const isChasing = dreamText.toLowerCase().includes('chase') || dreamText.toLowerCase().includes('running');
    const isAnimals = dreamText.toLowerCase().includes('animal') || dreamText.toLowerCase().includes('dog') || dreamText.toLowerCase().includes('cat');
    
    let coreAnalysis = '';
    let hiddenMessages = '';
    let symbols = [];
    let dreamType = '';
    let emotionalState = '';
    
    if (isFlying) {
      dreamType = 'Liberation Dream';
      coreAnalysis = 'Your flying dream represents a deep desire for freedom and transcendence. It suggests you\'re ready to rise above current limitations and view your life from a higher perspective. This dream often occurs when you\'re experiencing personal growth or seeking to break free from constraints.';
      hiddenMessages = 'Your subconscious is telling you that you have the power to overcome obstacles. The ability to fly in your dream symbolizes your inner strength and potential for transformation. Trust in your capabilities.';
      emotionalState = 'Empowered and Aspirational';
      symbols = [
        { symbol: '🕊️', meaning: 'Freedom and spiritual elevation', intensity: 9 },
        { symbol: '☁️', meaning: 'Higher consciousness and clarity', intensity: 8 },
        { symbol: '✨', meaning: 'Personal transformation', intensity: 7 },
        { symbol: '🌟', meaning: 'Achievement of goals', intensity: 8 }
      ];
    } else if (isWater) {
      dreamType = 'Emotional Depth Dream';
      coreAnalysis = 'Water in dreams represents your emotional landscape and subconscious mind. The state of the water reflects your current emotional state - calm water suggests peace, while turbulent water may indicate emotional turmoil or the need for emotional cleansing.';
      hiddenMessages = 'Your dream is encouraging you to dive deeper into your emotions and trust your intuition. Water dreams often appear when you need to pay attention to your feelings or when emotional healing is taking place.';
      emotionalState = 'Emotionally Reflective';
      symbols = [
        { symbol: '🌊', meaning: 'Emotions and subconscious depths', intensity: 9 },
        { symbol: '💧', meaning: 'Purification and renewal', intensity: 7 },
        { symbol: '🐠', meaning: 'Subconscious thoughts surfacing', intensity: 6 },
        { symbol: '🌙', meaning: 'Intuition and feminine energy', intensity: 8 }
      ];
    } else if (isChasing) {
      dreamType = 'Avoidance Dream';
      coreAnalysis = 'Being chased in dreams typically represents something in your waking life that you\'re trying to avoid or escape from. This could be a responsibility, fear, emotion, or aspect of yourself that you\'re not ready to confront.';
      hiddenMessages = 'Your subconscious is urging you to face what you\'re running from. Often, the thing chasing you represents a part of yourself or a situation that, once confronted, will lose its power over you.';
      emotionalState = 'Anxious but Ready for Growth';
      symbols = [
        { symbol: '🏃', meaning: 'Avoidance of responsibility or fear', intensity: 8 },
        { symbol: '👤', meaning: 'Shadow self or repressed aspects', intensity: 7 },
        { symbol: '🚪', meaning: 'Opportunities for escape or change', intensity: 6 },
        { symbol: '💪', meaning: 'Inner strength to face challenges', intensity: 9 }
      ];
    } else {
      dreamType = 'Symbolic Journey Dream';
      coreAnalysis = 'Your dream contains rich symbolic content that reflects your current life journey. The various elements represent different aspects of your psyche working together to process experiences and guide your personal development.';
      hiddenMessages = 'Pay attention to the emotions you felt in the dream - they often provide the key to understanding what your subconscious is trying to communicate about your waking life.';
      emotionalState = 'Introspective and Seeking';
      symbols = [
        { symbol: '🗝️', meaning: 'Hidden knowledge and solutions', intensity: 7 },
        { symbol: '🦋', meaning: 'Transformation and personal growth', intensity: 8 },
        { symbol: '🌱', meaning: 'New beginnings and potential', intensity: 6 },
        { symbol: '🎭', meaning: 'Different aspects of personality', intensity: 7 }
      ];
    }
    
    // Generate mood-based insights
    const moodInsight = mood >= 8 ? 'Your high mood score suggests this dream reflects positive transformation and growth in your life.' :
                       mood >= 6 ? 'Your moderate mood indicates this dream is helping you process current life changes.' :
                       'Your lower mood suggests this dream may be highlighting areas that need attention or healing.';
    
    return {
      dreamType,
      coreAnalysis,
      hiddenMessages,
      symbols,
      emotionalState,
      moodInsight,
      nftDescription: `A dreamscape featuring ${dreamType.toLowerCase()} elements with ethereal lighting and symbolic imagery representing ${emotionalState.toLowerCase()} energy.`
    };
  };

  const dreamJournal = [
    { date: 'Yesterday', title: 'Flying Dream', preview: 'Soaring above clouds, feeling free and weightless...', mood: 9 },
    { date: '3 days ago', title: 'Ocean Dream', preview: 'Deep underwater, breathing normally, surrounded by glowing fish...', mood: 7 },
    { date: '1 week ago', title: 'Forest Path', preview: 'Walking through an enchanted forest with talking animals...', mood: 8 },
    { date: '2 weeks ago', title: 'Time Travel', preview: 'Visiting my childhood home but everything was different...', mood: 6 }
  ];

  const moodData = [
    { day: 'Mon', mood: 6 },
    { day: 'Tue', mood: 8 },
    { day: 'Wed', mood: 5 },
    { day: 'Thu', mood: 9 },
    { day: 'Fri', mood: 7 },
    { day: 'Sat', mood: 8 },
    { day: 'Sun', mood: moodScore },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Moon className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DreamDecoder
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the mysteries of your subconscious mind. Describe your dreams and receive deep psychological insights and beautiful visualizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dream Input Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white">Describe Your Dream</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What did you dream about?
                </label>
                <textarea
                  value={dream}
                  onChange={(e) => setDream(e.target.value)}
                  placeholder="I was flying over a vast ocean, and I saw a butterfly made of starlight..."
                  className="w-full h-40 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Mood (1-10): {moodScore}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={moodScore}
                  onChange={(e) => setMoodScore(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Low</span>
                  <span>Neutral</span>
                  <span>High</span>
                </div>
              </div>
              
              <button
                onClick={handleAnalyze}
                disabled={!dream.trim() || isAnalyzing}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300 disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Decoding Dream...</span>
                  </div>
                ) : (
                  'Decode Dream'
                )}
              </button>
            </div>
          </div>

          {/* Dream Journal */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Dream Journal</h3>
            </div>
            
            <div className="space-y-4">
              {dreamJournal.map((entry, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-purple-300">{entry.date}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-400">Mood:</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < entry.mood / 2 ? 'bg-yellow-400' : 'bg-gray-600'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h4 className="text-sm text-gray-400 font-medium mb-1">{entry.title}</h4>
                  <p className="text-gray-300 text-sm">{entry.preview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analysis Results */}
        {hasAnalyzed && analysisResult && (
          <div className="mt-12 space-y-8">
            {/* Dream Type & Overview */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Dream Analysis</h3>
                </div>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg border border-purple-400/50 text-purple-300 transition-all duration-300">
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg border border-green-400/50 text-green-300 transition-all duration-300">
                    <Download className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Dream Type</h4>
                  <p className="text-white font-medium">{analysisResult.dreamType}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Moon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Emotional State</h4>
                  <p className="text-white font-medium">{analysisResult.emotionalState}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Mood Impact</h4>
                  <p className="text-white font-medium">{moodScore >= 7 ? 'Positive' : moodScore >= 5 ? 'Neutral' : 'Reflective'}</p>
                </div>
              </div>
            </div>

            {/* Psychological Analysis */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-2 mb-6">
                <Brain className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Psychological Analysis</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Core Meaning</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {analysisResult.coreAnalysis}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Hidden Messages</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {analysisResult.hiddenMessages}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-400/30">
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">Mood-Based Insight</h4>
                <p className="text-gray-300">{analysisResult.moodInsight}</p>
              </div>
            </div>

            {/* Dream Symbols */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-2 mb-6">
                <Palette className="w-6 h-6 text-pink-400" />
                <h3 className="text-2xl font-bold text-white">Dream Symbols</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {analysisResult.symbols.map((symbol: any, index: number) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{symbol.symbol}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{symbol.meaning}</span>
                          <span className="text-sm text-gray-400">{symbol.intensity}/10</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2 mt-1">
                          <div 
                            className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${symbol.intensity * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mood Chart */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-2 mb-6">
                <BarChart3 className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Weekly Mood Tracking</h3>
              </div>
              
              <div className="flex items-end space-x-4 h-32 mb-4">
                {moodData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-green-500 to-blue-500 rounded-t-lg transition-all duration-1000 hover:from-green-400 hover:to-blue-400"
                      style={{ height: `${data.mood * 10}%` }}
                    ></div>
                    <span className="text-sm text-gray-400 mt-2">{data.day}</span>
                    <span className="text-xs text-gray-500">{data.mood}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gray-300">Average mood this week: <span className="text-green-300 font-semibold">{(moodData.reduce((sum, d) => sum + d.mood, 0) / moodData.length).toFixed(1)}/10</span></p>
              </div>
            </div>

            {/* Dream to NFT */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-2 mb-6">
                <Gem className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Dream NFT Art</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex flex-col items-center justify-center p-6 border border-purple-400/30">
                  <div className="w-20 h-20 bg-purple-400/30 rounded-full flex items-center justify-center mb-4">
                    <Gem className="w-10 h-10 text-purple-300" />
                  </div>
                  <p className="text-white/80 text-center font-medium mb-2">AI-Generated Dream Art</p>
                  <p className="text-purple-300 text-sm text-center">{analysisResult.nftDescription}</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-yellow-300">Mint Your Dream</h4>
                  <p className="text-gray-300">
                    Transform your dream into a unique NFT artwork. This piece captures the essence of your subconscious vision with personalized symbolism and ethereal beauty.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-gray-300">Rarity Score</span>
                      <span className="text-yellow-300 font-semibold">{Math.floor(Math.random() * 40) + 60}/100</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-gray-300">Estimated Value</span>
                      <span className="text-green-300 font-semibold">{(Math.random() * 2 + 0.5).toFixed(2)} ETH</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300">
                    Create NFT (0.05 ETH)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};