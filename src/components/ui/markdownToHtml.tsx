import ReactMarkdown from 'react-markdown';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import remarkGfm from 'remark-gfm';
import { H1 } from './h1';
import { H2 } from './h2';
import { H3 } from './h3';
import { P } from './p';
import { A } from './a';
import { Ul } from './ul';
import { Ol } from './ol';
import { Blockquote } from './blockquote';
import { Separator } from './separator';

interface Props {
  markdown: string;
}

const MarkdownToHtml = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: (props: ReactMarkdownProps) => <H1 {...props} />,
        h2: (props: ReactMarkdownProps) => <H2 {...props} />,
        h3: (props: ReactMarkdownProps) => <H3 {...props} />,
        p: (props: ReactMarkdownProps) => <P {...props} />,
        a: (props: ReactMarkdownProps) => (
          <A
            href={(props.node?.properties?.href as string) || '#'}
            {...props}
          />
        ),
        blockquote: (props: ReactMarkdownProps) => <Blockquote {...props} />,
        ul: (props: ReactMarkdownProps) => <Ul {...props} />,
        ol: (props: ReactMarkdownProps) => <Ol {...props} />,
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
