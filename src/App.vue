<template>

  <div class="page">
    <PageHeader />
                <div class="hrPrimary--3"></div>
            <main class="page__content grid">
                <section class="responsiveSection">
                    <div class="responsiveSection__grid">
                        <SearchBar @query="onSearchBar" />
                        <SearchResults
                          :results="results"
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

    const onSearchBar = ( value ) => {
      query.value = value;
    };

    watch( query, () => {
      getSearchResults( query.value )
      .then( value => {
        results.value = value;
      })
    })

    const loading = ref( false );

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
