import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const ALL_PROJECTS = `*[_type == "project"]|order(publishedAt desc)[0...60]{title}`;
  // const allProjects = await client.fetch<IProject[]>(ALL_PROJECTS, {}, fetchOptions);

  // const allProjectsPages = allProjects.map((project) => {
  //   return {
  //     url: `https://www.963.com/work/${toSlug(project.title)}`,
  //     lastModified: new Date(),
  //     priority: 0.6,
  //   };
  // });

  return [
    {
      url: "w",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // ...allProjectsPages,
  ];
}
