<template>
	<section class="searchApp__results">
		<div class="panelCard padding-all-20">
			<div v-if="!results.length && !loading">
				No Results
			</div>
			<div v-if="results.length">
				Number of Results: {{ results.length }}
				<hr>
			</div>
			<SearchLoader v-if="loading" />
			<div v-for="result in results" :key="result.identifier">
				<SearchItem :result="result" />
			</div>
		</div>
	</section>
</template>

<script>

import { defineComponent, watch } from 'vue'
import SearchItem from './SearchItem';
import SearchLoader from './SearchLoader';

export default defineComponent({
	components: {
		SearchItem,
		SearchLoader,
	},
	props: [
		'results',
		'loading',
	],

})
</script>

<style>

</style>
