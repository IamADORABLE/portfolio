import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(0, 217, 255, 0.1)' : 'none'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href="#home" style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #00d9ff, #ff006e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none'
        }}>
          MO
        </a>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }} className="desktop-menu">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                position: 'relative'
              }}
              onMouseOver={(e) => e.target.style.color = '#00d9ff'}
              onMouseOut={(e) => e.target.style.color = '#fff'}
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn" style={{ padding: '10px 25px', margin: 0 }}>
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#00d9ff',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          background: 'rgba(10, 10, 10, 0.98)',
          borderTop: '1px solid rgba(0, 217, 255, 0.1)'
        }}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => setIsOpen(false)}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              padding: '10px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#00d9ff';
              e.target.style.paddingLeft = '20px';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#fff';
              e.target.style.paddingLeft = '10px';
            }}
          >
            {item.name}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
