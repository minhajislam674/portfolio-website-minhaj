import {
    storyblokEditable,
    StoryblokServerComponent,
    type SbBlokData,
} from '@storyblok/react/rsc';


interface PageBlok extends SbBlokData {
    body?: SbBlokData[];
}

interface PageProps {
    blok: PageBlok;
}

const Page = ({ blok }: PageProps) => (
    <main {...storyblokEditable(blok)} className="my-16">
        {blok.body?.map((nestedBlok) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </main>
);

export default Page;