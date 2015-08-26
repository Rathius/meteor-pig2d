Package.describe({
    name: 'esparty:pig2d',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');
    api.addFiles([
        "lib/libs/pig2d/css/core.css",
        "lib/libs/jquery-2.0.3.min.js",
        "lib/libs/backbone/underscore-min.js",
        "lib/libs/backbone/backbone-min.js",
        "lib/libs/pig2d/js/core.js",
        "lib/libs/pig2d/js/node2d.js",
        "lib/libs/pig2d/js/system.js",
        "lib/libs/pig2d/js/util.js"
    ], "client");
});