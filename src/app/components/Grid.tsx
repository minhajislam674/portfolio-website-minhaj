import {
    storyblokEditable,
    StoryblokServerComponent,
    type SbBlokData,
} from '@storyblok/react/rsc';

interface GridBlok extends SbBlokData {
    columns: SbBlokData[]; 
}

interface GridProps {
    blok: GridBlok;
}

const Grid = ({ blok }: GridProps) => (
    <div {...storyblokEditable(blok)} className="grid">
        {blok.columns.map((nestedBlok) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
);

export default Grid;