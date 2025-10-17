import ReactMarkdown from 'react-markdown';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import remarkGfm from 'remark-gfm';

interface Props {
  markdown: string;
}

const MarkdownToHtml = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: (props: ReactMarkdownProps) => (
          <h1
            {...props}
            className='text-xl font-bold mb-4 leading-tight text-secondary'
          />
        ),
        h2: (props: ReactMarkdownProps) => (
          <h2 {...props} className='text-lg font-semibold text-secondary' />
        ),
        h3: (props: ReactMarkdownProps) => (
          <h3 {...props} className='text-lg font-medium mb-4 text-secondary' />
        ),
        p: (props: ReactMarkdownProps) => (
          <p {...props} className='leading-relaxed text-foreground/90 mb-4' />
        ),
        strong: (props: ReactMarkdownProps) => (
          <strong {...props} className='text-secondary' />
        ),
        ul: (props: ReactMarkdownProps) => (
          <ul
            {...props}
            className='list-disc pl-6 mb-4 space-y-0 marker:text-secondary'
          />
        ),
        ol: (props: ReactMarkdownProps) => (
          <ol
            {...props}
            className='list-decimal pl-6 mb-4 space-y-0 marker:text-secondary'
          />
        ),
        li: (props: ReactMarkdownProps) => (
          <li {...props} className='leading-relaxed' />
        ),
        hr: () => <hr className='my-8 border-t border-border' />,
        blockquote: (props: ReactMarkdownProps) => (
          <blockquote
            {...props}
            className='border-l-4 border-primary pl-4 italic text-muted-foreground my-4'
          />
        ),
        code: (props: ReactMarkdownProps) => (
          <code
            {...props}
            className='bg-muted px-1.5 py-0.5 rounded text-sm font-mono'
          />
        ),
        pre: (props: ReactMarkdownProps) => (
          <pre
            {...props}
            className='bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm font-mono'
          />
        ),
      }}
      className='prose prose-lg max-w-none prose-headings:font-semibold prose-a:text-primary hover:prose-a:underline'
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownToHtml;
