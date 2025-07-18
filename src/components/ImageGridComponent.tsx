"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/urlFor";
import { useLayoutEffect, useState } from "react";

export default function ImageGridComponent({ media, year }: { media: any; year: number }) {
  const [left, setLeft] = useState(0);
  const [place, setPlace] = useState(null);

  const media2025 = media.filter((media: any) => new Date(media.date).getFullYear() === year);

  useLayoutEffect(() => {
    const container = document.getElementById("imageGrid")?.getBoundingClientRect();

    if (container) {
      setLeft(container.left);
    }
  }, []);

  return (
    <div className="mt-3 flex">
      <div className="sticky top-2 h-48 py-3">
        <p
          style={{ left: `${place ? left - 132 : left - 45}px` }}
          className={`absolute -rotate-90 text-nowrap text-right text-3xl font-bold transition-opacity duration-700 ${left ? "opacity-100" : "opacity-0"} ${place ? "mt-[83px] w-[225px]" : ""}`}
        >
          {year}
          {place && `, ${place}`}
        </p>
      </div>

      <div
        id="imageGrid"
        className="mx-auto grid grid-cols-3 gap-3"
        onMouseLeave={() => setPlace(null)}
      >
        {media2025.map((m: any) =>
          m.images.map((img: any) => (
            <div key={img._key} className="w-20 sm:w-40" onMouseEnter={() => setPlace(m.place)}>
              <Image
                src={urlFor(img).height(800).url()}
                alt=""
                width={"0"}
                height={"0"}
                sizes="500px"
                className={`my-auto h-auto w-[40vw] transition-opacity duration-500`}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
