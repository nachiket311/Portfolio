import { useState, useEffect, useCallback, useRef } from "react";
import FolderStructure from "../assets/FolderStructure.jpg";
import Design from "../assets/Design.jpg";
import ReadableCode from "../assets/ReadableCode.jpg"
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Perfect Folder Structure",
    image:
      FolderStructure
  },
  {
    id: 2,
    title: "Attractive and Responsive Design",
    image:
      Design
  },
  {
    id: 3,
    title: "Clean And Readable Code",
    image:
      ReadableCode
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  const total = slides.length;

  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };

  const paginate = useCallback(
    (dir) => {
      if (isAnimating) return;
      const nextIndex = (current + dir + total) % total;
      preloadImage(slides[nextIndex].image);
      setIsAnimating(true);
      setCurrent(nextIndex);
    },
    [current, isAnimating, total]
  );

  const goToSlide = (index) => {
    if (isAnimating || index === current) return;
    preloadImage(slides[index].image);
    setIsAnimating(true);
    setCurrent(index);
    resetAutoPlay();
  };

  const resetAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
  }, [total]);

  useEffect(() => {
    resetAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [resetAutoPlay]);

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 0.2,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.8,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full h-[40vh] md:h-[90vh] overflow-hidden bg-black">
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={slides[current].image}
          src={slides[current].image}
          className="absolute w-full h-full object-cover object-center"
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          onAnimationComplete={() => setIsAnimating(false)}
        />
      </AnimatePresence>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-teal-500 text-center px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {slides[current].title}
        </h1>
      </div>

      {/* Arrows */}
      <button
        onClick={() => {
          paginate(-1);
          resetAutoPlay();
        }}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-[50%]"
      >
        <i className="fas fa-angle-left"></i>
      </button>
      <button
        onClick={() => {
          paginate(1);
          resetAutoPlay();
        }}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-[50%]"
      >
        <i className="fas fa-angle-right"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-teal-500 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
