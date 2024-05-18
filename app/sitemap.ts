import type { MetadataRoute } from "next";

import { ALPHABET } from "@/constants";

type Route = {
  url: string;
  lastModified: Date;
  changeFrequency:
    | "yearly"
    | "weekly"
    | "always"
    | "hourly"
    | "daily"
    | "monthly"
    | "never";
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ALPHABET.reduce(
    (acc: Route[], letter) => {
      const route: Route = {
        url: `https://www.nompourchat.com/nom-de-chat-en/${letter}`,
        lastModified: new Date(),
        changeFrequency: "daily",
      };

      acc.push(route);

      return acc;
    },
    [
      {
        url: `https://www.nompourchat.com/`,
        lastModified: new Date(),
        changeFrequency: "daily",
      },
    ]
  );
  return routes;
}
