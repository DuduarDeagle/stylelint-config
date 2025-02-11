import accessibility from "@properties/accessibility"
import background from "@properties/background"
import boxModel from "@properties/boxModel"
import flow from "@properties/flow"
import fx from "@properties/fx"
import position from "@properties/position"
import typography from "@properties/typography"

const properties = [
	position,
	boxModel,
	flow,
	typography,
	background,
	fx,
	accessibility
]

const config = {
	extends: ["stylelint-config-standard"],
	plugins: ["stylelint-order"],
	rules: {
		"import-notation": ["string"],
		"at-rule-empty-line-before": [
			"always",
			{
				severity: "error",
				ignore: [
					"first-nested",
					"blockless-after-same-name-blockless",
					"after-comment"
				]
			}
		],
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"define-mixin",
					"mixin",
					"add-mixin",
					"apply"
				]
			}
		],
		"order/order": [
			[
				"dollar-variables",
				"custom-properties",
				{
					type: "at-rule",
					name: "define-mixin"
				},
				{
					type: "at-rule",
					name: "mixin"
				},
				{
					type: "at-rule",
					name: "add-mixin"
				},
				{
					type: "at-rule",
					name: "apply"
				},
				"declarations",
				{
					type: "rule",
					name: "attribute-selectors",
					selector: '^&\\[[a-z]+\\S{1,2}".+"\\]$'
				},
				{
					type: "rule",
					name: "pseudo-elements",
					selector: "^&?::[a-z]+$"
				},
				{
					type: "rule",
					name: "bem-elements",
					selector: "^&__[a-z]+(-[a-z]+)*$"
				},
				"rules",
				{
					type: "rule",
					name: "pseudo-classes",
					selector: "^&?:[a-z]+$"
				},
				{
					type: "rule",
					name: "bem-modifiers",
					selector: "^&-{1,2}[a-z]+(-[a-z]+)*$"
				},
				{
					type: "at-rule",
					name: "media",
					hasBlock: true
				}
			],
			{
				severity: "error"
			}
		],
		"order/properties-order": [
			properties,
			{
				severity: "error",
				unspecified: "bottomAlphabetical",
				emptyLineBeforeUnspecified: "always"
			}
		],
		"declaration-empty-line-before": [
			"always",
			{
				severity: "error",
				except: ["first-nested"],
				ignore: [
					"after-declaration",
					"after-comment",
					"inside-single-line-block"
				]
			}
		],
		"selector-class-pattern": [
			"^[a-z]+([_,-]{0,2}[a-z]+)*$",
			{
				message: "Expected '%s' to match with kebab-case"
			}
		],
		"function-no-unknown": [
			true,
			{
				ignoreFunctions: ["theme"]
			}
		]
	}
}

export default config
