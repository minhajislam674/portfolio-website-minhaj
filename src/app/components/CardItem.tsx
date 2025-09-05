import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import CardItemUi from './ui/CardItemUi';

interface CardItemBlok extends SbBlokData {
  headline?: string;
  title: string;
  description: string;
  image?: string;
  ctaLabel: string;
  ctaHref: string;
  techStack?: string[];
  ctaOpenInNewTab?: boolean;
  projectType?: "professional" | "capstone" | "personal"; 
}

interface CardItemProps {
    blok: CardItemBlok;
}

const CardItem = ({ blok }: CardItemProps) => {
    return (
    <div {...storyblokEditable(blok)}>
      <CardItemUi
        headline={blok.headline}
        title={blok.title}
        description={blok.description}
        image={blok.image}
        ctaLabel={blok.ctaLabel}
        ctaHref={blok.ctaHref}
        techStack={blok.techStack}
        ctaOpenInNewTab={blok.ctaOpenInNewTab}
        projectType={blok.projectType as "professional" | "capstone" | "personal"}
      />

    </div>
    );
};

export default CardItem;