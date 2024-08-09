import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getWork() {
  return client.fetch(
    groq`*[_type == "work"]{
      id,
      title,
      slug { current },
      type,
      year,
      keywords,
      descriptions,
      "images": images[].asset->url
    }`
  );
}