import { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import ServicesContactForm from '../components/services/ServicesContactForm';

export default function Services() {
  useEffect(() => {
    document.title = 'Services | Auguste Ventures';
  }, []);

  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesGrid />
      <ServicesContactForm />
    </div>
  );
}
