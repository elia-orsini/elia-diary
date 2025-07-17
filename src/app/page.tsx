import { client } from "@/sanity/client";
import { fetchOptions } from "@/constants/constants";
import Image from "next/image";
import { urlFor } from "@/sanity/urlFor";

const IMAGES = `*[_type == "diaryImages"][]`;

export default async function IndexPage() {
  const projects = await client.fetch<any[]>(IMAGES, {}, fetchOptions);
  const media = projects[0].images.flat();

  return (
    <main className="flex h-full w-screen flex-col font-normal">
      <p className="mx-auto mt-40 text-xl font-bold">Just a big collection of random photos.</p>

      <div className="mx-auto mt-40 grid grid-cols-3 gap-3">
        {media.map((m: any) => (
          <div key={m._key} className="w-20 sm:w-40">
            <Image
              src={urlFor(m.image).height(800).url()}
              alt=""
              width={"0"}
              height={"0"}
              sizes="500px"
              className={`my-auto h-auto w-[40vw] transition-opacity duration-500`}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
