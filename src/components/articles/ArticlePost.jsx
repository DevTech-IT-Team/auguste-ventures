import { Link } from 'react-router-dom';
import './ArticlePost.css';

export default function ArticlePost({ article }) {
  return (
    <article className="article-post">
      <p className="article-post-date">{article.dateLabel}</p>
      <h1>{article.title}</h1>
      <img src={article.image} alt="" className="article-post-image" />
      {article.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <Link to="/articles" className="article-post-back">Back to Articles</Link>
    </article>
  );
}
