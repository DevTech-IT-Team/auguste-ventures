import './ServicesHero.css';

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-media" aria-hidden="true">
        <img src="/images/services-hero.jpg" alt="" />
        <div className="services-hero-overlay" />
      </div>
      <div className="services-hero-content">
        <h1>
          Expert Guidance for Your Business
          <span>Growth</span>
        </h1>
        <p>
          Explore how we help businesses optimize operations, improve financial planning, and
          drive sustainable growth through personalized strategies.
        </p>
      </div>
    </section>
  );
}
