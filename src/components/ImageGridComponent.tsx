"use client";

import { urlFor } from "@/sanity/urlFor";
import { useLayoutEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CustomImage } from "./CustomImage";

export default function ImageGridComponent({ media, year }: { media: any; year: number }) {
  const [left, setLeft] = useState(0);
  const [place, setPlace] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mediaFiltered = media
    .filter((m: any) => m.date && new Date(m.date).getFullYear() === year)
    // Reverse the array if it's the current year
    .sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (containerRef.current) {
        const container = containerRef.current.getBoundingClientRect();
        setLeft(container.left);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <div
      className={`mt-3 flex transition-opacity duration-[4000ms] ${left ? "opacity-100" : "opacity-0"}`}
    >
      <div className="sticky top-0.5 h-48 py-3 sm:top-2">
        <div
          style={{ left: `${place ? left - 132 : left - 48}px` }}
          className={`duration-400 absolute -rotate-90 text-right text-3xl font-bold transition-opacity ${left ? "opacity-100" : "opacity-0"} ${place ? "mt-[83px] w-[225px]" : ""}`}
        >
          {year}

          <AnimatePresence mode="wait">
            {place && (
              <motion.span
                key={`place-${place}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                className="text-nowrap"
              >
                , {place}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div
        ref={containerRef}
        id="imageGrid"
        className="mx-auto grid grid-cols-3 gap-2"
        onMouseLeave={() => setPlace(null)}
      >
        {mediaFiltered.map((m: any) =>
          m.images.map((img: any) => (
            <motion.div
              key={img._key}
              className="relative w-24 sm:w-48"
              onMouseEnter={() => setPlace(m.place)}
              onTouchEnd={() => setPlace(m.place)}
            >
              <CustomImage
                src={urlFor(img).height(800).url()}
                blurDataURL={urlFor(img).height(150).blur(30).url()}
                alt=""
                width={"0"}
                height={"0"}
                sizes="500px"
                className={`my-auto h-auto w-48 transition-opacity duration-500`}
              />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
