import React from 'react';

function Header({ activeTab, onPageChange, darkMode, setDarkMode, lang, setLang, menuOpen, setMenuOpen, t }) {
  return (
    <header className="navbar">
      
      {/* 1. Logo */}
      <div className="logo" onClick={() => onPageChange('home')} style={{ cursor: 'pointer' }}>
        {lang === 'ku' ? 'پۆرتفۆلیۆی ئاکار' : "Akar's Portfolio"}
      </div>
      
      {/* 2. Navigation Links (Desktop: Row, Mobile: Dropdown) */}
      <nav className={`nav-menu ${menuOpen ? 'mobile-open' : ''}`}>
        {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((tab) => (
          <button 
            key={tab}
            className={`nav-btn ${activeTab === tab ? 'active' : ''}`} 
            onClick={() => {
              onPageChange(tab);
              setMenuOpen(false); // 👈 Auto-closes the mobile menu after clicking a link
            }}
          >
            {t.nav[tab]}
          </button>
        ))}
      </nav>

      {/* 3. Controls & Hamburger */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button 
          className="theme-toggle" 
          onClick={() => setLang(lang === 'en' ? 'ku' : 'en')}
          title="Switch Language"
        >
          {lang === 'en' ? 'کوردی' : 'EN'}
        </button>

        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* 🍔 Hamburger Button (Mobile Only) */}
        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      
    </header>
  );
}

export default Header;