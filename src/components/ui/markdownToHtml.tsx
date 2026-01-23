import ReactMarkdown from 'react-markdown';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import remarkGfm from 'remark-gfm';
import { Blockquote } from './blockquote';
import { Separator } from './separator';
import Link from 'next/link';

interface Props {
  markdown: string;
}

const MarkdownToHtml = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: (props: ReactMarkdownProps) => (
          <h1 className='font-bold text-lg' {...props} />
        ),
        h2: (props: ReactMarkdownProps) => (
          <h2 className='mt-5 font-bold' {...props} />
        ),
        h3: (props: ReactMarkdownProps) => (
          <h3 className='mt-5 font-bold' {...props} />
        ),
        p: (props: ReactMarkdownProps) => <p {...props} />,
        strong: (props: ReactMarkdownProps) => <strong {...props} />,
        a: (props: ReactMarkdownProps) => (
          <Link
            href={(props.node?.properties?.href as string) || '#'}
            className='scroll-m-20 md:text-lg text-primary hover:underline'
            {...props}
          />
        ),
        blockquote: (props: ReactMarkdownProps) => <Blockquote {...props} />,
        ul: (props: ReactMarkdownProps) => (
          <ul className='ml-6 list-disc [&>li]:mt-1'>{props.children}</ul>
        ),
        ol: (props: ReactMarkdownProps) => (
          <ol className='ml-6 list-disc [&>li]:mt-1'>{props.children}</ol>
        ),
        hr: () => <Separator />,
        table: (props: ReactMarkdownProps) => (
          <div className='w-full overflow-x-auto'>
            <table className='w-full border-collapse'>{props.children}</table>
          </div>
        ),
        thead: (props: ReactMarkdownProps) => (
          <thead className='bg-muted'>{props.children}</thead>
        ),
        tbody: (props: ReactMarkdownProps) => <tbody>{props.children}</tbody>,
        tr: (props: ReactMarkdownProps) => (
          <tr className='border-t even:bg-muted'>{props.children}</tr>
        ),
        th: (props: ReactMarkdownProps) => (
          <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
            {props.children}
          </th>
        ),
        td: (props: ReactMarkdownProps) => (
          <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
            {props.children}
          </td>
        ),
      }}
      className='prose prose-lg max-w-none'
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownToHtml;
