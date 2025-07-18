"use client";

import Image from "next/image";
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
      if (year === new Date().getFullYear()) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

  year === new Date().getFullYear();

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
    <div className="mt-3 flex">
      <div className="sticky top-2 h-48 py-3">
        <div
          style={{ left: `${place ? left - 129 : left - 45}px` }}
          className={`absolute -rotate-90 text-right text-3xl font-bold transition-opacity duration-700 ${left ? "opacity-100" : "opacity-0"} ${place ? "mt-[83px] w-[225px]" : ""}`}
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
              className="relative w-20 sm:w-40"
              onMouseEnter={() => setPlace(m.place)}
            >
              <CustomImage
                src={urlFor(img).height(800).url()}
                blurDataURL={urlFor(img).height(100).blur(50).url()}
                alt=""
                width={"0"}
                height={"0"}
                sizes="500px"
                className={`my-auto h-auto w-[40vw] transition-opacity duration-500`}
              />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
