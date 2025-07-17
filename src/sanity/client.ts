import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "rpto4lw1",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});