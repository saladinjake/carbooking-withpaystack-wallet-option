const path = require('path');

module.exports = {
	// Defining JavaScript files, which act as entry points to application
	// > usually each is responsible for a separate sub-page
	// > Values listed here are used in [plugin] section, where we link subpages
	//   to coresponding entry points - search for [excludeChunks] & [chunks]
	entry: {
		app: path.resolve(__dirname, '../../UI/js/Main.js');
	},

	output: {
		// here we need to set an absolute path - we're resolve path at runtime
		path: path.resolve(__dirname, "buildKarma/"),
		filename: '[name].bundle.js' // the [name] will be replaced by the name of entry JavaScript File
	},
	module: {
		rules: [ ]
	},
	plugins: [ ]
}