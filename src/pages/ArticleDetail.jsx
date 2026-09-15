import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticle } from '../data/articles';
import ArticlePost from '../components/articles/ArticlePost';
import ServicesContactForm from '../components/services/ServicesContactForm';
import '../components/articles/ArticlePost.css';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticle(slug);

  useEffect(() => {
    document.title = article
      ? `${article.title} | Auguste Ventures`
      : 'Article | Auguste Ventures';
  }, [article]);

  if (!article) {
    return (
      <div className="article-post" style={{ padding: '4rem 1.5rem' }}>
        <h1>Article not found</h1>
        <p>The article you are looking for is not available.</p>
        <Link to="/articles">Back to Articles</Link>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <ArticlePost article={article} />
      <ServicesContactForm />
    </div>
  );
}
