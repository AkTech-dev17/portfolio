import React from 'react';

function Home({ t, isPlaying, isPlayerReady, toggleAnthem }) {
  return (
    <section className="hero">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        className="hero-video"
        poster="/hero.png"
      >
        <source src="/kurdistan.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>

      {/* 🎵 Floating Music Wave Controller */}
      <button 
        className={`music-toggle ${isPlaying ? 'playing' : ''}`} 
        onClick={toggleAnthem}
        style={{ opacity: isPlayerReady ? 1 : 0.5, cursor: isPlayerReady ? 'pointer' : 'not-allowed' }}
      >
        <div className="music-icon">
          {isPlaying ? (
            <div className="wave-container">
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
            </div>
          ) : (
            <span>🔇</span>
          )}
        </div>
        <span className="music-label">
          {!isPlayerReady ? t.home.loading : isPlaying ? t.home.playingAnthem : t.home.playAnthem}
        </span>
      </button>

      <div className="hero-content">
        <div className="profile-img-container">
          <img 
            src="/Ak_ProfilePic.jpg" 
            alt="Akar Shwan" 
            className="profile-img" 
            onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} 
          />
        </div>
        <h1>{t.home.title} <span className="accent">{t.home.name}</span></h1>
        <p className="subtitle">{t.home.subtitle}</p>
        <p className="bio">{t.home.bio}</p>
      </div>
    </section>
  );
}

export default Home;