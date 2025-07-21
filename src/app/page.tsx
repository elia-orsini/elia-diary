import { client } from "@/sanity/client";
import { fetchOptions } from "@/constants/constants";
import ImageGridComponent from "@/components/ImageGridComponent";
import AsciiArt from "@/components/AsciiArt";

const IMAGES = `*[_type == "imagesArchive"][]|order(date asc)`;

export default async function IndexPage() {
  const projects = await client.fetch<any[]>(IMAGES, {}, fetchOptions);
  const media = projects[0].imageGroups.flat();

  return (
    <main className="mb-28 flex h-full w-screen flex-col font-normal">
      <p className="mx-auto mt-28 text-3xl font-bold italic">Elia&apos;s Diary</p>
      <p className="mx-auto mt-28 px-2 text-center text-xl font-bold">
        Just a big collection of photos meant to be taken in <i>all together</i>.
      </p>
      <p className="mx-auto mt-10 px-2 text-center text-xl font-bold">
        In retrospect, a pattern emerges.
        <br />
        It&apos;s really all about <i>blue skies</i>, <i>trees</i>, <i>fits</i> or just{" "}
        <i>naturally beatiful things</i>.
      </p>

      <AsciiArt />

      <ImageGridComponent media={media} year={2025} />
      <ImageGridComponent media={media} year={2024} />

      <p className="mx-auto mt-14 font-bold">
        It seems like you reached the end. <i>Thank you</i>.
      </p>
    </main>
  );
}
