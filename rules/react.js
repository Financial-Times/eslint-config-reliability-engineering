'use strict';

const path = require('path');

module.exports = {
	plugins: ['react-hooks'],
	extends: ['airbnb', path.join(__dirname, './common.js')],
	rules: {
		// this can be extremely annoying when only using one prop, and is stylistic
		// https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
		'react/destructuring-assignment': 'off',
		// The rationale for this rule https://codeburst.io/react-anti-pattern-jsx-spread-attributes-59d1dd53677f
		// could just as easily be applied to any function, which leads to the conclusion that destructuring
		// object parameters is an antipattern. Hard disagree!
		'react/jsx-props-no-spreading': 'off',
		// enable react-hooks rules
		// https://reactjs.org/docs/hooks-rules.html
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		// override to allow origami style controls, which do not nest controls in labels
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/b800f40a2a69ad48015ae9226fbe879f946757ed/docs/rules/label-has-associated-control.md
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				labelComponents: [],
				labelAttributes: [],
				controlComponents: [],
				assert: 'either',
				depth: 25,
			},
		],
		// override to allow origami style controls, which do not nest controls in labels
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
		'jsx-a11y/label-has-for': [
			'error',
			{
				components: [],
				required: {
					some: ['nesting', 'id'],
				},
				allowChildren: false,
			},
		],
	},
};
