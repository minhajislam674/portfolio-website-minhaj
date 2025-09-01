import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ContactUi from "@/app/components/ui/ContactUi";

const meta = {
  title: "Components/Contact",
  component: ContactUi,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof ContactUi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Get in Touch",
  },
};
