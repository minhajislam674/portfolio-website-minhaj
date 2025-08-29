import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import TextImageUi from "./ui/TextImageUi";

// Define a type for Storyblok's rich text field structure
type StoryblokRichText = {
  type: "doc";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[];
};

interface TextImageBlok extends SbBlokData {
    text: StoryblokRichText;
    headline?: string;
    imageUrl: string;
    imageAlt?: string;
    imagePosition?: "left" | "right" | "top" | "bottom";
}

interface TextImageProps {
    blok: TextImageBlok;
}
const TextImage = ({ blok }: TextImageProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      <TextImageUi text={blok.text} headline={blok.headline} imageUrl={blok.imageUrl} imageAlt={blok.imageAlt} imagePosition={blok.imagePosition} />
    </div>
  );
};

export default TextImage;