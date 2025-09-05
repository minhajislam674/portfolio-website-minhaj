import Page from "@/app/components/Page";
import Grid from "@/app/components/Grid";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Hero from "@/app/components/Hero";
import CardItem from "@/app/components/CardItem";
import Text from "@/app/components/Text";
import TextImage from "@/app/components/TextImage";
import Contact from "@/app/components/Contact";
import CollapsibleText from "@/app/components/CollapsibleText";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    grid: Grid,
    hero: Hero,
    cardItem: CardItem,
    text: Text,
    textImage: TextImage,
    contact: Contact,
    collapsibleText: CollapsibleText,
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
