/*
*  This file defines the defaults in the application
*/

import I18n from 'react-native-i18n';
// Enable fallback for specifie language code
I18n.fallbacks = true;

const language = {
    get i18n () { return I18n; },
    t: (key, locale) => {
        if (locale) {
            return I18n.t(key, {
                locale
            });
        }
        return I18n.t(key);
    }
};

// Load the dictonary
I18n.translations = {
    en: require('../res/languages/en.json'),
    ja: require('../res/languages/ja.json'),
    zh_CN: require('../res/languages/zh_CN.json')
};

module.exports = language;
