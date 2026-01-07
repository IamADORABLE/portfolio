import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8338ec"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}

const About = () => {
  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'R', level: 80, category: 'Programming' },
    { name: 'Machine Learning', level: 85, category: 'AI/ML' },
    { name: 'Data Analysis', level: 90, category: 'Data Science' },
    { name: 'React', level: 80, category: 'Web Dev' },
    { name: 'SQL/PostgreSQL', level: 85, category: 'Database' },
    { name: 'Pandas/NumPy', level: 90, category: 'Data Science' },
    { name: 'TensorFlow/Scikit-learn', level: 85, category: 'AI/ML' },
    { name: 'LangChain/LLMs', level: 80, category: 'AI/ML' },
    { name: 'Streamlit/FastAPI', level: 85, category: 'Web Dev' },
    { name: 'Data Visualization', level: 88, category: 'Data Science' },
    { name: 'Git/GitHub', level: 85, category: 'Tools' },
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="fade-in-up">About Me</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Profile Picture */}
          <div className="fade-in-up" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '350px',
              height: '350px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '3px solid #00d9ff',
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
              position: 'relative'
            }}>
              <img 
                src="/images/Mariam.jpg" 
                alt="Mariam Oyindamola Ojikutu"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* About Content */}
          <div className="fade-in-up">
            <h3 style={{ color: '#00d9ff' }}>Data Scientist & AI Developer</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              I'm a passionate Data Scientist with a background in Biochemistry, specializing in 
              Machine Learning, Generative AI, and data-driven solutions. My journey from 
              laboratory science to data science has equipped me with a unique analytical 
              perspective.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              I've completed intensive training at SAIL Innovation Lab, where I built AI-powered 
              applications including intelligent Q&A systems, prediction models, and interactive 
              dashboards. I love turning complex data into actionable insights and creating 
              solutions that make an impact.
            </p>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <div className="card" style={{ flex: 1, textAlign: 'center' }}>
                <h3 style={{ color: '#00d9ff', fontSize: '2rem' }}>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="card" style={{ flex: 1, textAlign: 'center' }}>
                <h3 style={{ color: '#ff006e', fontSize: '2rem' }}>12+</h3>
                <p>Technical Skills</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div style={{ marginTop: '80px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '40px', color: '#00d9ff' }}>
            Technical Skills
          </h3>
          <div className="grid grid-3">
            {skills.map((skill, index) => (
              <div key={index} className="card">
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ fontWeight: '600' }}>{skill.name}</span>
                </div>
                <p style={{ fontSize: '0.9rem', opacity: '0.7' }}>
                  {skill.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
