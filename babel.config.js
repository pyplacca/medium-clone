const rootPathSuffix = 'src';
const rootPathPrefix = '#';

module.exports = function(api) {
  api.cache(true);
  return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver', {
					root: ['./src', './assets'],
					extensions: ['.jsx', '.js', '.ios.js', '.android.js'],
				}
			],
			[
				'babel-plugin-root-import', {
					rootPathPrefix,
					rootPathSuffix
				}
			]
		]
  },
  env: {
    production: {
      plugins: [
        'babel-plugin-root-import',
        {
          rootPathPrefix,
          rootPathSuffix
        }
      ]
    }
  }
};
