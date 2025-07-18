"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react"; // Adjust import path as needed

export function CustomImage({ src, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const { blurDataURL } = props;

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  return (
    <Image
      {...props}
      src={isLoaded ? src : blurDataURL || src}
      alt={props.alt || ""}
      onLoad={handleLoadingComplete}
      unoptimized
    />
  );
}
