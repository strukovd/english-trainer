<template>
	<section class="default-layout">
		<main>
			<router-view/>
		</main>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'DefaultLayout',
});
</script>

<style lang="scss">
.default-layout {
	margin:0 2em;
}
</style>
