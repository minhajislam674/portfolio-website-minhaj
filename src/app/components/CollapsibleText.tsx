import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import CollapsibleTextUi from "./ui/CollapsibleTextUi";

// Define a type for Storyblok's rich text field structure
type StoryblokRichText = {
  type: "doc";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[];
};

interface CollapsibleTextBlok extends SbBlokData {
    text: StoryblokRichText;
    headline?: string;
    collapsedLabel?: string;
}

interface CollapsibleTextProps {
    blok: CollapsibleTextBlok;
}
const CollapsibleText = ({ blok }: CollapsibleTextProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      <CollapsibleTextUi text={blok.text} headline={blok.headline} collapsedLabel={blok.collapsedLabel} />
    </div>
  );
};

export default CollapsibleText;