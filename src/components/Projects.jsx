import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

function RotatingBox({ position, color }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Box ref={meshRef} position={position} args={[1, 1, 1]}>
      <meshStandardMaterial color={color} wireframe />
    </Box>
  );
}

const Projects = () => {
  const projects = [
    {
      title: 'EduGenius Platform',
      description: 'AI-powered education platform with quiz generation, tutoring, summarization, and progress monitoring.',
      tech: ['React', 'FastAPI', 'Python', 'JavaScript', 'AI/ML'],
      color: '#00d9ff',
      features: ['Quiz Generation', 'AI Tutoring', 'Summarization', 'Progress Tracking'],
      github: 'https://github.com/IamADORABLE/edugenius',
      liveDemo: 'https://edu-genius-djq9.vercel.app/',
      image: '/images/edugenius.png' 
    },
    {
      title: 'Visa Case Prediction App',
      description: 'Machine learning model to predict visa case outcomes with PostgreSQL integration and interactive visualizations.',
      tech: ['FastAPI', 'Machine Learning', 'PostgreSQL', 'Python'],
      color: '#ff006e',
      features: ['ML Prediction', 'Data Visualization', 'PostgreSQL Storage'],
      github: 'https://github.com/IamADORABLE/visa-prediction',
      liveDemo: '' // Add your live demo URL here
    },
    {
      title: 'Inflation Rate Analysis',
      description: 'Comprehensive data analysis and visualization of global inflation trends using advanced Python libraries.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      color: '#8338ec',
      features: ['Data Cleaning', 'Statistical Analysis', 'Interactive Charts'],
      github: 'https://github.com/IamADORABLE/inflation-analysis',
      liveDemo: '' // Add your live demo URL here
    },
    {
      title: 'MTN Nigeria Geocoding',
      description: 'Spatial analysis and visualization of MTN Nigeria operations using R for geocoding and mapping.',
      tech: ['R', 'Geocoding', 'Data Visualization'],
      color: '#ffd000',
      features: ['Geospatial Analysis', 'Regional Mapping', 'Data Processing'],
      github: 'https://github.com/IamADORABLE/mtn-geocoding',
      liveDemo: '' // Add your live demo URL here
    },
    {
      title: 'LangGraph PDF QA System',
      description: 'Intelligent document search and Q&A system using FAISS, HuggingFace embeddings, and Streamlit.',
      tech: ['LangChain', 'FAISS', 'HuggingFace', 'Streamlit', 'AI'],
      color: '#00ff9f',
      features: ['PDF Processing', 'Vector Search', 'AI Q&A', 'Interactive UI'],
      github: 'https://github.com/IamADORABLE/pdf-qa-system',
      liveDemo: '' // Add your live demo URL here
    },
    {
      title: 'Data Science Pipeline',
      description: 'End-to-end data science projects with data wrangling, modeling, and deployment using modern tools.',
      tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'APIs'],
      color: '#ff3864',
      features: ['Data Wrangling', 'Model Training', 'API Integration', 'Deployment'],
      github: 'https://github.com/IamADORABLE',
      liveDemo: '' // Add your live demo URL here
    }
  ];

  return (
    <section id="projects" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <h2 className="fade-in-up" style={{ textAlign: 'center' }}>Featured Projects</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 50px' }}>
          Here are some of my recent projects showcasing my expertise in Data Science, 
          Machine Learning, and AI Development
        </p>

        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div key={index} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Project Preview Image or 3D Background */}
              <div style={{ 
                height: '200px', 
                marginBottom: '20px', 
                borderRadius: '10px', 
                overflow: 'hidden',
                background: 'rgba(0,0,0,0.3)',
                position: 'relative'
              }}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                ) : (
                  <Canvas camera={{ position: [0, 0, 3] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <RotatingBox position={[0, 0, 0]} color={project.color} />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate />
                  </Canvas>
                )}
              </div>

              <h3 style={{ color: project.color, marginBottom: '15px' }}>
                {project.title}
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.7' }}>
                {project.description}
              </p>

              {/* Technologies */}
              <div style={{ marginBottom: '15px' }}>
                <p style={{ fontSize: '0.9rem', marginBottom: '10px', opacity: '0.8' }}>
                  Technologies:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      style={{
                        padding: '5px 12px',
                        background: 'rgba(0, 217, 255, 0.1)',
                        border: '1px solid rgba(0, 217, 255, 0.3)',
                        borderRadius: '15px',
                        fontSize: '0.85rem',
                        color: '#00d9ff'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <p style={{ fontSize: '0.9rem', marginBottom: '10px', opacity: '0.8' }}>
                  Key Features:
                </p>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '8px'
                }}>
                  {project.features.map((feature, i) => (
                    <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn" 
                    style={{ 
                      padding: '10px 20px', 
                      fontSize: '0.9rem',
                      borderColor: project.color,
                      color: project.color,
                      textDecoration: 'none'
                    }}
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn" 
                    style={{ 
                      padding: '10px 20px', 
                      fontSize: '0.9rem',
                      borderColor: '#ff006e',
                      color: '#ff006e',
                      textDecoration: 'none'
                    }}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
