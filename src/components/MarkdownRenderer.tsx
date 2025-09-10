import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer = ({ content, className = '' }: MarkdownRendererProps) => {
  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Minimal styling for dark theme
          h1: ({ children }) => <h1 className="text-white mb-4 mt-6 first:mt-0">{children}</h1>,
          h2: ({ children }) => <h2 className="text-white mb-3 mt-5">{children}</h2>,
          h3: ({ children }) => <h3 className="text-white mb-2 mt-4">{children}</h3>,
          p: ({ children }) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
          strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return <code className="bg-gray-800 text-purple-300 px-1 py-0.5 rounded text-sm">{children}</code>;
            }
            return <code className={className}>{children}</code>;
          },
          a: ({ children, href }) => (
            <a href={href} className="text-purple-400 hover:text-purple-300 underline" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className="mb-4 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="mb-4 space-y-2">{children}</ol>,
          li: ({ children }) => <li className="text-gray-300 leading-relaxed">{children}</li>,
          blockquote: ({ children }) => <blockquote className="border-l-4 border-purple-400 pl-4 italic text-gray-400 mb-4">{children}</blockquote>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
