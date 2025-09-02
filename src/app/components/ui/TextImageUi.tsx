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
  imageCaption?: string; // New prop for optional image caption
  imagePosition?: "left" | "right" | "top" | "bottom";
}

const TextImageUi = ({
  text,
  headline,
  imageUrl,
  imageAlt,
  imageCaption,
  imagePosition = "left",
}: TextImageUiProps) => {
  const isHorizontal = imagePosition === "left" || imagePosition === "right";

  // Image component with optional caption
  const ImageWithCaption = () => (
    <div className={`${isHorizontal ? "md:w-1/2" : "w-full"} px-6 md:px-8`}>
      <figure className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={imageAlt || ""}
          className="w-full h-auto rounded-lg object-cover"
        />
        {imageCaption && (
          <figcaption className="mt-2 text-base text-gray-400 italic text-center">
            {imageCaption}
          </figcaption>
        )}
      </figure>
    </div>
  );

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
        <div className="pt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 px-6 md:px-8 text-secondary">
            {headline}
          </h1>
        </div>
      )}

      <div
        className={`flex ${
          isHorizontal ? "flex-col md:flex-row" : "flex-col"
        } gap-6 md:gap-8`}
      >
        {/* Image */}
        {(imagePosition === "top" || imagePosition === "left") && <ImageWithCaption />}

        {/* Text */}
        <div className={`${isHorizontal ? "md:w-1/2" : "w-full"} px-6 md:px-8 text-white tracking-wide`}>
          {render(text, storyblokRichTextResolvers)}
        </div>

        {(imagePosition === "bottom" || imagePosition === "right") && <ImageWithCaption />}
      </div>
    </motion.div>
  );
};

export default TextImageUi;