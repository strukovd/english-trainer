<template>
	<div class="learn-page">
		<h1 style="color:#0a2145;">Новые слова</h1>
		<!-- <table class="table-of-new-words">
			<colgroup>
				<col span="1" style="width:33%;">
				<col span="1" style="width:33%;">
				<col span="1" style="width:33%;">
			</colgroup>
			<tr v-for="word of words" :key="word.name">
				<td>{{ word.name }}</td>
				<td></td>
				<td><pre>{{ String(word.translation).replace(',', '\n') }}</pre></td>
			</tr>
		</table> -->

		<hr>

		<!-- Список изучаемых слов, сверху над предложениями -->
		<article class="put-correct-words">
			<header class="list-of-words-to-study">
				<div v-for="word of words" :key="word.name">{{ word.name }}</div>
				<!-- Ниже преложения в которых нужно в зависимости от контекста подставить нужное слово -->
			</header>
			<section class="example">
				<div class="sentence">Rachel is so <span contenteditable class="missing-word correct">rude</span>! Nobody wants to talk to her.</div>
			</section>
			<section class="exercise">
				<ol>
					<li class="sentence">Jenna can't answer even simple questions. I don't think she is <span contenteditable class="missing-word">intelligent</span>.</li>
					<li class="sentence">Melania is so <span contenteditable class="missing-word wrong" data-translation="добрая">kind</span>! She helps everybody.</li>
					<li class="sentence">Sometimes I'm <span contenteditable class="missing-word">lazy</span> and just spend the whole day in bed, but sometimes I'm very <span contenteditable class="missing-word">hard-working</span> and work the whole day.</li>
					<li class="sentence">I don't like Jonathan. He is so <span contenteditable class="missing-word">serious</span>! He never smiles!</li>
					<li class="sentence">Speak to people! Don't be so <span contenteditable class="missing-word">shy</span>!</li>
					<li class="sentence">It's important to be <span contenteditable class="missing-word">creative</span> if you want to work as a designer.</li>
					<li class="sentence">Mark is so <span contenteditable class="missing-word">friendly</span> and <span contenteditable class="missing-word">funny</span>! He has so many friends! Everybody loves him.</li>
				</ol>
			</section>
		</article>

		<hr>
		<!-- Режим, где представлен рассказ, в котором нужно заполнить пропущенные слова -->
		<!-- На месте пропущенных слов, должен быть плейсхолдер со словом на другом языке -->
		<article class="fill-gaps-in-story">
			<header class="list-of-words-to-study">
				<div v-for="word of words" :key="word.name">{{ word.name }}</div>
			</header>
			<section class="exercise">
				<!-- TODO: Подумать над тем, что некоторые изучаемые слова нужно подставлять в склонённом виде, а не как так, как в словаре, т.е. это должен быть уже другой уровень, для людей, которые умеют склонять слова -->
				<p class="sentence">Once upon a time, there was a very <span contenteditable class="missing-word correct">grand</span> palace. It was so <span contenteditable class="missing-word correct">pretty</span> that it <span contenteditable class="missing-word correct">aroused</span> the interest of everyone who saw it. But the palace was owned by a very <span contenteditable class="missing-word">lazy</span> king. He never <span contenteditable class="missing-word">coped</span> with his responsibilities and soon the palace began to <span contenteditable class="missing-word">decay</span>.</p>
			</section>
		</article>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LearnPage',
	data() {
		return {
			words: [
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
			],
		};
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








	.list-of-words-to-study {
		display:flex;
		flex-wrap:wrap;
		gap:.6em;

		div {
			line-height:2.4em;
			padding:0 1.2em;
			border-radius:4px;
			background:#f6e4ff7a;
			color:#6e22a2;
			font-weight:600;
			cursor:pointer;
		}
	}


	.put-correct-words, .fill-gaps-in-story {
		padding:0 1em;
		max-width:800px;
		margin:auto;

		.example {
			background: #339c641a;
			padding:1em 2em;
			margin:3em 0 2em;
			border-left:4px solid #09b35a;
			border-radius:4px;

			.missing-word {
				border:none !important;
			}
		}
		.exercise {

		}
		.sentence {
			font-weight:500;
			line-height:1.6em;
			font-size:1.4em;
			margin-top:.6em;

			.missing-word {
				display: inline-block;
				position:relative;
				padding:.15em .4em;
				margin:0 .1em;
				// border-top:4px solid #6e22a2;
				border-radius:4px;
				color:#6e22a2;
				background-color:#eee;
				outline:none;
				min-width: 2em;
				transition:all .3s ease 0s;

				&.correct {
					border-top:4px solid #09b35a;
					color:#339c64;
				}

				&.wrong {
					border-top: 4px solid #e34747;
					color: #db2626;
				}

				&:focus {
					// background-color:#fff;
					box-shadow:0px 0px 75px 4px;
					z-index:99;

					// &::after {
					// 	// поменять на placeholder
					// 	// TODO: подсказку показывать только для easy режима, и еще сделать автокомплит при вводе из новых слов
					// 	content: attr(data-translation);
					// 	position: absolute;
					// 	top: -110%;
					// 	left: 0;
					// 	font-size:.8em;
					// 	text-align: center;
					// 	background: #fff;
					// 	border-radius: 4px;
					// 	padding:0 .5em;
					// 	color: #999;
					// 	z-index:99;
					// }
				}
			}
		}
	}
}
</style>
