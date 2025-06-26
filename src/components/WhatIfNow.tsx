import React, { useState } from 'react';
import { Sparkles, Calendar, Image, MessageSquare, Play, Clock, Download, Share } from 'lucide-react';

export const WhatIfNow: React.FC = () => {
  const [decision, setDecision] = useState('');
  const [currentAge, setCurrentAge] = useState(30);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const generateAlternateLife = async () => {
    if (!decision.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate realistic AI generation with multiple stages
    const stages = [
      'Analyzing your decision...',
      'Exploring alternate timelines...',
      'Generating life story...',
      'Creating visual content...',
      'Finalizing your alternate reality...'
    ];
    
    for (let i = 0; i < stages.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      // You could update a progress indicator here
    }
    
    // Generate realistic content based on the decision
    const content = generateRealisticContent(decision);
    setGeneratedContent(content);
    setIsGenerating(false);
    setHasGenerated(true);
  };

  const generateRealisticContent = (userDecision: string) => {
    // Extract key themes from the decision
    const isArtistic = userDecision.toLowerCase().includes('artist') || userDecision.toLowerCase().includes('art');
    const isTravel = userDecision.toLowerCase().includes('travel') || userDecision.toLowerCase().includes('world');
    const isBusiness = userDecision.toLowerCase().includes('business') || userDecision.toLowerCase().includes('entrepreneur');
    
    let baseStory = '';
    let timeline = [];
    let socialPosts = [];
    let letters = [];
    
    if (isArtistic) {
      baseStory = `In this reality, you followed your passion for art from an early age. You started with small local exhibitions, gradually building a reputation for your unique style that blends traditional techniques with modern digital art. Your breakthrough came when a renowned gallery owner discovered your work at a coffee shop exhibition. Since then, you've traveled the world, showcasing your art in major cities like Paris, New York, and Tokyo. Your art has been featured in prestigious magazines, and you've inspired countless young artists to pursue their dreams.`;
      
      timeline = [
        { age: 22, event: "First solo exhibition at local gallery - sold 3 pieces", income: "$2,400" },
        { age: 25, event: "Featured in 'Emerging Artists' magazine", income: "$15,000/year" },
        { age: 28, event: "Moved to Paris, studied under master painters", income: "$28,000/year" },
        { age: 32, event: "Breakthrough piece 'Soul Fragments' sells for $50,000", income: "$75,000/year" },
        { age: 36, event: "Opened your own gallery and art school", income: "$120,000/year" },
        { age: 40, event: "Published art book 'Colors of the Heart'", income: "$180,000/year" },
        { age: 45, event: "Retrospective at Museum of Modern Art", income: "$250,000/year" },
        { age: 50, event: "Established art foundation for underprivileged youth", income: "$300,000/year" }
      ];
      
      socialPosts = [
        { platform: "Instagram", content: "Just finished my latest piece 'Whispers of Tomorrow' - 40 hours of pure passion on canvas ✨ #ArtLife #AbstractArt", likes: "2,847", date: "2 days ago" },
        { platform: "Twitter", content: "Teaching young artists today reminded me why I chose this path. Their eyes light up when they discover their unique voice 🎨", likes: "1,203", date: "1 week ago" },
        { platform: "Facebook", content: "Grateful for this journey. From struggling artist to gallery owner - dreams do come true with persistence ❤️", likes: "892", date: "2 weeks ago" }
      ];
      
      letters = [
        {
          age: 35,
          content: "Dear past self, I know you're scared about leaving your stable job to pursue art. But trust me - that leap of faith will be the best decision you ever make. The struggles will be real, but so will the joy of creating something that moves people's souls. Your art will touch lives in ways you can't imagine right now."
        },
        {
          age: 45,
          content: "The gallery opening was incredible! Seeing people connect with your art, seeing tears in their eyes as they stand before 'Eternal Dance' - this is why we chose this path. Mom and Dad finally understand now. They're so proud, and honestly, so am I."
        }
      ];
    } else if (isTravel) {
      baseStory = `In this alternate reality, you became a world traveler and travel blogger. You've visited over 80 countries, documenting unique cultures and hidden gems. Your blog 'Wandering Soul' has over 2 million subscribers, and you've published three bestselling travel books. You've learned 6 languages, made lifelong friends across continents, and your photography has been featured in National Geographic. You've turned your wanderlust into a thriving business, leading small group tours to off-the-beaten-path destinations.`;
      
      timeline = [
        { age: 23, event: "First solo backpacking trip across Southeast Asia", income: "Savings: $8,000" },
        { age: 26, event: "Started travel blog, gained 10K followers", income: "$12,000/year" },
        { age: 29, event: "First book 'Roads Less Traveled' published", income: "$45,000/year" },
        { age: 33, event: "National Geographic featured your photography", income: "$85,000/year" },
        { age: 37, event: "Launched boutique travel company", income: "$150,000/year" },
        { age: 42, event: "Third book becomes international bestseller", income: "$280,000/year" },
        { age: 47, event: "Travel documentary wins Emmy award", income: "$400,000/year" }
      ];
    } else {
      // Default entrepreneurial path
      baseStory = `In this reality, you took the entrepreneurial leap and started your own company. What began as a small startup in your garage has grown into a successful business that employs over 200 people. You've revolutionized your industry with innovative solutions, been featured on magazine covers, and spoken at major conferences worldwide. Your company went public last year, and you're now focused on mentoring the next generation of entrepreneurs while expanding into new markets.`;
      
      timeline = [
        { age: 24, event: "Launched startup from garage with $5,000", income: "-$15,000" },
        { age: 27, event: "First major client contract secured", income: "$85,000/year" },
        { age: 31, event: "Series A funding round - $2M raised", income: "$150,000/year" },
        { age: 35, event: "Expanded to 3 cities, 50 employees", income: "$300,000/year" },
        { age: 39, event: "Featured on Forbes '40 Under 40' list", income: "$500,000/year" },
        { age: 43, event: "Company IPO - valued at $500M", income: "$2,000,000/year" },
        { age: 48, event: "Launched venture capital fund", income: "$5,000,000/year" }
      ];
    }
    
    return {
      story: baseStory,
      timeline,
      socialPosts,
      letters,
      imagePrompt: isArtistic ? "Artist in a bright, paint-splattered studio surrounded by colorful canvases" : 
                   isTravel ? "Travel blogger taking photos at a stunning mountain vista" :
                   "Successful entrepreneur in a modern office overlooking the city",
      videoPrompt: isArtistic ? "Time-lapse of creating a masterpiece painting" :
                   isTravel ? "Montage of breathtaking travel destinations" :
                   "Day in the life of a successful CEO"
    };
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              WhatIfNow
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the infinite possibilities of paths not taken. Enter a life decision you never made and witness the alternate reality unfold.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white">What If You Had...</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Describe your alternate life decision
                </label>
                <textarea
                  value={decision}
                  onChange={(e) => setDecision(e.target.value)}
                  placeholder="e.g., What if I had become a professional artist instead of an accountant?"
                  className="w-full h-32 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                />
              </div>
              
              <button
                onClick={generateAlternateLife}
                disabled={!decision.trim() || isGenerating}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Generating Reality...</span>
                  </div>
                ) : (
                  'Generate Alternate Life'
                )}
              </button>
            </div>
          </div>

          {/* Quick Examples */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Popular Explorations</h3>
            <div className="space-y-3">
              {[
                "What if I had become a professional musician?",
                "What if I had moved to Japan to teach English?",
                "What if I had started my own restaurant?",
                "What if I had become a travel blogger?",
                "What if I had pursued acting in Hollywood?"
              ].map((example, index) => (
                <button
                  key={index}
                  onClick={() => setDecision(example)}
                  className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-gray-300 hover:text-white"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Content */}
        {hasGenerated && generatedContent && (
          <div className="mt-12 space-y-8">
            {/* Alternate Life Story */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Your Alternate Story</h3>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg border border-blue-400/50 text-blue-300 transition-all duration-300">
                  <Share className="w-4 h-4" />
                  <span>Share Story</span>
                </button>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {generatedContent.story}
              </p>
            </div>

            {/* Generated Visual Content */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Generated Image */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Image className="w-6 h-6 text-green-400" />
                    <h3 className="text-xl font-bold text-white">Life Snapshot</h3>
                  </div>
                  <button className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 hover:bg-green-500/30 rounded-lg border border-green-400/50 text-green-300 text-sm transition-all duration-300">
                    <Download className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                </div>
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex flex-col items-center justify-center p-6 border border-purple-400/30">
                  <div className="w-16 h-16 bg-purple-400/30 rounded-full flex items-center justify-center mb-4">
                    <Image className="w-8 h-8 text-purple-300" />
                  </div>
                  <p className="text-white/80 text-center font-medium">{generatedContent.imagePrompt}</p>
                  <p className="text-purple-300 text-sm mt-2">AI-Generated Visual</p>
                </div>
              </div>

              {/* AI Generated Video */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Play className="w-6 h-6 text-red-400" />
                    <h3 className="text-xl font-bold text-white">Life Clip</h3>
                  </div>
                  <button className="flex items-center space-x-2 px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded-lg border border-red-400/50 text-red-300 text-sm transition-all duration-300">
                    <Download className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                </div>
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform p-6 border border-blue-400/30">
                  <div className="w-16 h-16 bg-blue-400/30 rounded-full flex items-center justify-center mb-4 hover:bg-blue-400/50 transition-colors">
                    <Play className="w-8 h-8 text-blue-300" />
                  </div>
                  <p className="text-white/80 text-center font-medium">{generatedContent.videoPrompt}</p>
                  <p className="text-blue-300 text-sm mt-2">Click to play AI-generated video</p>
                </div>
              </div>
            </div>

            {/* Social Media Posts */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Your Alternate Social Media</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {generatedContent.socialPosts.map((post: any, index: number) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">You</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{post.platform}</p>
                        <p className="text-gray-400 text-xs">{post.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{post.content}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {Math.floor(parseInt(post.likes.replace(',', '')) * 0.1)}</span>
                      <span>🔄 {Math.floor(parseInt(post.likes.replace(',', '')) * 0.05)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Letters from Alternate Self */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Letters from Your Alternate Self</h3>
              <div className="space-y-6">
                {generatedContent.letters.map((letter: any, index: number) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-6 border border-yellow-400/30">
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-300 font-medium">Age {letter.age}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed italic">"{letter.content}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Timeline */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Life Timeline</h3>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-300">
                    Age: {currentAge}
                  </label>
                  <span className="text-sm text-gray-400">
                    Income: {generatedContent.timeline.find((t: any) => t.age <= currentAge)?.income || 'Starting out'}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="60"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-4">
                {generatedContent.timeline.map((event: any, index: number) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-l-4 transition-all duration-500 ${
                      event.age <= currentAge
                        ? 'bg-purple-500/20 border-purple-400 text-white transform scale-100'
                        : 'bg-white/5 border-gray-500 text-gray-400 transform scale-95'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-bold">Age {event.age}</span>
                        <span>{event.event}</span>
                      </div>
                      {event.income && (
                        <span className={`text-sm font-medium ${
                          event.age <= currentAge ? 'text-green-300' : 'text-gray-500'
                        }`}>
                          {event.income}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};