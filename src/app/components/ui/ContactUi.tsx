"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";


interface ContactUiProps {
  headline: string;
}

export default function ContactUi({ headline }: ContactUiProps) {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-primary-900 p-12"
    >
      <div className="lg:w-3/6 xs:w-5/6 mx-auto text-left">
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
          <h1 className="font-montserrat text-5xl font-bold text-secondary">
            {headline}
          </h1>

          <p className="mt-10 mb-2 text-xl">Email me at:</p>
          <a
            href="mailto:minhajislam@outlook.de"
            className="text-xl underline hover:text-secondary"
          >
            minhajislam@outlook.de
          </a>

          <p className="mt-10 mb-2 text-xl">Find me on:</p>
          <div className="flex  gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/minhajislam//"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-75 transition"
            >
              <IconBrandLinkedin size={32} />
            </a>
            <a
              href="https://github.com/minhajislam674/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-75 transition"
            >
              <IconBrandGithub size={32} />
            </a>
        
          </div>
        </motion.div>
      </div>
    </section>
  )
}
