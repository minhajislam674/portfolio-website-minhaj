import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import TextUi from "./ui/TextUi";

// Define a type for Storyblok's rich text field structure
type StoryblokRichText = {
  type: "doc";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[];
};

interface TextBlok extends SbBlokData {
    text: StoryblokRichText;
    headline?: string;
}

interface TextProps {
    blok: TextBlok;
}
const Text = ({ blok }: TextProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      <TextUi text={blok.text} headline={blok.headline} />
    </div>
  );
};

export default Text;