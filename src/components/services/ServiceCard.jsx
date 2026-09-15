import { Link } from 'react-router-dom';
import './ServiceCard.css';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <img src={service.image} alt="" className="service-card-image" />
      <h3>{service.title}</h3>
      <p>
        {service.description}{' '}
        <Link to="/contact-us" className="service-read-more">Read More</Link>
      </p>
      {service.price && <div className="service-price">{service.price}</div>}
      <Link to="/services#enquire" className="service-cta">{service.cta}</Link>
    </article>
  );
}
