<template>
	<table class="tenses-table">
		<colgroup>
			<col span="1" style="width:25%;">
			<col span="1" style="width:25%;">
			<col span="1" style="width:25%;">
			<col span="1" style="width:25%;">
		</colgroup>
		<thead>
			<tr>
				<td><div class="ceil"><BaseIcon name="circle-check" size="28" fill="#1c5180b4"/><div>Tense</div></div></td>
				<td><div class="ceil"><BaseIcon name="circle-check" size="28" fill="#14c92c"/><div>Present</div></div></td>
				<td><div class="ceil"><BaseIcon name="circle-check" size="28" fill="#14c92c"/><div>Past</div></div></td>
				<td><div class="ceil"><BaseIcon name="circle-check" size="28" fill="#14c92c"/><div>Futute</div></div></td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><div class="ceil"><BaseIcon name="circle-check" size="28" fill="#1c5180b4"/><div>Simple</div></div></td>
				<td><div class="ceil studied"><div>He <b>drives</b> a car</div></div></td>
				<td><div class="ceil studied"><div>He <b>drove</b> a car</div></div></td>
				<td><div class="ceil"><div>He <b>will drive</b> a car</div></div></td>
			</tr>
			<tr>
				<td><div class="ceil "><BaseIcon name="circle-check" size="28" fill="#1c5180b4"/><div>Continuous</div></div></td>
				<td><div class="ceil studied"><div>He <b>is driving</b> a car</div></div></td>
				<td><div class="ceil"><div></div>He <b>was driving</b> a car</div></td>
				<td><div class="ceil"><div></div>He <b>will be driving</b> a car</div></td>
			</tr>
			<tr>
				<td><div class="ceil"><BaseIcon name="circle-check" size="28" fill="#1c5180b4"/><div>Perfect</div></div></td>
				<td><div class="ceil studied"><div>He <b>has driven</b> a car</div></div></td>
				<td><div class="ceil"><div>He <b>had driven</b> a car</div></div></td>
				<td><div class="ceil"><div>He <b>will have driven</b> a car</div></div></td>
			</tr>
			<tr>
				<td><div class="ceil"><BaseIcon name="circle-check" size="28" fill="#1c5180b4"/><div>Perfect Continuous</div></div></td>
				<td><div class="ceil"><div>He <b>has been driving</b> a car since morning</div></div></td>
				<td><div class="ceil"><div>He <b>had been driving</b> a car since a 6 am.</div></div></td>
				<td><div class="ceil"><div>He <b>will have driving</b> a car at 6 am tomorrow</div></div></td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseIcon from './Base/BaseIcon.vue';

export default defineComponent({
	components: { BaseIcon },
	data() {
		return {};
	},
	methods: {},
});
</script>

<style lang="scss">
.tenses-table {
	width: 100%;
	margin:0 auto;
	max-width:750px;
	// border-collapse: collapse;
	border-spacing: .5em;
	text-align: center;

	td {
		border-radius:11px;
		padding: 1em;
		margin:1em;
		background-color: #f6f6f680;
		color: #0a214534;

		.ceil {
			display:flex;
			align-items:center;
			gap:1em;

			&.studied {
				color: #37bd37;
			}
		}

	}

	thead {
		td {
			background-color: #40db5525;
			color: #37bd37;
			font-size: 20px;
			font-weight:700;
		}
	}

	td:nth-child(1) {
		background-color: #cde8ff;
		color: #45749d;
		font-size: 20px;
		font-weight:700;
	}
}
</style>
