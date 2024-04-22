import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getWork() {
  return client.fetch(
    groq`*[_type == "work"]{
      _id,
      title,
      slug { current },
      type,
      year,
      keywords,
      descriptions,
      "imageUrls": images[].asset->url
    }`
  );
}