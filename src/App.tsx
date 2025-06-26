import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { WhatIfNow } from './components/WhatIfNow';
import { DreamDecoder } from './components/DreamDecoder';
import { MirrorLove } from './components/MirrorLove';
import { MindMirror } from './components/MindMirror';
import { GlobalMap } from './components/GlobalMap';
import { UserProvider } from './context/UserContext';
import { ParticleBackground } from './components/ParticleBackground';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Entering the MindMultiverse</h2>
          <p className="text-purple-200">Preparing your consciousness journey...</p>
        </div>
      </div>
    );
  }

  return (
    <UserProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <ParticleBackground />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main className="relative z-10">
          {currentPage === 'home' && <LandingPage setCurrentPage={setCurrentPage} />}
          {currentPage === 'whatif' && <WhatIfNow />}
          {currentPage === 'dreams' && <DreamDecoder />}
          {currentPage === 'mirror-love' && <MirrorLove />}
          {currentPage === 'dashboard' && <MindMirror />}
          {currentPage === 'global' && <GlobalMap />}
        </main>
      </div>
    </UserProvider>
  );
}

export default App;