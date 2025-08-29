import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import CardItemUi from "@/app/components/ui/CardItemUi";

const meta = {
  title: "Components/CardItem",
  component: CardItemUi,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof CardItemUi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "OscarFlicks",
    description:
      "This is a description for the card. It can span multiple lines and gives an overview of the content.",
    image:
      "https://a.storyblok.com/f/286712667385885/2667x2134/fa078c2c7a/oscalrflicks.jpg",
    ctaLabel: "See on GitHub",
    ctaHref: "#",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
  },
};
