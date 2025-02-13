import ReactMarkdown, { ExtraProps } from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useSection } from '../../hooks/useSection';
import './preview.css';
export const Preview = () => {
  const { defaultSections } = useSection();
  const markdown = defaultSections.map((section) => section.content).join('\n');
  return (
    <ReactMarkdown
      className="preview"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');

          return match ? (
            <SyntaxHighlighter PreTag="div" language={match[1]} {...(props as ExtraProps)} style={dracula}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        a({ node, ...props }) {
          return <a {...props} target="_blank" rel="noreferrer noopener" />;
        },
        table({ children }) {
          return (
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
              {children}
            </table>
          );
        },
        th({ children }) {
          return (
            <th
              style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', textAlign: 'left' }}
            >
              {children}
            </th>
          );
        },
        td({ children }) {
          return <td style={{ border: '1px solid #ddd', padding: '8px' }}>{children}</td>;
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};
