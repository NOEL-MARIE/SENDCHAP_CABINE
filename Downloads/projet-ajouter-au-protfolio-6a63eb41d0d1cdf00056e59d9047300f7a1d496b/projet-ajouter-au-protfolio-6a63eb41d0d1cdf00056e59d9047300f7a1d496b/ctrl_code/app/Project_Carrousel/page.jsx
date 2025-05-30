"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Layout from "../ui/component/layout/layout";

import { IMAGES } from "./Image";

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const thumbnailVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const App = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, IMAGES.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const onDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // seuils pour déclencher le swipe
    if (offset > 50 || velocity > 500) {
      paginate(-1);
    } else if (offset < -50 || velocity < -500) {
      paginate(1);
    }
  };

  const skipToImage = (index) => {
    if (index === imageIndex) return;
    const newDirection = index > imageIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  return (
    <div className="bg-Black_folio1 min-h-screen">
      <Layout className="w-screen h-screen">
        <motion.main
          className="h-screen flex flex-col items-center justify-center bg-Black_folio1"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="flex flex-col items-center my-6">
            <div className="relative h-[500px] w-[350px] overflow-hidden sm:h-[400px] sm:w-[300px] max-[375px]:h-[400px] max-[375px]:w-[300px] rounded-lg shadow-lg">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={page}
                  custom={direction}
                  variants={sliderVariants}
                  initial="incoming"
                  animate="active"
                  exit="exit"
                  transition={sliderTransition}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={onDragEnd}
                  src={IMAGES[imageIndex].imageSrc}
                  alt={`Image ${imageIndex + 1} of ${IMAGES.length}`}
                  className="absolute h-full w-full object-cover cursor-grab active:cursor-grabbing rounded-lg select-none"
                />
              </AnimatePresence>
            </div>

            <div className="mt-3 flex space-x-4">
              <button
                onClick={() => paginate(-1)}
                className="px-4 py-2 bg-gray-600 text-white rounded transform skew-y-[-5deg] rotate-[5deg] hover:brightness-110 active:scale-90"
                aria-label="Previous Image"
              >
                PREV
              </button>
              <button
                onClick={() => paginate(1)}
                className="px-4 py-2 bg-gray-600 text-white rounded transform skew-y-[-5deg] rotate-[5deg] hover:brightness-110 active:scale-90"
                aria-label="Next Image"
              >
                NEXT
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-4 space-x-4 max-[375px]:space-x-2">
            {IMAGES.map((image, idx) => (
              <motion.div
                key={image.id}
                onClick={() => skipToImage(idx)}
                className={`relative h-[120px] w-[90px] max-[375px]:h-[70px] max-[375px]:w-[50px] cursor-pointer rounded overflow-hidden ${
                  idx === imageIndex ? "ring-4 ring-purple-500" : ""
                }`}
                variants={thumbnailVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.15 }}
                aria-label={`Thumbnail image ${idx + 1}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    skipToImage(idx);
                  }
                }}
              >
                <img
                  src={image.imageSrc}
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover object-center"
                  draggable={false}
                />
                <div
                  className={`absolute top-0 left-0 h-full w-full pointer-events-none bg-gray-700 transition-transform duration-[1000ms] ease-[cubic-bezier(0.56,0.03,0.12,1.04)] origin-left transform ${
                    idx === imageIndex ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </motion.main>
      </Layout>
    </div>
  );
};

export default App;
