// components/Footer.tsx
import React from "react";

export const Footer = () => {
  return (
    <>
     <footer className="bottom-0 left-0 w-full bg-white text-black h-28">
        <div className=" w-full bg-gray-200 shadow-md h-0.5" />
        <div className="w-10/12 mx-auto">
          <div className="md:flex justify-center md:justify-between pt-5">
            <p className="font-montserrat text-sm text-black md:justify-end text-left">
              <span className="font-bold text-lg">
                ©{new Date().getFullYear()}. Minhaj Islam
              </span>
              <br />
              Coded and designed with 💙 by Minhaj Islam
            </p>

            <div className="text-md flex flex-row gap-3">
              <p>Lets get in touch.</p>
              <a
                className="underline hover:text-blue"
                href="https://www.linkedin.com/in/minhajislam/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="underline hover:text-blue"
                href="https://github.com/minhajislam674/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="underline hover:text-blue"
                href="https://www.instagram.com/minhajtakim/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
