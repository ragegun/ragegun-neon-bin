const os = require('os');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const arch = os.arch();
const platform = os.platform();

const loadNativeModule = filePath => {
    const expobj = {exports: {}};

    try {
        process.dlopen(expobj, path.join(__dirname, filePath));
    } catch (error) {
        throw new Error(
            `Could not load the native module: ${error.message}`,
        );
    }

    return expobj.exports;
};

const ragegun_native = (() => {
    if (arch === 'x64' && platform === 'linux') {
        return loadNativeModule('./index-x86-linux.node');
    }

    if (arch === 'arm64' && platform === 'linux') {
        return loadNativeModule('./index-aarch64-linux.node');
    }

    if (arch === 'x64' && platform === 'darwin') {
        return loadNativeModule('./index-x86-darwin.node');
    }

    if (arch === 'arm64' && platform === 'darwin') {
        return loadNativeModule('./index-aarch64-darwin.node');
    }

    throw new Error(`Unsupported platform: ${arch} ${platform}`);
})();

module.exports = {
    analyze: async text => {
        return ragegun_native.analyze(
            text,
        );
    },
};
