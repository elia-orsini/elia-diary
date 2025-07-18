import { client } from "@/sanity/client";
import { fetchOptions } from "@/constants/constants";
import ImageGridComponent from "@/components/ImageGridComponent";

const IMAGES = `*[_type == "imagesArchive"][]`;

export default async function IndexPage() {
  const projects = await client.fetch<any[]>(IMAGES, {}, fetchOptions);
  const media = projects[0].imageGroups.flat();

  return (
    <main className="flex h-full w-screen flex-col font-normal">
      <p className="mx-auto mt-40 text-3xl font-bold italic">Elia&apos;s Diary</p>
      <p className="mx-auto my-20 px-2 text-center text-xl font-bold">
        Just a big collection of photos meant to be taken in <i>all together</i>.
      </p>

      <ImageGridComponent media={media} year={2025} />
      <ImageGridComponent media={media} year={2024} />
    </main>
  );
}
