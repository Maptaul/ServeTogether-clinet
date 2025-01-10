import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      {/* Carousel */}
      <div className="carousel rounded-lg w-full relative h-[500px]">
        {/* Slide 1 (Previously Slide 2) */}
        <div id="item1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/F0tDz35/1-1.jpg" // Image from the second slide
            className="w-full rounded-lg"
            alt="Project Overview"
          />
          <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <motion.h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 text-center px-4"
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                backgroundSize: "400% 400%",
                animation: "shimmer 2s infinite linear",
              }}
            >
              Make a difference. Join hands. Change the world.
              <br />
              <span className="text-xl font-medium">
                <Typewriter
                  words={[
                    "Manage and participate in volunteer opportunities effortlessly.",
                    "Join hands with others to create change.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </span>
            </motion.h2>
          </div>
          <a
            href="#item4"
            className="btn btn-circle btn-sm absolute left-5 top-1/2 transform -translate-y-1/2"
          >
            ❮
          </a>
          <a
            href="#item2"
            className="btn btn-circle btn-sm absolute right-5 top-1/2 transform -translate-y-1/2"
          >
            ❯
          </a>
        </div>

        {/* Slide 2 (Previously Slide 1) */}
        <div id="item2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/172M7qS/1-1.png" // Image from the first slide
            className="w-full rounded-lg"
            alt="Volunteer Management"
          />
          <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <motion.h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-center px-4"
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                backgroundSize: "400% 400%",
                animation: "shimmer 2s infinite linear",
              }}
            >
              Volunteering is not just about giving time, <br /> it's about
              creating a lasting impact.
              <br />
              <span className="text-xl font-medium">
                <Typewriter
                  words={[
                    "A platform to create, update, and join volunteer opportunities.",
                    "Make a difference with every volunteer action.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </span>
            </motion.h2>
          </div>
          <a
            href="#item4"
            className="btn btn-circle btn-sm absolute left-5 top-1/2 transform -translate-y-1/2"
          >
            ❮
          </a>
          <a
            href="#item3"
            className="btn btn-circle btn-sm absolute right-5 top-1/2 transform -translate-y-1/2"
          >
            ❯
          </a>
        </div>

        {/* Slide 3 */}
        <div id="item3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/02GT3TJ/1-4.png"
            className="w-full rounded-lg"
            alt="Create and Update Posts"
          />
          <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <motion.h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 text-center px-4"
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                backgroundSize: "400% 400%",
                animation: "shimmer 2s infinite linear",
              }}
            >
              Your time, your effort, their future.
              <br />
              <span className="text-xl font-medium">
                <Typewriter
                  words={[
                    "Share volunteer opportunities with the community.",
                    "Make your voice heard and spread the word.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </span>
            </motion.h2>
          </div>
          <a
            href="#item2"
            className="btn btn-circle btn-sm absolute left-5 top-1/2 transform -translate-y-1/2"
          >
            ❮
          </a>
          <a
            href="#item4"
            className="btn btn-circle btn-sm absolute right-5 top-1/2 transform -translate-y-1/2"
          >
            ❯
          </a>
        </div>

        {/* Slide 4 */}
        <div id="item4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/CnFWMSh/1-3.jpg"
            className="w-full rounded-lg"
            alt="Join Volunteer Efforts"
          />
          <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <motion.h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 text-center px-4"
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                backgroundSize: "400% 400%",
                animation: "shimmer 2s infinite linear",
              }}
            >
              Joining hands for a greater cause, <br /> because every volunteer
              matters.
              <br />
              <span className="text-xl font-medium">
                <Typewriter
                  words={[
                    "Be a part of meaningful projects and make a difference.",
                    "Volunteers are the backbone of every great cause.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </span>
            </motion.h2>
          </div>
          <a
            href="#item3"
            className="btn btn-circle btn-sm absolute left-5 top-1/2 transform -translate-y-1/2"
          >
            ❮
          </a>
          <a
            href="#item1"
            className="btn btn-circle btn-sm absolute right-5 top-1/2 transform -translate-y-1/2"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex w-full justify-center gap-2 py-4">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
