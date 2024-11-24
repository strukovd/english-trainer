<template>
	<div class="learn-page">
		<!-- TODO: Сделать возможность добавления\удаления\изучения новых слов (в хедере) -->
		<!-- TODO: Сделать возможность перетаскивание (смену приоритета) изучаемых слов, или отдельный список активно изучаемых слов, которые будут попадатся на практике -->
		<!-- TODO: Отображать прогресс изученности для каждого слова -->

		<h1 style="color:#0a2145;">Пользовательский словарь</h1>
		<table class="table-of-new-words">
			<colgroup>
				<col span="1" style="width:33%;">
				<col span="1" style="width:33%;">
				<col span="1" style="width:33%;">
			</colgroup>
			<tr v-for="word of [
				{ name: `arouse`, 				trans: `[əˈraʊz]`, 					translation: `вызывать, пробуждать` },
				{ name: `pretty`, 				trans: `[ˈprɪti]`, 					translation: `довольно-таки` },
				{ name: `grand`, 				trans: `[grænd]`, 					translation: `большой, великий` },
				{ name: `volume`, 				trans: `[ˈvɒljʊm]`, 				translation: `громкость` },
				{ name: `draw, (drew, drawn)`,	trans: `[drɔː]`, 					translation: `тянуть` },
				{ name: `coach`, 				trans: `[kəʊʧ]`, 					translation: `автобус, вагон, телега` },
				{ name: `provide`, 				trans: `[prəˈvaɪd]`, 				translation: `обеспечивать, снабжать` },
				// provider [prəˈvaɪdə] поставщик
				// provision [prəˈvɪʒən] обеспечение
				{ name: `cope with`, 			trans: `[kəʊpwɪð]`,					translation: `совладать, справиться`, },
				{ name: `condition`, 			trans: `[kənˈdɪʃən]`, 				translation: `состояние`, },
				{ name: `land`, 				trans: `[lænd]`, 					translation: `приземляться, высаживаться`, },
				{ name: `scope`, 				trans: `[skəʊp]`, 					translation: `пределы, район`, },
				{ name: `pack`, 				trans: `[pæk]`, 					translation: `пачка, связка, колода, и т. д.`, },
				// package [ˈpækɪʤ] пакет
				{ name: `craft`, 				trans: `[krɑːft]`, 					translation: `ремесло, мастерство`, },
				// craftsman [ˈkrɑːftsmən] ремесленник
				// crafty [ˈkrɑːfti] ловкий, хитрый
				{ name: `worth`, 				trans: `[wɜːθ]`, 					translation: `стоимость, стоящий`, },
				// worthy [ˈwɜːði] достойный
				{ name: `urban`, 				trans: `[ˈɜːbən]`, 					translation: `городской`, },
				// urbanization [ˌɜːb(ə)naɪˈzeɪʃ(ə)n] урбанизация
				{ name: `pond`, 				trans: `[pɒnd]`, 					translation: `пруд`, },
				{ name: `familiar`, 			trans: `[fəˈmɪliə]`, 				translation: `знакомый`, },
				// familiarity [fəˌmɪlɪˈærɪti] знакомство
				// unfamiliar [ˌʌnfəˈmɪliə] незнакомый
				// familiarize [fəˈmɪliəraɪz] ознакомиться
				{ name: `tap`, 					trans: `[tæp]`, 					translation: `стучать`, },
				{ name: `column`, 				trans: `[ˈkɒləm]`, 					translation: `столб, колонна`, },
				{ name: `guilt`, 				trans: `[gɪlt]`, 					translation: `вина`, },
			]" :key="word.name">
				<td>{{ word.name }}</td>
				<td></td>
				<td><pre>{{ String(word.translation).replace(',', '\n') }}</pre></td>
			</tr>
		</table>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LearnPage',
	data() {
		return {};
	},
	methods: {},
});
</script>

<style lang="scss">
.learn-page {
	.table-of-new-words {
		border-collapse: collapse;
		// width: 100%;

		tr {
			td {
				line-height:3em;
				&:nth-child(1) {
					text-align: center;
					color:rgb(10 33 69 / 60%);
					border:1px solid #269930;
					font-weight:600;
					background-color:#dbffdc;
					border-radius:10px;
				}
				&:nth-child(2) {
					text-align: center;
					color:#1a3155;
					background:linear-gradient(90deg, #dbffdc 0%, #f6f6f6 100%);
				}
				&:nth-child(3) {
					text-align: center;
					color:rgb(10 33 69 / 60%);;
					background-color:#f6f6f6;
					line-height:1.2em;
				}

			}
		}
	}
}
</style>
