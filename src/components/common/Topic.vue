<template>
	<div class="topic">
		<BaseIcon :name="payload.type" size="14px" :fill="fill"/>
		{{ payload.name }}
	</div>
</template>

<script lang="ts">
type TopicPayload = {
	name: string,
	type: string,
	grade: number
}

import { defineComponent } from 'vue';
import BaseIcon from './Base/BaseIcon.vue';

export default defineComponent({
	components: { BaseIcon },
	props: {
		payload: { type: Object as () => TopicPayload, default: () => ({}) },
	},
	computed: {
		fill() {
			if (this.payload.grade > 80) {
				return '#5cb85b';
			}
			if (this.payload.grade === 1) {
				return '#f0ad4e';
			}
			return '#e0e0e0';
		}
	},
	data() {
		return {};
	},
	methods: {},
});
</script>

<style lang="scss">

</style>
