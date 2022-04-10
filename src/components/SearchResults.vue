<template>
	<section class="searchApp__results">
		<div class="panelCard padding-all-20">
			<div v-if="!results.length">
				No Results
			</div>
			<div v-else>
				Number of Results: {{ results.length }}
				<hr> 
			</div>
			<div v-for="result in results" :key="result.identifier">
				<SearchItem :result="result" />
			</div>
		</div>
	</section>
</template>

<script>

import { defineComponent, watch } from 'vue'
import SearchItem from './SearchItem';

export default defineComponent({
	components: {
		SearchItem,
	},
	props: [
		'results'
	],

})
</script>

<style>

</style>