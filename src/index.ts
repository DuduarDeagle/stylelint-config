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
		"order/order": [
			[
				{
					type: "at-rule",
					name: "import"
				},
				"custom-properties",
				"declarations",
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
		"selector-class-pattern": [
			"(^[a-z]+(-{0,2}[a-z])*$)|(^[a-z]+([A-Z]?[a-z])*$)",
			{
				message: "Expected '%s' to match with kebab-case or camelCase"
			}
		],
		"function-no-unknown": [
			true,
			{
				ignoreFunctions: ["theme"]
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
		]
	}
}

export default config