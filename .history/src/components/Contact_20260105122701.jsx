import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, OrbitControls } from '@react-three/drei';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

function AnimatedTorus() {
  const torusRef = useRef();

  useFrame((state) => {
    torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
  });

  return (
    <Torus ref={torusRef} args={[1, 0.4, 16, 100]}>
      <meshStandardMaterial color="#00d9ff" wireframe />
    </Torus>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! I\'ll get back to you soon.');
    // Here you would integrate with EmailJS or your backend
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('');
    }, 3000);
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-light)', position: 'relative' }}>
      <div className="container">
        <h2 className="fade-in-up" style={{ textAlign: 'center' }}>Get In Touch</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 50px' }}>
          I'm always open to new opportunities and collaborations. 
          Let's create something amazing together!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'start' }}>
          {/* Contact Info & 3D Visual */}
          <div>
            {/* 3D Visual */}
            <div style={{ height: '300px', marginBottom: '30px' }}>
              <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <AnimatedTorus />
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>

            {/* Contact Information */}
            <div className="card" style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#00d9ff', marginBottom: '20px' }}>Contact Information</h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <FaEnvelope size={24} color="#00d9ff" />
                <div>
                  <p style={{ fontSize: '0.9rem', opacity: '0.7', marginBottom: '5px' }}>Email</p>
                  <a 
                    href="mailto:ojikutuoyindamola14@gmail.com" 
                    style={{ color: '#fff', textDecoration: 'none' }}
                  >
                    ojikutuoyindamola14@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <FaPhone size={24} color="#ff006e" />
                <div>
                  <p style={{ fontSize: '0.9rem', opacity: '0.7', marginBottom: '5px' }}>Phone</p>
                  <a 
                    href="tel:+2349021668613" 
                    style={{ color: '#fff', textDecoration: 'none' }}
                  >
                    +234 (0) 902 166 8613
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaMapMarkerAlt size={24} color="#8338ec" />
                <div>
                  <p style={{ fontSize: '0.9rem', opacity: '0.7', marginBottom: '5px' }}>Location</p>
                  <p>Ikorodu, Lagos State, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h3 style={{ color: '#00d9ff', marginBottom: '20px' }}>Connect With Me</h3>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a 
                  href="#" 
                  style={{ 
                    color: '#00d9ff', 
                    transition: 'transform 0.3s',
                    display: 'inline-block'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <FaGithub size={32} />
                </a>
                <a 
                  href="#" 
                  style={{ 
                    color: '#00d9ff', 
                    transition: 'transform 0.3s',
                    display: 'inline-block'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <FaLinkedin size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 style={{ color: '#ff006e', marginBottom: '25px' }}>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00d9ff'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00d9ff'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00d9ff'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <button 
                type="submit" 
                className="btn"
                style={{ width: '100%', margin: 0 }}
              >
                Send Message
              </button>

              {status && (
                <p style={{ 
                  marginTop: '20px', 
                  padding: '12px', 
                  background: 'rgba(0, 217, 255, 0.1)',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '8px',
                  color: '#00d9ff',
                  textAlign: 'center'
                }}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '80px', 
        paddingTop: '40px',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <p style={{ fontSize: '0.95rem' }}>
          © 2026 Mariam Ojikutu. Built with React & Three.js
        </p>
        <p style={{ fontSize: '0.85rem', marginTop: '10px', opacity: '0.6' }}>
          Turning data into insights, one project at a time.
        </p>
      </div>
    </section>
  );
};

export default Contact;
