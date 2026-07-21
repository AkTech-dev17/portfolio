import React from 'react';
import SocialLink from './SocialLink';

function Contact({ t }) {
  return (
    <section className="contact-section">
      <h2>{t.contact.title}</h2>
      <p style={{ marginTop: '0.5rem' }}>{t.contact.location}</p>

      <div className="social-links-container" style={{ marginTop: '2.5rem' }}>
        <SocialLink 
          platform="Email" 
          url="mailto:shwanakar34@gmail.com" 
          iconColor="#ea4335" 
          prefilledText={t.contact.emailBody}
        />
        <SocialLink 
          platform="WhatsApp" 
          url="https://wa.me/9647517645535" 
          iconColor="#25d366" 
          prefilledText={t.contact.waBody}
        />
        <SocialLink 
          platform="Telegram" 
          url="https://t.me/akarshwan" 
          iconColor="#0088cc" 
        />
      </div>
    </section>
  );
}

export default Contact;