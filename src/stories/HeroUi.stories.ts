import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import HeroUi from "../app/components/ui/HeroUi";

const meta = {
  title: "Components/Hero",
  component: HeroUi,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeroUi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  args: {
    headline: "Welcome to My Portfolio",
    subheadline: "I'm a Software Engineer",
    ctaLabel: "View Projects",
    ctaUrl: "/projects",
    secondaryLabel: "Contact Me",
    secondaryCtaUrl: "/contact",
  },
};
