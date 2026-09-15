import { useEffect } from 'react';
import ArticlesHero from '../components/articles/ArticlesHero';
import ArticlesGrid from '../components/articles/ArticlesGrid';
import ServicesContactForm from '../components/services/ServicesContactForm';

export default function Articles() {
  useEffect(() => {
    document.title = 'Articles | Auguste Ventures';
  }, []);

  return (
    <div className="articles-page">
      <ArticlesHero />
      <ArticlesGrid />
      <ServicesContactForm />
    </div>
  );
}
