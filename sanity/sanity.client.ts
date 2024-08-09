import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECTID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  apiVersion: "2024-04-15",
  useCdn: false,
};

const client = createClient(config);

export default client;