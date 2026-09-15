export const ARTICLES = [
  {
    slug: 'boosting-growth-through-operational-optimization',
    title: 'Boosting Growth Through Operational Optimization',
    dateLabel: 'Posted on August 01, 2025',
    image: '/images/article-operations.jpg',
    excerpt:
      'Focusing on operational efficiency involves dissecting your current processes and pinpointing areas that cause ...',
    paragraphs: [
      'Focusing on operational efficiency involves dissecting your current processes and pinpointing areas that cause delay, waste, or confusion. When teams spend too much time on work that does not move the business forward, growth slows even if demand is strong.',
      'Start by mapping how work actually moves through the company, not how it is described in a handbook. Look for handoffs that stall, reports that nobody uses, and approvals that add days without adding value. Those friction points are usually the fastest places to recover time and cost.',
      'Once the bottlenecks are clear, redesign the workflow around outcomes. Standardize the steps that should be consistent, automate the tasks that are repetitive, and give owners the authority to resolve issues without waiting for a long chain of sign-off.',
      'At Auguste Ventures, operational optimization is treated as a growth strategy, not a cost-cutting exercise. Leaner processes free leaders to spend more time with customers, improve delivery, and scale without adding unnecessary complexity.',
    ],
  },
  {
    slug: 'innovate-your-business-with-ai-driven-strategic-planning',
    title: 'Innovate Your Business With AI-Driven Strategic Planning',
    dateLabel: 'Posted on July 30, 2025',
    image: '/images/article-ai-planning.jpg',
    excerpt:
      'Current AI research is profoundly impacting how businesses across various sectors formulate and refine their strategies. ...',
    paragraphs: [
      'Current AI research is profoundly impacting how businesses across various sectors formulate and refine their strategies. Leaders no longer have to wait for quarterly reports to understand what is changing in the market, the customer base, or internal performance.',
      'Used well, AI helps teams test scenarios faster, spot patterns in messy data, and compare options with more confidence. The value is not in replacing judgment. It is in giving decision-makers a clearer picture before they commit time, budget, and people.',
      'The companies that benefit most start with a specific planning question: where to grow, what to stop, which risks matter, or how to allocate resources. From there, they bring in the right data, set guardrails, and turn model output into a plan the organization can actually execute.',
      'Auguste Ventures helps businesses use AI-driven research as a practical planning tool. The goal is a strategy that is easier to explain, faster to update, and more closely tied to the numbers that drive results.',
    ],
  },
];

export function getArticle(slug) {
  return ARTICLES.find((article) => article.slug === slug);
}
