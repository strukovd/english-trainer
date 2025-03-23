<template>
	<svg class="learning-progress" width="110" height="110" viewBox="0 0 130 130">
		<circle class="loader" cx="65" cy="65" r="55"></circle>
	</svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LearningProgress',
});
</script>

<style lang="scss">
.learning-progress {
	margin: 15px;

	.loader {
		stroke: #42b883;
		stroke-width: 4;
		stroke-dasharray: 14, 12, 14, 12, 14, 12, 14, 12, 14, 12, 14, 12, 14, 12, 14, 12, 14, 12, 14, 12000;
		stroke-linecap: round;
		transform-origin: center;
		transform: rotate(140deg);
		fill: transparent;

		// animation:change 5s linear infinite alternate;
	}

	@keyframes change {
		from{stroke-dasharray: 0,350;} /*0%*/
		to{stroke-dasharray: 350,350;} /*100%*/
	}
}
</style>
