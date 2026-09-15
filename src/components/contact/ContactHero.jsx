import './ContactHero.css';

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-media" aria-hidden="true">
        <img src="/images/services-hero.jpg" alt="" />
        <div className="contact-hero-overlay" />
      </div>
      <div className="contact-hero-content">
        <h1>Connect With Us to Drive Success</h1>
        <p>
          Reach out today to discuss how we can work together to drive your business forward and
          achieve your goals.
        </p>
      </div>
    </section>
  );
}
