"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IconExternalLink } from "@tabler/icons-react";

interface HeroUiProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaUrl: string;
  ctaIcon?: string;
  secondaryLabel: string;
  secondaryCtaUrl: string;
  secondaryCtaIcon?: string;
  ctaOpenInNewTab?: boolean;
  secondaryCtaOpenInNewTab?: boolean;
}

export default function HeroUi({
  headline,
  subheadline,
  ctaLabel,
  ctaUrl,
  secondaryLabel,
  secondaryCtaUrl,
  secondaryCtaIcon,
  ctaOpenInNewTab,
  secondaryCtaOpenInNewTab,
}: HeroUiProps) {
  return (
    <section className="flex flex-col bg-primary-900 h-screen py-12 px-4 sm:py-16 sm:px-8 lg:py-20 lg:px-32 justify-center">
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Headline */}
          <h1
            className="font-montserrat text-lg sm:text-xl md:text-2xl text-secondary leading-relaxed"
          >
            {headline}
          </h1>

          {/* Subheadline */}
          <p
            className="mt-4 mb-8 font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug"
          >
            {subheadline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={ctaUrl}>
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3 font-semibold text-base sm:text-lg lg:text-xl text-white bg-primary-100 hover:bg-primary-500 transition duration-300 rounded-md hover:cursor-pointer"
              >
                <span className="mr-2">{ctaLabel}</span>
                {ctaOpenInNewTab && <IconExternalLink />}
              </button>
            </Link>

            <a
              href={secondaryCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-full sm:w-auto px-6 py-3 border-1 border-white font-semibold text-base sm:text-lg lg:text-xl text-white bg-primary-900 hover:bg-primary-500 transition duration-300 rounded-md"
            >
              <span className="mr-2">{secondaryLabel}</span>
              {secondaryCtaOpenInNewTab && <IconExternalLink />}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
