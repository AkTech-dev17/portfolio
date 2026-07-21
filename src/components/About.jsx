import React from 'react';

function About({ t }) {
  return (
    <section className="section">
      <h2>{t.about.title}</h2>
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{t.about.p1}</p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{t.about.p2}</p>
        <div style={{ 
          marginTop: '1rem', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          borderLeft: '4px solid var(--accent)',
          background: 'rgba(77, 226, 179, 0.05)'
        }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{t.about.goalsTitle}</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{t.about.goalsText}</p>
        </div>
      </div>
    </section>
  );
}

export default About;