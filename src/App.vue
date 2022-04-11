<template>

  <div class="page">
    <PageHeader />
    <div class="hrPrimary--3"></div>
    <main class="page__content grid">
      <section class="responsiveSection">
        <div class="responsiveSection__grid">
          <SearchBar
            :loading="loading"
            @query="onSearchBar"
          />
          <SearchResults
            :results="results"
            :loading="loading"
          />
        </div>
      </section>
    </main>
    <PageFooter />
  </div>
</template>

<script>
import { defineComponent, ref, watch, } from 'vue'

import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import SearchBar from './components/SearchBar.vue';
import SearchResults from './components/SearchResults.vue';
import getSearchResults from './composables/getSearchResults';

export default defineComponent({
  setup() {

    const query = ref( '' );

    const results = ref( [] );

    const loading = ref( false );

    const onSearchBar = ( value ) => {
      query.value = value;
    };

    watch( query, () => {

      loading.value = true;
      results.value = [];

      // Faking slow request with setTimeout in order to check
      // if loading feature is working correctly.
      // Not intended for production : )

      setTimeout( () => {

        getSearchResults( query.value )
        .then( value => {
          results.value = value;
          loading.value = false;
        })

      }, 500 )

    })


    return {
      onSearchBar,
      loading,
      results,
    }

  },
  components: {
    PageHeader,
    PageFooter,
    SearchBar,
    SearchResults,
  },
})
</script>

<style>
  :root {
    --statista-primary: #0f2741;
    --statista-secondary: #0b85e5;

    --statista-spacer-xxl: 48px;
    --statista-spacer-xl: 32px;
    --statista-spacer-lg: 24px;
    --statista-spacer: 16px;
    --statista-spacer-md: 16px;
    --statista-spacer-sm: 8px;
    --statista-spacer-xs: 4px;
  }
  #app {
    height: 100%;
  }
  .page__content {
      min-height: unset;
  }

  /* You can use the basic styles from statista.com here. */

  .searchApp__container {
      max-width: 600px;
      margin: 20px auto;
  }
  .searchApp__submitButton {
      position: absolute;
      margin: 0;
      right: 0;
      top: 0;
  }
  .searchApp__results {
      max-width: 600px;
      margin: 20px auto;
  }
</style>
