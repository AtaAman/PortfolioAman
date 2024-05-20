import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from 'next/head'
import React, { useEffect, useRef } from "react";
import profilePic from '../../public/images/profile/Profile_pic.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })

  }, [springValue, value])


  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
      <title>Aman | About me</title>
        <meta name="description" content="Aman Ata | Full-Stack Software Engineer" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light overflow-auto">
        <Layout className="pt-16">
          <AnimatedText text="Your code is an extension of yourself!" className="mb-16 !text-5xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-2xl sm:!text-!xl  sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 lg:order-2 lg:col-span-8 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About Me</h2>
              <p className="font-medium">
                Hello, I&apos;m Aman ata,  full-stack Software Engineer skilled in the MERN stack, MongoDB, Express.js, Next.js, Node.js, React.js, TypeScript, JavaScript, Tailwind CSS, HTML, and CSS. With a passion for merging design and functionality, I continuously explore inventive ways to transform client visions into digital reality. Let&apos;s create exceptional web experiences together!
              </p>

              <p className="my-4 font-medium">
              I am from Khagaria Bihar, India. With a Bachelor&apos;s of Engineering in Computer Science from Chandigarh University, I started a journey to shape the digital world through captivating and user-friendly web experiences.
              </p>
              <p className="my-4 font-medium">
              Ready to bring your web project? Whether it&apos;s a personal blog, a business website, or a web application, let&apos;s collaborate and create something remarkable together. Contact me to get started today!
              </p>
            </div>

            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid p-4 dark:bg-dark dark:border-light xl-col-span-5 lg:order-1 lg:col-span-8 md:order-1 md:col-span-8
          ">
              <div className="absolute -top-1 -right-1 -z-9 w-[101%] h-[103%] rounded-[2rem] shadow-lg dark:shadow-light shadow-black" />
              <Image src={profilePic} alt="Aman" className='w-full h-auto rounded-2xl' priority
                sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw,
              33vw' />
            </div>
            

            <div className="col-span-1 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center lg:order-3 lg:col-span-8 md:order-3">

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-4xl font-bold md:text-4xl sm:text-4xl xs:text-2xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">projects</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-4xl font-bold md:text-4xl sm:text-4xl xs:text-2xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">experience</h2>
              </div>

            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;