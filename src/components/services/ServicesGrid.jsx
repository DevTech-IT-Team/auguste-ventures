import { SERVICES } from '../../data/services';
import ServiceCard from './ServiceCard';
import './ServicesGrid.css';

export default function ServicesGrid() {
  return (
    <section className="services-grid-wrap">
      <h2>Business Consulting</h2>
      <div className="services-grid">
        {SERVICES.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
