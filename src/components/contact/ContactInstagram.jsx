import './ContactInstagram.css';

const POSTS = [
  {
    src: '/images/ig-collab.jpg',
    alt: 'Team collaborating around a table',
  },
  {
    src: '/images/ig-analytics.jpg',
    alt: 'Team reviewing analytics charts',
  },
];

export default function ContactInstagram() {
  return (
    <section className="contact-instagram">
      <div className="ig-header">
        <img src="/images/logo-av.png" alt="" className="ig-avatar" />
        <div className="ig-identity">
          <strong>AUGUSTE VENTURES</strong>
          <span>@auguste_ventures</span>
        </div>
        <dl className="ig-stats">
          <div>
            <dt>3</dt>
            <dd>Posts</dd>
          </div>
          <div>
            <dt>6</dt>
            <dd>Followers</dd>
          </div>
          <div>
            <dt>1</dt>
            <dd>Following</dd>
          </div>
        </dl>
        <a
          className="ig-follow"
          href="https://www.instagram.com/auguste_ventures"
          target="_blank"
          rel="noreferrer"
        >
          Follow
        </a>
      </div>

      <div className="ig-grid">
        {POSTS.map((post) => (
          <a
            key={post.src}
            href="https://www.instagram.com/auguste_ventures"
            target="_blank"
            rel="noreferrer"
          >
            <img src={post.src} alt={post.alt} />
          </a>
        ))}
        <a
          className="ig-brand-tile"
          href="https://www.instagram.com/auguste_ventures"
          target="_blank"
          rel="noreferrer"
          aria-label="Auguste Ventures on Instagram"
        >
          <img src="/images/logo-av.png" alt="" />
          <span>AUGUSTE VENTURES</span>
        </a>
      </div>
    </section>
  );
}
