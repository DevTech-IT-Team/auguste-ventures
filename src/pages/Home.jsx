import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, LineChart, Target, Mail, Phone } from 'lucide-react';
import './Home.css';

export default function Home() {
  useEffect(() => {
    // Implement SEO best practices: Title Tags and Meta Descriptions
    document.title = "Auguste Ventures | Trusted Business Consulting | Las Vegas";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Auguste Ventures offers expert financial literacy, AI-driven research, and operational optimization. Get tailored strategies for sustainable growth.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Auguste Ventures offers expert financial literacy, AI-driven research, and operational optimization. Get tailored strategies for sustainable growth.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Unlock Innovation at Auguste Ventures!</div>
          <h1 className="hero-headline">
            Where Innovation Drives <span className="text-gradient">Excellence in Business</span>
          </h1>
          <p className="hero-subtitle">
            Auguste Ventures offers expert financial literacy, AI-driven research, and operational optimization. Get tailored strategies for sustainable growth.
          </p>
          <div className="hero-cta">
            <Link to="/services" className="btn btn-primary">
              Start Growing <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className="hero-background">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
        </div>
      </section>

      {/* Section 1 - Strategic Business Management */}
      <section className="info-section">
        <div className="info-content">
          <h2 className="info-title">Strategic Business Management in Las Vegas</h2>
          <p className="info-description">
            Based in Las Vegas, Auguste Ventures is a premier consultancy offering strategic business consulting, financial literacy, and data analytics for startups, SMEs, and large organizations. We focus on optimizing operations, strengthening financial strategy, and adopting new technology.
          </p>
          <div className="contact-actions">
            <a href="mailto:contact@augusteventures.com" className="btn btn-primary">
              <Mail size={20} /> Contact via Email
            </a>
            <a href="tel:+15551234567" className="btn btn-secondary">
              <Phone size={20} /> Call Us
            </a>
          </div>
        </div>
        <div className="info-visual glass-panel">
          <div className="mockup-chart">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
          </div>
        </div>
      </section>

      {/* Section 2 - Data-Driven Strategies */}
      <section className="info-section reverse">
        <div className="info-content">
          <h2 className="info-title">
            Empowering Businesses With <span className="text-accent">Data-Driven Strategies</span>
          </h2>
          <p className="info-description">
            Our differentiator is our tailored, data-driven solutions. We help clients interpret financial data, build a data-driven culture, and improve financial planning by pairing financial expertise with analytics to turn challenges into growth opportunities.
          </p>
        </div>
        <div className="info-visual glass-panel data-visual">
          <div className="data-network">
            <div className="node node-1"></div>
            <div className="node node-2"></div>
            <div className="node node-3"></div>
            <div className="node node-4"></div>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
        </div>
      </section>

      {/* Section 3 - Sustainable Business Success */}
      <section className="info-section centered">
        <div className="info-content">
          <h2 className="info-title">Building Sustainable Business Success</h2>
          <p className="info-description">
            Founded to help businesses of all sizes reach their potential, we guide startups, SMEs, and established companies through financial complexity with data-driven strategy. We are your long-term trusted partner for sustainable growth.
          </p>
          <div className="features-grid">
            <div className="feature-card glass-panel">
              <div className="feature-icon"><BarChart3 size={32} /></div>
              <h3>Financial Literacy</h3>
              <p className="info-description" style={{ fontSize: '1rem', margin: 0 }}>
                Demystifying complex financial data for actionable insights.
              </p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon"><LineChart size={32} /></div>
              <h3>Advanced Analytics</h3>
              <p className="info-description" style={{ fontSize: '1rem', margin: 0 }}>
                AI-driven research and modeling to propel your decisions.
              </p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon"><Target size={32} /></div>
              <h3>Operations Optimization</h3>
              <p className="info-description" style={{ fontSize: '1rem', margin: 0 }}>
                Streamlining workflows for maximum efficiency and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
