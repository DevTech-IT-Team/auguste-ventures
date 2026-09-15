import { Link } from 'react-router-dom';
import './ArticleCard.css';

export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <h2>
        <Link to={`/articles/${article.slug}`}>{article.title}</Link>
      </h2>
      <Link to={`/articles/${article.slug}`} className="article-card-media">
        <img src={article.image} alt="" />
      </Link>
      <p className="article-date">{article.dateLabel}</p>
      <p className="article-excerpt">{article.excerpt}</p>
      <Link to={`/articles/${article.slug}`} className="article-keep-reading">
        Keep Reading...
      </Link>
    </article>
  );
}
