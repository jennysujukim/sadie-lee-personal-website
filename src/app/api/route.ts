import { gql } from "@apollo/client";
import client from "../../../lib/client";

export async function getPosts() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          nodes {
            content
            title
          }
        }
      }
    `
  })

  return {
    data
  }
}