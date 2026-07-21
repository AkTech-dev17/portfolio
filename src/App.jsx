import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { translations } from './data/translations';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // 🌐 Language State ('en' for English, 'ku' for Kurdish)
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  // 🎵 YouTube Player States
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerRef = useRef(null);

  // Load YouTube IFrame Player API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    if (window.YT && window.YT.Player) {
      initializePlayer();
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
    };
  }, []);

  const initializePlayer = () => {
    playerRef.current = new window.YT.Player('youtube-audio-player', {
      videoId: 'Of-cwz22lK8',
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        loop: 1,
        playlist: 'Of-cwz22lK8',
        playsinline: 1,
        enablejsapi: 1,
      },
      events: {
        onReady: () => setIsPlayerReady(true),
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
          else if (event.data === window.YT.PlayerState.PAUSED) setIsPlaying(false);
        }
      }
    });
  };

  useEffect(() => {
    if (isPlayerReady && playerRef.current) {
      if (activeTab === 'home' && isPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
        if (activeTab !== 'home') setIsPlaying(false);
      }
    }
  }, [activeTab, isPlaying, isPlayerReady]);

  const toggleAnthem = () => {
    if (!isPlayerReady) return;
    setIsPlaying(!isPlaying);
  };

  const handlePageChange = (tabName) => {
    setActiveTab(tabName);
    setMenuOpen(false);
  };

 return (
    <div className={`${darkMode ? "app dark-theme" : "app light-theme"} ${lang === 'ku' ? 'rtl-mode' : ''}`}>
      
      {/* Hidden YouTube Audio Container */}
      <div id="youtube-audio-player" style={{ display: 'none' }}></div>

      {/* Header Component */}
      <Header 
        activeTab={activeTab}
        onPageChange={handlePageChange}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
      />

      {/* Main Page Content */}
      <main className="page-content">
        {activeTab === 'home' && (
          <Home 
            t={t} 
            isPlaying={isPlaying} 
            isPlayerReady={isPlayerReady} 
            toggleAnthem={toggleAnthem} 
          />
        )}
        {activeTab === 'about' && <About t={t} />}
        {activeTab === 'skills' && <Skills t={t} />}
        {activeTab === 'experience' && <Experience t={t} />}
        {activeTab === 'projects' && <Projects t={t} />}
        {activeTab === 'contact' && <Contact t={t} />}
      </main>

      {/* Footer Component */}
      <Footer t={t} />
    </div>
  );
}

export default App;