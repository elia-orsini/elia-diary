import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { fetchOptions } from "@/constants/constants";
import { urlFor } from "@/sanity/urlFor";

const IMAGES = `*[_type == "imagesArchive"]{imageGroups[]{date, images[]{asset->{_id, metadata{lqip}, originalFilename}}, place, _key}}|order(date asc)`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await client.fetch<any[]>(IMAGES, {}, fetchOptions);
  const media = projects[0]?.imageGroups?.flat() || [];

  // Collect all images
  const images: string[] = [];

  media.forEach((m: any) => {
    if (m.images && Array.isArray(m.images)) {
      m.images.forEach((img: any) => {
        if (img.asset?._id) {
          const imageUrl = urlFor(img as any)
            .height(800)
            .url();
          const fullImageUrl = imageUrl.startsWith("http")
            ? imageUrl
            : `https://cdn.sanity.io${imageUrl}`;
          
          // Remove URL parameters (everything after ?)
          const cleanImageUrl = fullImageUrl.split('?')[0];

          images.push(cleanImageUrl);
        }
      });
    }
  });

  return [
    {
      url: "https://diary.elia-orsini.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: images,
    },
  ];
}
