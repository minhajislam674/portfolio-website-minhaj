// components/HeroUi.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeroUiProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaUrl: string;
  ctaIcon: string;
  secondaryLabel: string;
  secondaryCtaUrl: string;
  secondaryCtaIcon?: string;
}

export default function HeroUi({
  headline,
  subheadline,
  ctaLabel,
  ctaUrl,
  secondaryLabel,
  secondaryCtaUrl,
  secondaryCtaIcon,
}: HeroUiProps) {
  return (
    <section className="">
      <div className="lg:w-3/6 xs:w-5/6 mx-auto xs:mt-16">
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
          <h1
            style={{ lineHeight: 1.5 }}
            className="font-montserrat xs:text-xl md:text-3xl text-blue-400"
          >
            {headline}
          </h1>

          <p
            style={{ lineHeight: 1.2 }}
            className="mt-5 mb-7 font-montserrat xs:text-2xl md:text-5xl leading-8 font-bold"
          >
            {subheadline}
          </p>

          <div className="flex gap-3 lg:flex-row xs:flex-col">
            <Link href={ctaUrl}>
              <button
                type="button"
                className="py-3 w-48 font-semibold md:text-xl text-white bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-md"
              >
                {ctaLabel}
              </button>
            </Link>

            <a
              href={secondaryCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 py-3 w-48 border-2 border-white font-semibold md:text-xl hover:bg-white hover:text-gray-900 transition duration-300 rounded-md"
            >
              {secondaryLabel}
              {secondaryCtaIcon && (
                <Image
                  src={secondaryCtaIcon}
                  alt="external link icon"
                  width={20}
                  height={20}
                />
              )}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
