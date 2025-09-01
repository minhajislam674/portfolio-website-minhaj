import { ReactNode } from "react";
import {
  NODE_HEADING,
  NODE_PARAGRAPH,
  MARK_BOLD,
  MARK_LINK,

} from "storyblok-rich-text-react-renderer";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const storyblokRichTextResolvers: any = {
  nodeResolvers: {
    [NODE_HEADING]: (children: ReactNode, { level }: { level: number }) => {
      switch (level) {
        case 1:
          return (
            <h1 className="text-5xl font-bold my-6 text-white">{children}</h1>
          );
        case 2:
          return (
            <h2 className="text-4xl font-bold my-5 text-white">{children}</h2>
          );
        case 3:
          return (
            <h3 className="text-3xl font-bold my-4 text-white">{children}</h3>
          );
        default:
          return (
            <h4 className="text-2xl font-bold my-3 text-white">{children}</h4>
          );
      }
    },
    [NODE_PARAGRAPH]: (children: ReactNode) => {
      if (!children || (Array.isArray(children) && children.length === 0)) {
        return <p className="my-4">&nbsp;</p>;
      }
      return <p className="text-base my-4 text-xl text-white">{children}</p>;
    },
  },
  markResolvers: {
    [MARK_BOLD]: (children: ReactNode) => (
      <strong className="font-bold">{children}</strong>
    ),
    [MARK_LINK]: (children: ReactNode, { href, target }: { href?: string; target?: string }) => {
      const linkHref = href || "";
      return (
        <a
          href={linkHref}
          target={target}
          className="text-secondary hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};