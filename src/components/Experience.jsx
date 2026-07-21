import React from 'react';

function Experience({ t }) {
  return (
    <section className="section">
      <h2>{t.experience.title}</h2>
      <div className="timeline">
        {t.experience.list.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.role}</h3>
            <span className="timeline-date">{item.organization} — {item.duration}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;