<template>
	<header></header>
	<main>
		<router-view/>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'DefaultLayout',
});
</script>
