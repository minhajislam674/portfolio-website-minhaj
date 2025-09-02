"use client";

import { storyblokRichTextResolvers } from "@/lib/storyblokRichTextResolvers"
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";

type StoryblokRichText = {
  type: "doc";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[]; 
};

interface TextUiProps {
  text: StoryblokRichText;
  headline?: string;
}

const TextUi = ({ text, headline }: TextUiProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="w-full max-w-5xl mx-auto my-12"
    >
      {headline && (
        <h1 className="text-4xl md:text-5xl font-bold mb-8 px-6 md:px-8 text-secondary">
          {headline}
        </h1>
      )}
      <div className="px-6 md:px-8 text-white tracking-wide">
        {render(text, storyblokRichTextResolvers)}
      </div>
    </motion.div>
  );
};

export default TextUi;