import accesibility from "@declarations/accesibility"
import background from "@declarations/background"
import boxModel from "@declarations/boxModel"
import flow from "@declarations/flow"
import fx from "@declarations/fx"
import position from "@declarations/position"
import typography from "@declarations/typography"

const declarations = [
	position,
	boxModel,
	flow,
	typography,
	background,
	fx,
	accesibility
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
				ignoreAtRules: ["define-mixin", "add-mixin"]
			}
		],
		"order/order": [
			[
				{
					type: "at-rule",
					name: "import"
				},
				"dollar-variables",
				"custom-properties",
				{
					type: "at-rule",
					name: "add-mixin"
				},
				"declarations",
				{
					type: "rule",
					selector: "^&?::[a-z]+$",
					name: "pseudo-elements"
				},
				{
					type: "rule",
					selector: "^&?:[a-z]+$",
					name: "pseudo-classes"
				},
				{
					type: "rule",
					selector: "^&-{1,2}[a-z]+(-[a-z]+)*$",
					name: "modifiers"
				},
				{
					type: "rule",
					selector: "^&__[a-z]+(-[a-z]+)*$",
					name: "elements"
				},
				"rules",
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
			declarations,
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
			"^[a-z]+(_{0,2}[a-z]+)?(-{0,2}[a-z]+)?$",
			{
				message:
					"Expected '%s' to match with lower-case and BEM methodology. More info at: https://getbem.com/"
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
