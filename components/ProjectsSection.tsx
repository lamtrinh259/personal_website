import React from "react"
import Image from "next/image"
import Link from "next/link"
// import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare, BsYoutube } from "react-icons/bs"

const projects = [
  {
    name: "DCHero DAO Member Credential Portal",
    description:
      "We aim to solve the problem of DAOs and their members having to deal with \
      the complexity of managing credential formats, issuing credentials and also \
      letting external parties verify the credentials issued by the issuing DAO.",
    image: "/DCHero_homepage.png",
    github: "https://github.com/lamtrinh259/builders_weekend_hackathon",
    link: "https://excalidraw.com/#room=5e26ba06bd4aef3075d7,tMZqdHsWb_vPTfWmtssWyw",
    smart_contract_or_video: "https://blockscout.com/shibuya/address/0x0523473DA7DC648861573dAE800eDA1dC49A6B8a/contracts#address-tabs"
  },
  {
    name: "WingWallet",
    description:
      "Introducing our smart wallet - the ultimate solution for seamless crypto transactions! With our point-of-sale crypto\
      payment app, users can easily make purchases using their crypto wallet. Plus, our customizable addons allow for extended\
      capabilities such as posting transactions to Lenster and merchants converting received tokens. All designed with Safe \
      Core SDK and Web3Auth for top-notch user experience.",
    image: "/WingWallet.png",
    github: "https://github.com/lamtrinh259/ethLisbon-PoS-complete",
    link: "https://ethglobal.com/showcase/wingwallet-point-of-sale-crypto-payment-hf435",
    smart_contract_or_video: "https://mumbai.polygonscan.com/address/0x80aa447d916aa168f8656196fa0bb2b2b84ad898#code"
  },
  {
    name: "Octoplorer",
    description:
      "For many Web3 users, we are certain that many people have heard the phrase 'the data is on the blockchain, so everybody\
      can see it.' But how many have actually tried to do it, and then realized how difficult it is to query the data on the\
      blockchain when it is more than just 1 transaction? We have created the solution for that problem: We make querying data\
      on the blockchain (for now Ethereum and Polygon mainnets) easy using AI-powered natural language understanding and a \
      friendly user interface for Web3 technology.",
    image: "/Octoplorer.jpg",
    github: "https://github.com/lamtrinh259/ETHGlobal_Tokyo_hackathon",
    link: "https://ethglobal.com/showcase/octoplorer-block-query-made-easy-pdgmt",
    smart_contract_or_video: "https://www.youtube.com/live/-rBFZ_M6DWU?feature=share&t=2845",
  },
  {
    name: "Web3 Pigeon",
    description:
      "Automating your Web3 Actions effortlessly",
    image: "/Web3Pigeon_homepage.png",
    github: "https://github.com/lamtrinh259/Web3_Pigeon",
    link: "https://web3-pigeon-frontend-60ade0.spheron.app/",
    smart_contract_or_video: "https://www.youtube.com/watch?v=jpQ4OYiFgT0",
    presentation: "https://www.figma.com/proto/ASKZQY0VqARHTJoaTBfLpH/Pigeon---ETHVietnam?node-id=236-5&scaling=contain&page-id=231%3A15",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.smart_contract_or_video} target="_blank">
                      <BsYoutube
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
