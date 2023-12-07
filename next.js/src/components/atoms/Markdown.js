import NextImage from "next/image"
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const LinkRenderer = ({ href, children }) => {
  const isExternal = href && (href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:'));
  const LinkComponent = isExternal ? 'a' : Link;
  return <LinkComponent className="link" href={href}>{children}</LinkComponent>
};

const Markdown = ({ level, children, components, ...props }) => {
  const HeadingComponent = level;
  const updatedComponents =
    level
      ? {
        ...components,
        p: ({ children }) => <HeadingComponent {...props}>{children}</HeadingComponent>
      }
      : components;

  return (
    <ReactMarkdown
      components={{
        a: LinkRenderer,
        li: ({ children, ordered }) => <li>{!ordered && <ListBullet />}<span>{children}</span></li>,
        ol: ({ children }) => <ol className="orderedList">{children}</ol>,
        ul: ({ children }) => <ul className="unorderedList">{children}</ul>,
        img: ({ src, alt }) => {
          const { w, h } = Object.fromEntries(new URL(src).searchParams.entries());
          return <NextImage src={src} alt={alt} width={w} height={h} />
        },
        ...updatedComponents,
      }}
      rehypePlugins={[rehypeRaw]}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
}

Markdown.h1 = (props) => <Markdown level="h1" {...props} />;
Markdown.h2 = (props) => <Markdown level="h2" {...props} />;
Markdown.h3 = (props) => <Markdown level="h3" {...props} />;
Markdown.h4 = (props) => <Markdown level="h4" {...props} />;
Markdown.h5 = (props) => <Markdown level="h5" {...props} />;
Markdown.h6 = (props) => <Markdown level="h6" {...props} />;

export default Markdown;

const ListBullet = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='31'
    height='31'
    fill='none'
    viewBox='0 0 31 31'
  >
    <path
      stroke='#2B483C'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M20.838 5.451c-1.85 0-3.11.79-3.92 1.61-.54.546-1.91.546-2.449 0-.81-.82-2.07-1.61-3.921-1.61-3.847 0-6.165 3.668-6.165 6.69 0 3.773 6.27 9.018 9.474 11.45a3.02 3.02 0 003.673 0c3.203-2.432 9.473-7.675 9.473-11.448 0-3.024-2.316-6.692-6.165-6.692z'
    ></path>
  </svg>
)