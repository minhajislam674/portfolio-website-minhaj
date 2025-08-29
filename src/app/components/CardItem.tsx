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
      />

    </div>
    );
};

export default CardItem;