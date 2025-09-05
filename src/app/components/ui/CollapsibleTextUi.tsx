"use client";

import { storyblokRichTextResolvers } from "@/lib/storyblokRichTextResolvers"
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

type StoryblokRichText = {
  type: "doc";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[]; 
};

interface CollapsibleTextUiProps {
  text: StoryblokRichText;
  headline?: string;
  collapsedLabel?: string; // Default: "More about me"
}

const CollapsibleTextUi = ({ 
  text, 
  headline, 
  collapsedLabel = "More about me" 
}: CollapsibleTextUiProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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

      {/* Collapsible Toggle Button */}
      <div 
        onClick={toggleExpand}
        className="flex items-center justify-between cursor-pointer px-6 md:px-8 py-4 bg-primary-500 text-white hover:bg-primary-200 transition-colors duration-200 rounded-md"
      >
        <span className="font-semibold text-lg">{collapsedLabel}</span>
        <IconChevronDown 
          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          size={24} 
        />
      </div>

      {/* Collapsible Content */}
      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 px-6 md:px-8 text-white tracking-wide"
        >
          {render(text, storyblokRichTextResolvers)}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CollapsibleTextUi;