import React from 'react';

function Skills({ t }) {
  return (
    <section className="section">
      <h2>{t.skills.title}</h2>
      <div className="skills-grid">
        {t.skills.list.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;