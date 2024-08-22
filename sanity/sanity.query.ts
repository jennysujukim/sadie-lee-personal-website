import { groq } from "next-sanity";
import client from "./sanity.client";

const workQuery = groq`*[_type == "work"]{
  id,
  title,
  slug { current },
  type,
  year,
  keywords,
  materials,
  descriptions,
  "images": images[].asset->url
}`

const aboutQuery = groq`*[_type == "about"]{
  title,
  main,
  experience,
  education,
  awardsAndEvents,
  exhibition
}`

export async function getData() {
  const [work, about] = await Promise.all([
    client.fetch(workQuery),
    client.fetch(aboutQuery),
  ]);

  return { work, about };
}