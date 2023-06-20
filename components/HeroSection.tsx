"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        {/* This div section is for the image */}
        <div className="md-w-1/2 md:mt-2">
          <Image
            className="square-full shadow-2xl"
            src="/main_image.jpg"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
        {/* This div section is for the body text */}
        <div className="md-w-3/5 md:mt-2">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0"> Hi, I&apos;m Lam! </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&apos;m a full-stack data scientist |{" "}
            <a
              href="https://www.credly.com/badges/a6979767-37b9-4c4f-a6ed-bfc0b96c2c77/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              AWS-certified Solutions Architect
            </a>{" "}
            | Web3 Builder based in Tokyo, Japan. I&apos;m passionate about building products in the Web3 space.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link to="about" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
          <HiArrowDown className="text-4xl animate-bounce" size={35} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
