import { client } from "@/sanity/client";
import { fetchOptions } from "@/constants/constants";
import ImageGridComponent from "@/components/ImageGridComponent";
import AsciiArt from "@/components/AsciiArt";
import ExperienceAscii from "@/components/Exp";

const IMAGES = `*[_type == "imagesArchive"]{imageGroups[]{date, images[]{asset->{_id, metadata{lqip}}}, place, _key}}|order(date asc)`;

export default async function IndexPage() {
  const projects = await client.fetch<any[]>(IMAGES, {}, fetchOptions);
  const media = projects[0].imageGroups.flat();

  const imageCount = media.reduce(
    (total: number, item: any) => total + (item.images ? item.images.length : 0),
    0
  );

  return (
    <main className="mb-28 flex h-full w-screen flex-col font-normal">
      <p className="mx-auto mt-28 text-3xl font-bold italic">Elia&apos;s Diary</p>
      <p className="mx-auto mt-28 px-2 text-center text-xl font-bold">
        Just a big collection of photos meant to be taken in <i>all together</i>.
      </p>
      <p className="mx-auto mt-10 px-2 text-center text-xl font-bold">
        In retrospect, a pattern emerges.
      </p>
      <p className="mx-auto mt-10 px-2 text-center text-xl font-bold italic">
        A Continuous Creation of Evidence of Existence.
      </p>

      <AsciiArt imageCount={imageCount} />

      <ImageGridComponent media={media} year={2025} />
      <ImageGridComponent media={media} year={2024} />

      <p className="mx-auto mt-14 font-bold">
        It seems like you reached the end. <i>Thank you</i>.
      </p>

      <ExperienceAscii />
    </main>
  );
}
