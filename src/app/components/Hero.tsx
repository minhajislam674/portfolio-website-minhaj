import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import HeroUi from './ui/HeroUi';

interface HeroBlok extends SbBlokData {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaUrl: string;
  ctaIcon: string;
  secondaryLabel: string;
  secondaryCtaUrl: string;
  secondaryCtaIcon?: string;
  ctaOpenInNewTab?: boolean;
  secondaryCtaOpenInNewTab?: boolean;
}

interface HeroProps {
    blok: HeroBlok;
}

const Hero = ({ blok }: HeroProps) => {
    return (
    <div {...storyblokEditable(blok)}>
      <HeroUi
        headline={blok.headline}
        subheadline={blok.subheadline}
        ctaLabel={blok.ctaLabel}
        ctaUrl={blok.ctaUrl}
        ctaIcon={blok.ctaIcon}
        secondaryLabel={blok.secondaryLabel}
        secondaryCtaUrl={blok.secondaryCtaUrl}
        secondaryCtaIcon={blok.secondaryCtaIcon}
        ctaOpenInNewTab={blok.ctaOpenInNewTab}
        secondaryCtaOpenInNewTab={blok.secondaryCtaOpenInNewTab}
      />

    </div>
    );
};

export default Hero;