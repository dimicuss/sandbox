const originalConfig = require('../webpack.config');


module.exports = async ({ config }) => {
	return {
		...config,
		module: {
			rules: originalConfig.module.rules
		},
		resolve: originalConfig.resolve
	};
}