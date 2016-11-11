var exports = {},
    sources = [
        'Crypto',
        'Language',
        'Logger',
        'Net',
        'PhoneNumber',
        'PromptStreamPattern',
        'VoxEngine',
        'Call',
        'AppEvents',
        'CallEvents'
    ],
    globalFunctions = require('./Global');

sources.forEach(function (source) {
    exports[source] = require('./' + source);
});

for (var key in globalFunctions) {
    if (globalFunctions.hasOwnProperty(key)) {
        exports[key] = globalFunctions[key];
    }
}

exports.inject = function (context) {
    var resolvedContext = context || this;
    for (var key in exports) {
        if (exports.hasOwnProperty(key) && !resolvedContext[key]) {
            resolvedContext[key] = exports[key];
        }
    }
};

module.exports = exports;