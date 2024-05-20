import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

import vtube from "../../public/images/projects/vtube.png";
import currencyconverter from "../../public/images/projects/currencyconverter.png";
import carCare from "../../public/images/projects/carCare.png";
import taqwa from "../../public/images/projects/taqwa.png";
import passwordgenerator from "../../public/images/projects/passwordgenerator.png";
import todoList from "../../public/images/projects/todoList.png";
import project3 from "../../public/images/projects/project.jpg";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl shadow-2xl p-12 
    dark:bg-dark 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute -top-3 -right-2 -z-10 w-[101%] h-[103%]  rounded-[2.5rem] rounded-br-3xl 
      shadow-lg dark:shadow-light shadow-black
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer sm:ml-4  overflow-hidden rounded-lg 
        lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full  h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, 
          (max-width:1200px) 50vw,
          50vw"
        />
      </Link>

      <div
        className="w-1/2 flex sm:ml-4 flex-col items-start justify-between pl-6 
      lg:w-full lg:pl-0 lg:pt-6
      "
      >
        <span
          className="text-primary font-medium text-xl dark:text-primaryDark 
        xs:text-base
        "
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline undeline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light 
          sm:text-sm
          "
          >
            {title}
          </h2>
        </Link>
        <p
          className="my-2 font-medium text-dark 
        dark:text-light
        xm:text-sm
        "
        >
          {summary}
        </p>
        <div className="mt-2 sm:ml-2  flex tems-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
    "
    >
      <div
        className="absolute -top-2 -right-0 -z-10 w-[101%] h-[103%]  rounded-[2rem] rounded-br-3xl 
      shadow-lg dark:shadow-light shadow-black
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base
        "
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline undeline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold
          lg:text-2xl 
          "
          >
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex tems-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml-2 sm:ml-1 rounded-lg bg-dark text-light p-1.5 px-8 text-lg font-semibold 
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit
          </Link>

          <Link
            href={github}
            target="_blank"
            className="w-8
            md:w-6
            "
          >
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Aman | Projects Page</title>
        <meta
          name="description"
          content="Aman | Full-Stack Software Engineer"
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="We will either find a way, or make one!"
            className="text-center mb-16 !text-5xl
            xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-2xl sm:!text-!xl  sm:mb-8"
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32 
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0
          "
          >
            <div className="col-span-12">
              <FeaturedProjects
                title="vtube"
                img={vtube}
                summary="I have developed a production-grade VTube project using the MERN stack (MongoDB, Express.js, React, Node.js), with React Router for navigation and React Redux with Redux Toolkit (RTK) for state management. This platform allows users to watch and create videos like YouTube, featuring an integrated tweet section, the ability to like and comment on posts, infinite scrolling, channel subscriptions, and post editing. User authentication and sessions are managed with JSON Web Tokens (JWT). MongoDB’s aggregation pipeline is used for efficient data operations, ensuring a seamless and interactive user experience."
                link="https://vtube-gamma.vercel.app/"
                github="https://github.com/AtaAman/vtube"
                type="Project"
              />
            </div>
            <div
              className="col-span-6 
            sm:col-span-12"
            >
              <Project
                title="Currency converter"
                img={currencyconverter}
                summary="currency"
                link="https://charming-jalebi-a45d12.netlify.app/"
                github="https://github.com/AtaAman/currencyConvertor"
                type="Project"
              />
            </div>
            <div
              className="col-span-6 
            sm:col-span-12"
            >
              <Project
                title="CarCare"
                img={carCare}
                summary="carcare"
                link="https://carandcarewithus.netlify.app/"
                github="https://github.com/AtaAmanhttps://github.com/AtaAman/car-care"
                type="Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects
                title="Social media"
                img={taqwa}
                summary="I have developed a social media application similar to Instagram using React and TypeScript for the frontend, with Appwrite as the backend service and Cloudinary for storing image data. This app allows users to share photos and text posts, follow other users, like and comment on posts, and manage their profiles. The integration with Cloudinary ensures efficient image handling and storage, while Appwrite provides robust backend support for user authentication, database management, and real-time updates, ensuring a seamless and interactive user experience."
                link="https://al-taqwa.vercel.app/"
                github="https://github.com/AtaAman/taqwa"
                type="Featured Project"
              />
            </div>
            <div
              className="col-span-6 
            sm:col-span-12"
            >
              <Project
                title="Social media App"
                img={project3}
                summary="comming soon"
                link="https://github.com/AtaAman"
                github="https://github.com/AtaAman"
                type="React Native and MERN"
              />
            </div>
            <div
              className="col-span-6 
            sm:col-span-12"
            >
              <Project
                title="Podcast"
                img={project3}
                summary="coming soon"
                link="https://github.com/AtaAman"
                github="https://github.com/AtaAman"
                type="React native And MERN"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="Paytm"
                img={project3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="https://github.com/AtaAman"
                github="https://github.com/AtaAman"
                type="Featured Project"
              />
            </div>
            <div
              className="col-span-6 
            sm:col-span-12"
            >
              <Project
                title="password generator"
                img={passwordgenerator}
                summary="comming soon"
                link="https://generateyourpasswordwithus.netlify.app/"
                github="https://github.com/AtaAman/passwordGenerator"
                type="Project"
              />
            </div>
            <div
              className="col-span-6 
            sm:col-span-12"
            >
              <Project
                title="Todo"
                img={todoList}
                summary="coming soon"
                link="https://ataaman.github.io/To-Do-List/"
                github="https://github.com/AtaAman/To-Do-List"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
