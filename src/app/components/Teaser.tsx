import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';

interface TeaserBlok extends SbBlokData {
    headline: string;
}

interface TeaserProps {
    blok: TeaserBlok;
}

const Teaser = ({ blok }: TeaserProps) => {
    return (
        <div className="teaser" {...storyblokEditable(blok)}>
            <h1>{blok.headline}</h1>
        </div>
		
    );
};

export default Teaser;