<template>
	<div class="loader"></div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
	components: {
	},
})
</script>

<style scoped>
.loader {
  border: var( --statista-spacer) solid var( --statista-secondary );
  border-top: var( --statista-spacer ) solid white;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  animation: spin 1200ms linear infinite;
}

@keyframes spin {
  0% { transform: rotate( 0deg ); }
  100% { transform: rotate( 360deg ); }
}

</style>
