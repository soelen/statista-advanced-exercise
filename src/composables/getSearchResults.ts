import { ref } from 'vue';

const url = 'https://cdn.statcdn.com/static/application/search_results.json';

interface ImageUrl {
	width: number,
	src: string,
}

interface Item {
	identifier: number,
	title: string,
	link: string,
	subject: string,
	description: string,
	date: string,
	premium: number,
	image_url: string,
	teaser_image_urls: ImageUrl[],
}

const getSearchResults = ( query: string, ) => {

	const params = new URLSearchParams();
	params.set( 'query', query );

	return fetch( `${ url }?${ params.toString() }`)
	.then( response => {
		if( response.ok ) {
			return response.json();
		} else {
			throw Error( 'No Results available.' );
		}
	})
	.then( results => {
		return results.items as Item[];
	});
}

export default getSearchResults;
