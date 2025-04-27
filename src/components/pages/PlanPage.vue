<template>
	<div class="plan-page">
		<h1>Syllabus План\Чек-лист (mind map)</h1>
		<div class="topics-list">
			<Topic v-for="(topic, index) in topics" :key="index" :payload="topic"/>
		</div>

		<TensesTable/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Topic from '../common/Topic.vue';
import TensesTable from '../common/TensesTable.vue';

export default defineComponent({
	components: { Topic, TensesTable },
	data() {
		return {
			topics: [
				{ name: 'Страны и национальности', type: 'check', grade: 0 },
				{ name: 'Present simple', type: 'check', grade: 0 },
				{ name: 'Present Continuous', type: 'check', grade: 0 },
				{ name: 'Topic', type: 'check', grade: 100 },
				{ name: 'Topic', type: 'check', grade: 1 },
				{ name: 'Topic', type: 'check', grade: 0 },
				{ name: 'Topic', type: 'check', grade: 0 },
				{ name: 'Topic', type: 'check', grade: 0 },
				{ name: 'Topic', type: 'check', grade: 0 },
				{ name: 'Topic', type: 'check', grade: 0 },
			],
		};
	},
	methods: {},
});
</script>

<style lang="scss">
.plan-page {
	.topics-list {
		display: flex;
		flex-direction: column;
		gap: .6em;
		font-size:14px;
		color: #5c6672;
		margin:2em 0;
	}
}
</style>
