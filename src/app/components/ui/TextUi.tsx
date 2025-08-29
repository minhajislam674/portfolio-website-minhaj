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
      className="w-full max-w-4xl mx-auto"
    >
         {headline && <h1 className="text-5xl font-bold my-10 px-4 lg:px-0 text-secondary">{headline}</h1>}
        <div className="px-4 lg:px-0 text-white overflow-hidden">
        
        {render(text, storyblokRichTextResolvers)}
        </div>
  </motion.div>
  );
};

export default TextUi;