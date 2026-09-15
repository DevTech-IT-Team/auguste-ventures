import './ArticlesHero.css';

export default function ArticlesHero() {
  return (
    <section className="articles-hero">
      <div className="articles-hero-media" aria-hidden="true">
        <img src="/images/services-hero.jpg" alt="" />
        <div className="articles-hero-overlay" />
      </div>
      <div className="articles-hero-content">
        <h1>Insights and Strategies for Business Success</h1>
        <p>
          Read our expert articles filled with valuable tips, trends, and strategies to keep your
          business ahead in the market.
        </p>
      </div>
    </section>
  );
}
