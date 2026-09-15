import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import BookingModal from '../components/booking/BookingModal';
import './Home.css';

const CTA_SLIDES = [
  {
    image: '/images/cta-services.jpg',
    title: 'Discover Tailored Solutions for Your Business',
    text: 'Explore our expert services designed to optimize your operations, enhance your financial strategies, and foster long-term business growth.',
    cta: 'Explore Our Services',
    href: '/services',
    align: 'right',
  },
  {
    image: '/images/cta-connect.jpg',
    title: 'Let’s Connect and Drive Your Business Forward',
    text: 'Get in touch with us today to discuss how our personalized solutions can support your business’s growth and success.',
    cta: 'Contact Us Today',
    href: '/contact-us',
    align: 'center',
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    document.title = 'Auguste Ventures | Trusted Business Consulting | Las Vegas';
    const metaDescription = document.querySelector('meta[name="description"]');
    const content = 'Auguste Ventures offers expert financial literacy, AI-driven research, and operational optimization. Get tailored strategies for sustainable growth.';
    if (metaDescription) {
      metaDescription.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % CTA_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = CTA_SLIDES[slide];
  const goTo = (index) => setSlide((index + CTA_SLIDES.length) % CTA_SLIDES.length);

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <img src="/images/hero-office.jpg" alt="" className="hero-image" />
          <div className="hero-overlay" />
        </div>

        <div className="hero-contact">
          <a
            className="hero-contact-item"
            href="https://maps.google.com/?q=6130+Elton+Ave,+Las+Vegas,+Nevada,+89107"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={15} />
            6130 Elton Ave, Las Vegas, Nevada, 89107
          </a>
          <span className="hero-contact-divider" aria-hidden="true">|</span>
          <a className="hero-contact-item" href="tel:+18882792634">
            <Phone size={15} />
            (888) 279-2634
          </a>
        </div>

        <div className="hero-content">
          <div className="hero-brand">
            <img src="/images/logo.png" alt="Auguste Ventures" className="hero-logo" />
          </div>

          <h1 className="hero-headline">
            <span className="hero-lead">Where Innovation Drives Excellence in</span>
            <span className="hero-headline-break">Business</span>
          </h1>

          <div className="hero-fabs">
            <a
              className="hero-fab hero-fab-mail"
              href="mailto:info@augusteventures.com"
              aria-label="Email Auguste Ventures"
            >
              <Mail size={22} />
            </a>
            <button
              type="button"
              className="hero-fab hero-fab-cal"
              aria-label="Book a meeting"
              onClick={() => setIsBookingOpen(true)}
            >
              <CalendarDays size={22} />
            </button>
          </div>
        </div>
      </section>

      <section className="story-band">
        <div className="story-wrap">
          <article className="story-row">
            <img
              src="/images/section-whiteboard.jpg"
              alt="Team collaborating at a whiteboard"
              className="story-photo"
            />
            <div className="story-copy">
              <h2>Strategic Business Management in Las Vegas</h2>
              <p>
                At Auguste Ventures, we specialize in providing strategic business
                consulting, financial literacy, and data analytics services. Located in
                Las Vegas, NV, we serve startups, small and medium-sized enterprises,
                and large organizations, helping them optimize operations, enhance
                financial strategies, and integrate advanced technologies. Our
                personalized solutions are designed to support your growth and
                long-term success. Get in touch with us today at{' '}
                <a href="mailto:info@augusteventures.com">info@augusteventures.com</a>
                {' '}or call{' '}
                <a href="tel:+18882792634">(888) 279-2634</a>
                {' '}to learn how we can assist you.
              </p>
            </div>
          </article>

          <article className="story-row story-row-reverse">
            <div className="story-copy">
              <h2>Empowering Businesses With Data-Driven Strategies</h2>
              <p>
                We differentiate ourselves by offering tailored solutions for businesses
                of all sizes. We help clients navigate the complexities of financial data,
                foster data-driven cultures, and refine financial planning. By combining
                years of expertise in finance with cutting-edge analytics, we assist
                organizations in transforming financial challenges into sustainable
                growth opportunities. Our approach ensures each client gains the
                insights needed to make strategic, informed decisions that propel their
                business forward.
              </p>
            </div>
            <img
              src="/images/section-team.jpg"
              alt="Business professionals standing together"
              className="story-photo"
            />
          </article>
        </div>
      </section>

      <section className="newsletter-band">
        <div className="newsletter-media" aria-hidden="true">
          <img src="/images/newsletter-building.jpg" alt="" />
          <div className="newsletter-overlay" />
        </div>
        <div className="newsletter-content">
          <h2>Don&apos;t Miss Out on Success Tips</h2>
          <p>
            Join our newsletter to get expert advice, industry updates, and tailored
            business strategies delivered straight to your inbox to ensure you&apos;re
            always ahead of the curve.
          </p>
          <a
            className="subscribe-btn"
            href="mailto:info@augusteventures.com?subject=Newsletter%20Subscribe"
          >
            Subscribe
          </a>
        </div>
      </section>

      <section className="story-band story-band-last">
        <div className="story-wrap">
          <article className="story-row">
            <img
              src="/images/section-highfive.jpg"
              alt="Colleagues celebrating success in the office"
              className="story-photo"
            />
            <div className="story-copy">
              <h2>Building Sustainable Business Success</h2>
              <p>
                Auguste Ventures was founded with the mission to help businesses of
                all sizes unlock their full potential. We serve startups, SMEs, and
                established companies, guiding them through financial complexities
                and empowering them with data-driven strategies. By blending deep
                financial expertise with advanced analytics, we enable our clients to
                enhance their operations and drive growth. Our approach positions us
                as a trusted partner committed to delivering impactful, long-term
                results for every client.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={`cta-slider cta-slider-${current.align}`} aria-roledescription="carousel">
        {CTA_SLIDES.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt=""
            className={`cta-slide-image${index === slide ? ' is-active' : ''}`}
          />
        ))}
        <div className={`cta-slide-overlay cta-overlay-${current.align}`} />

        <button
          type="button"
          className="cta-arrow cta-arrow-prev"
          aria-label="Previous slide"
          onClick={() => goTo(slide - 1)}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          type="button"
          className="cta-arrow cta-arrow-next"
          aria-label="Next slide"
          onClick={() => goTo(slide + 1)}
        >
          <ChevronRight size={28} />
        </button>

        <div className={`cta-slide-content cta-align-${current.align}`}>
          <h2>{current.title}</h2>
          <p>{current.text}</p>
          <Link to={current.href} className="cta-slide-btn">{current.cta}</Link>
        </div>

        <div className="cta-dots" role="tablist" aria-label="Slider slides">
          {CTA_SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`cta-dot${index === slide ? ' is-active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
