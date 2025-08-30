"use client";

import { storyblokRichTextResolvers } from "@/lib/storyblokRichTextResolvers"
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";

type StoryblokRichText = {
  type: "doc";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[]; 
};

interface TextImageUiProps {
  text: StoryblokRichText;
  headline?: string;
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "top" | "bottom";
}
const TextImageUi = ({
  text,
  headline,
  imageUrl,
  imageAlt,
  imagePosition = "left",
}: TextImageUiProps) => {
  const isHorizontal = imagePosition === "left" || imagePosition === "right";

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
      className="w-full max-w-5xl mx-auto"
    >
      {headline && (
        <h1 className="text-5xl font-bold my-8 text-secondary px-18">
          {headline}
        </h1>
      )}

      <div
        className={`flex ${
          isHorizontal ? "flex-col md:flex-row" : "flex-col"
        } gap-8 px-6 mx-12`}
      >
        {/* Image */}
        {(imagePosition === "top" || imagePosition === "left") && (
          <div className={`${isHorizontal ? "md:w-1/2" : "w-full"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto rounded-xl object-cover p-12"
            />
          </div>
        )}

        {/* Text */}
        <div className={`${isHorizontal ? "md:w-1/2" : "w-full"} text-white`}>
          {render(text, storyblokRichTextResolvers)}
        </div>

        {(imagePosition === "bottom" || imagePosition === "right") && (
          <div className={`${isHorizontal ? "md:w-1/2" : "w-full"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-auto h-auto rounded-xl object-cover p-12"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TextImageUi;