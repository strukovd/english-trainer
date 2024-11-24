/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript'
	],
	plugins: [
		'vue',
		'@typescript-eslint'
	],
	parserOptions: {
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser'
	},
	rules: {
		"vue/multi-word-component-names": "off",
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		indent: ["warn", "tab", {
			SwitchCase: 1,
			flatTernaryExpressions: true,
			"ignoredNodes": ["PropertyDefinition"]
		}],
		"vue/html-indent": [1, "tab"],
		"vue/script-indent": [1, "tab", {
			"baseIndent": 0,
			"switchCase": 1,
			"ignores": []
		}],
		semi: ["warn", "always"],

		"object-curly-spacing": ["error", "always"],

		'vue/valid-v-slot': ['error', {
			allowModifiers: true,
		}],

		"vue/no-unused-components": ["warn", { "ignoreWhenBindingPresent": false }],
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
		// "no-unused-vars": "off"
		// "array-bracket-spacing": ["error", "always"],
		// "computed-property-spacing": ["error", "always"]
		// 'no-restricted-syntax': [
		// 	"warn",
		// 	{
		// 		"selector": "",
		// 		"message": "Function expressions are not allowed."
		// 	}
		// ]
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
};