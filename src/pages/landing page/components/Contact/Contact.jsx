import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Globe, Share2, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="contact-section">
      {/* Background Giant Watermark Text */}
      <div className="contact-watermark-bg" aria-hidden="true">
        QYNTA
      </div>

      <div className="contact-container">
        {/* Top Header Tag */}
        <div className="contact-header">
          <span className="contact-badge">
            Contact <ArrowUpRight size={18} className="contact-badge-icon" />
          </span>
        </div>

        {/* Main Giant Call to Action Title */}
        <div className="contact-main-content">
          <h2 className="contact-giant-heading">
            Let’s work <br />
            <span className="contact-heading-highlight">together</span>
          </h2>

          {/* Quick Action Pill Buttons */}
          <div className="contact-actions-row">
            <a 
              href="mailto:rabiyabano.dev@gmail.com" 
              className="contact-pill-btn primary"
            >
              <Mail size={20} />
              <span>rabiyabano.dev@gmail.com</span>
              <ArrowUpRight size={20} className="pill-arrow-icon" />
            </a>

            <a 
              href="tel:+919876543210" 
              className="contact-pill-btn secondary"
            >
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>

        {/* Social Media Links & Info Footer Grid */}
        <div className="contact-footer-grid">
          {/* Social Media Links Column */}
          <div className="contact-footer-col">
            <span className="contact-col-title">Socials</span>
            <div className="contact-social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <Share2 size={16} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <Send size={16} /> GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <MessageSquare size={16} /> Twitter / X
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <Globe size={16} /> Instagram
              </a>
            </div>
          </div>

          {/* Location & Local Time Column */}
          <div className="contact-footer-col">
            <span className="contact-col-title">Location & Time</span>
            <div className="contact-location-box">
              <div className="contact-location-item">
                <MapPin size={16} />
                <span>India</span>
              </div>
              <div className="contact-time-item">
                <Globe size={16} />
                <span>{currentTime || 'IST'} (GMT +5:30)</span>
              </div>
            </div>
          </div>

          {/* Copyright Column */}
          <div className="contact-footer-col copyright-col">
            <span className="contact-col-title">Version</span>
            <p className="copyright-text">All Rights reserved by ANTHA Tech @ 2026</p>
            <p className="designer-credit">Designed & Developed with Precision</p>
          </div>
        </div>

        {/* Bottom Floating "Contact for Development" Button below QYNTA watermark */}
        <div className="contact-for-dev-bar">
          <a href="mailto:rabiyabano.dev@gmail.com" className="contact-for-dev-btn">
            <span>Contact for Development</span>
            <div className="contact-dev-icon-circle">
              <ArrowUpRight size={18} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
