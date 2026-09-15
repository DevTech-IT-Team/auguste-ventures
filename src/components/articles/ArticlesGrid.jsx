import { ARTICLES } from '../../data/articles';
import ArticleCard from './ArticleCard';
import './ArticlesGrid.css';

export default function ArticlesGrid() {
  return (
    <section className="articles-grid-wrap">
      <div className="articles-grid">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
