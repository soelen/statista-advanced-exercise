<template>
        <div class="pos-relative searchApp__container">
		<form @submit="onSubmit">
			<input v-model="searchTerm" placeholder="Search for statistics" type="text" name="query" />
			<button class="button button--primary searchApp__submitButton">
				Search
			</button>
		</form>
        </div>
</template>

<script>

import { defineComponent, ref, defineEmits, } from 'vue'
import getSearchResults from '../composables/getSearchResults';

export default defineComponent({
	setup( props, { emit }) {

		const onSubmit = ( event ) => {
			const formData = new FormData( event.target );

			event.preventDefault();
			emit( 'query', formData.get( 'query' ) );
		};

		const searchTerm = ref( 'statista' )

		return {
			searchTerm,
			onSubmit,
		}
	},
})
</script>

<style>

</style>