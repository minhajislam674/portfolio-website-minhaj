"use client";

import { motion } from "framer-motion";
import { IconExternalLink } from "@tabler/icons-react";
interface CardItemUiProps {
  headline?: string;
  title: string;
  description: string;
  image?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaOpenInNewTab?: boolean;
  techStack?: string[];
}

const CardItemUi = ({
  headline,
  title,
  description,
  image,
  ctaLabel,
  ctaHref,
  ctaOpenInNewTab,
  techStack = [],
}: CardItemUiProps) => {
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
      {headline && <h1 className="text-5xl font-bold mx-12 mt-24 text-secondary">{headline}</h1>}
      <div className="rounded-lg overflow-hidden flex flex-col sm:flex-row my-8">
        {/* Left column: Text content */}
        <div className="p-8 lg:p-4 m-4 lg:mx-8 flex flex-col justify-center md:w-1/2">
          <div>
            <h1 className="text-2xl md:text-3xl mb-3 font-bold text-white">
              {title}
            </h1>
            <p className="text-lg text-white leading-relaxed mb-5">
              {description}
            </p>

            {techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-2 py-1 bg-white text-primary-500 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="mt-auto pt-4">
            <a
              href={ctaHref}
              className="group inline-flex items-center w-full sm:w-auto px-6 py-3 font-semibold text-base sm:text-lg lg:text-xl text-white bg-primary-100 hover:bg-primary-500 transition duration-300 rounded-md hover:cursor-pointer"
              target={ctaOpenInNewTab ? "_blank" : "_self"}
              rel={ctaOpenInNewTab ? "noopener noreferrer" : undefined}
            >
              <span className="mr-2">{ctaLabel}</span>
              {ctaOpenInNewTab && <IconExternalLink />}
            </a>
          </div>
        </div>

        {/* Right column: Image */}
        {image && (
          <div className="md:w-1/2 m-4 p-4">
            <a href={ctaHref}  className="block relative group" target={ctaOpenInNewTab ? "_blank" : "_self"} rel={ctaOpenInNewTab ? "noopener noreferrer" : undefined}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={title}
                className="w-full h-64 md:h-full object-cover hover:opacity-90 transition-opacity duration-300"
              />
              {ctaOpenInNewTab && (
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <IconExternalLink />
                </div>
              )}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CardItemUi;