import { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactHours from '../components/contact/ContactHours';
import ServicesContactForm from '../components/services/ServicesContactForm';
import ContactInstagram from '../components/contact/ContactInstagram';
import ContactMap from '../components/contact/ContactMap';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Auguste Ventures';
  }, []);

  return (
    <div className="contact-page">
      <ContactHero />
      <ContactHours />
      <ServicesContactForm />
      <ContactInstagram />
      <ContactMap />
    </div>
  );
}
