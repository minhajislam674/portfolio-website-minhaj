import Page from "@/app/components/Page";
import Grid from "@/app/components/Grid";
import Teaser from "@/app/components/Teaser";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Hero from "@/app/components/Hero";
import CardItem from "@/app/components/CardItem";
import Text from "@/app/components/Text";
import TextImage from "@/app/components/TextImage";
import Contact from "@/app/components/Contact";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    grid: Grid,
    teaser: Teaser,
    hero: Hero,
    cardItem: CardItem,
    text: Text,
    textImage: TextImage,
    contact: Contact,
  },
  apiOptions: {
    /** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
    region: "eu",
    /** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
    endpoint: process.env.STORYBLOK_API_BASE_URL
      ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
      : undefined,
  },
});
