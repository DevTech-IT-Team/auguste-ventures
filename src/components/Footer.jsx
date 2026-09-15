import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Briefcase,
  BookOpen,
  ChevronUp,
} from 'lucide-react';
import SocialLinks from './SocialLinks';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Auguste Ventures" className="footer-logo" />
          <p>Where Innovation Drives Excellence in Business</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <Link to="/contact-us"><MessageSquare size={15} /> Send a Message</Link>
          <a href="tel:+18882792634"><Phone size={15} /> (888) 279-2634</a>
          <a href="mailto:info@augusteventures.com"><Mail size={15} /> info@augusteventures.com</a>
          <span><MapPin size={15} /> Las Vegas, NV</span>
        </div>

        <div className="footer-col">
          <h4>Expert Guidance</h4>
          <Link to="/services"><Briefcase size={15} /> Strategic Business Consulting</Link>
          <Link to="/articles"><BookOpen size={15} /> Read Our Articles</Link>
          <SocialLinks />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <Link to="/merchant-policies">Merchant Policies</Link>
          <span>|</span>
          <Link to="/legal-notice">Legal Notice</Link>
        </div>
      </div>

      <button
        type="button"
        className="back-to-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp size={22} />
      </button>
    </footer>
  );
}
