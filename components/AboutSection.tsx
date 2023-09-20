import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Python" },
  { skill: "Solidity" },
  { skill: "Python" },
  { skill: "MySQL" },
  { skill: "PostgreSQL" },
  { skill: "Airflow" },
  { skill: "Tableau" },
  { skill: "Power BI" },
  { skill: "Git" },
  { skill: "Github Actions" },
  { skill: "Linux" },
  { skill: "AWS" },
  { skill: "GCP" },
  { skill: "Docker" },
  { skill: "Pulumi" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
            <p>
              {" "}
              Hi, my name is Lam and I am an {" "}
              <span className="font-bold">analytical</span>,
              <span className="font-bold"> entrepreneurial</span>, and
              <span className="font-bold"> quadrilingual</span> Web3 Product Manager / Engineer and full-stack data scientist.
            </p>
            <br />
            <p>
              I graduated from the number 1 international MBA program (Thunderbird School of Global Management) in the world,
              focusing on Global Management in 2015. I have high analytical and interpersonal skills. I was working for
              Harley-Davidson Japan and was in charge of growing the Parts, Accessories, and General Merchandise business
              for the Japan market. Before that, I was in charge of developing the nascent after-sales fleet support program
              worldwide for Mitsubishi FUSO.
            </p>
            <br />
            <p>
              Recently, there are two things that get me going every day: listening to thought-provoking audio-books + writings,
              and talking to people in Web3 & Entrepreneurship in my own podcast on YouTube. I want to make Web3 topics
              accessible for people both inside and outside of the crypto space, and also highlight the entrepreneurial
              journey of founders in both Web2 (non-blockchain) and Web3 spaces.
            </p>
            <br />
            <p>
              I am passionate about {" "}
              <span className="font-bold text-teal-500">
                Web3, traveling, entrepreneurship, data science
              </span>{" "}
              and learning foreign languages. Currently, I live in Tokyo, Japan. 🙂
            </p>

          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, index) => {
                return <p key={index} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item.skill}</p>
              })}
            </div>
            <Image src="/ethglobaltokyo_presenting.jpg" alt="Pitching at ETHGlobal Tokyo hackathon" width={500} height={500}
              className="py-2 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
