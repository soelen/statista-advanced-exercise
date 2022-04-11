<template>
	<a
	class="searchitem"
	:href="result.link"
	:title="date"
	>
		<img
			:src="result.teaser_image_urls[ 2 ].src"
			:srcset="srcset"
			sizes="(max-width: 600px) 480px, 800px"
			loading="lazy"
		>
		<div class="searchitem__content">
			<h3>{{ result.title }}</h3>
			<h2>{{ result.subject }}</h2>
			{{ description }}
		</div>
	</a>
</template>

<script>

import { defineComponent, computed, } from 'vue'
import { formatDistance, } from 'date-fns'
import { de, } from 'date-fns/locale'

export default defineComponent({
	setup( props ) {

		const srcset = computed( () => {
			return `${ props.result.teaser_image_urls[ 0 ].src } ${ props.result.teaser_image_urls[ 0 ].width }w,
			${ props.result.teaser_image_urls[ 1 ].src } ${ props.result.teaser_image_urls[ 1 ].width }w`;
		})
		const description = computed( () => {
			return `${ props.result.description.substr( 0, 100 ) }...`;
		})

		const date = computed( () => {
			return formatDistance(
				new Date(),
				new Date( props.result.date ),
				{locale: de },
			)
		} )
		return {
			srcset,
			description,
			date,
		}
	},
	props: [
		'result',
	]
})
</script>

<style scoped>
	.searchitem {
		display: flex;
		flex-direction: column;
		gap: var( --statista-spacer );
		margin-bottom: var( --statista-spacer-xl );
	}
	h3 {
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: bolder;
		overflow: hidden;
	}
	h2 {
		font-size: 1.25rem;
	}
	@media (min-width: 600px) {
		.searchitem {
			flex-direction: row;
		}
		img {
			width: 130px;
			height: 130px;
		}
	}

</style>
