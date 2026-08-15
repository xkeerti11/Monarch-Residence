import { ArrowRight, BookOpen } from 'lucide-react'
import { Reveal } from '../common/Reveal'
import { Media } from '../common/Media'
import { ArticleItem, articlesData } from '../../data/articles.data'
import { trackEvent } from '../../utils/analytics'

interface JournalProps {
  onSelectArticle: (article: ArticleItem) => void
}

export function Journal({ onSelectArticle }: JournalProps) {
  return (
    <section className="section journal-section" id="journal" aria-labelledby="journal-heading">
      <div className="container">
        <Reveal className="journal-header">
          <div>
            <div className="section-label-group">
              <p className="section-label">11 / Editorial Monograph</p>
              <span className="cad-badge">
                <BookOpen size={12} /> MONARCH ARCHITECTURAL JOURNAL
              </span>
            </div>
            <h2 className="display section-heading" id="journal-heading">
              Perspectives on Design & Permanence
            </h2>
          </div>
          <p className="body-copy">
            Essays, structural analyses, and material explorations authored by our principal architects, engineers, and artisans.
          </p>
        </Reveal>

        <div className="articles-grid">
          {articlesData.map((article, index) => (
            <Reveal className="article-card" delay={index * 120} key={article.id}>
              <div className="article-media-box">
                <Media
                  kind={article.kind}
                  label={`${article.title} essay cover`}
                  className={`article-media ${article.tone}`}
                />
              </div>

              <div className="article-meta">
                <span>{article.date}</span>
                <span className="category">{article.category}</span>
              </div>

              <h3>{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>

              <button
                type="button"
                className="text-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onClick={() => {
                  onSelectArticle(article)
                  trackEvent('article_click', { title: article.title })
                }}
              >
                Read Architectural Essay <ArrowRight size={15} />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="journal-cta" delay={200}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              onSelectArticle(articlesData[0])
              trackEvent('article_read_latest', { title: articlesData[0].title })
            }}
          >
            Read Latest Lead Feature <ArrowRight size={15} />
          </button>
        </Reveal>
      </div>
    </section>
  )
}
