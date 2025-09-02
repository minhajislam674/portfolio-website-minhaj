import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';


export const metadata = {
  title: "Minhaj's Portfolio",
  description: "Showcasing my work and projects",
};

export default async function Page({ params }) {

	const { slug } = await params;

	let fullSlug = slug ? slug.join('/') : 'home';

	let sbParams = {
		version: process.env.ENVIRONMENT === 'production' ? 'published' : 'draft',
	};

	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, sbParams);

	return (
		<>
			<StoryblokStory story={data.story} />
		</>
	)
}
