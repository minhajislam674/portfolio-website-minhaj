import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const Page = ({ blok }) => (
	<main {...storyblokEditable(blok)} className="my-16">
		{blok.body?.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);

export default Page;
