import { useEffect } from 'react'
import { X, ArrowRight, BookOpen, Clock, User } from 'lucide-react'
import { ArticleItem } from '../../data/articles.data'
import { Media } from '../common/Media'

interface ArticleModalProps {
  article: ArticleItem
  onClose: () => void
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog article-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close article modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header-badges">
          <span className="modal-badge">{article.category}</span>
          <span className="modal-badge secondary">
            <BookOpen size={12} /> MONARCH JOURNAL
          </span>
        </div>

        <h2 className="display modal-title">{article.title}</h2>

        <div className="modal-meta-row">
          <span>
            <User size={13} /> {article.author}
          </span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>
            <Clock size={13} /> {article.readTime}
          </span>
        </div>

        {article.kind && (
          <div className="modal-media-frame">
            <Media kind={article.kind} label={article.title} />
          </div>
        )}

        <div className="modal-body article-body-content">
          <p className="modal-quote">“{article.quote}”</p>
          {article.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="modal-cta-group">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Close Architectural Essay
          </button>
          <a className="text-link" href="#inquiry" onClick={onClose}>
            Inquire About Design Philosophy <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}
