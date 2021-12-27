export default {
    "cs": {
        "locale": "cs",
        "nativeName": "Čeština",
        "englishName": "Czech"
    },
    "da": {
        "locale": "da",
        "nativeName": "Dansk",
        "englishName": "Danish"
    },
    "de": {
        "locale": "de",
        "nativeName": "Deutsch",
        "englishName": "German"
    },
    "en": {
        "locale": "en",
        "nativeName": "English",
        "englishName": "English"
    },
    "eo": {
        "locale": "eo",
        "nativeName": "Esperanto",
        "englishName": "Esperanto"
    },
    "es": {
        "locale": "es",
        "nativeName": "Español",
        "englishName": "Spanish"
    },
    "fr": {
        "locale": "fr",
        "nativeName": "Français",
        "englishName": "French"
    },
    "hr": {
        "locale": "hr",
        "nativeName": "Hrvatski",
        "englishName": "Croatian"
    },
    "it": {
        "locale": "it",
        "nativeName": "Italiano",
        "englishName": "Italian"
    },
    "ko-KR": {
        "locale": "ko-KR",
        "nativeName": "한국어 (韩国)",
        "englishName": "Korean (Korea)"
    },
    "nl": {
        "locale": "nl",
        "nativeName": "Nederlands",
        "englishName": "Dutch"
    },
    "no": {
        "locale": "no",
        "nativeName": "Norsk",
        "englishName": "Norwegian"
    },
    "pl": {
        "locale": "pl",
        "nativeName": "Polski",
        "englishName": "Polish"
    },
    "pt": {
        "locale": "pt",
        "nativeName": "Português",
        "englishName": "Portuguese"
    },
    "ru": {
        "locale": "ru",
        "nativeName": "Русский",
        "englishName": "Russian"
    },
    "sl": {
        "locale": "sl",
        "nativeName": "Slovenščina",
        "englishName": "Slovenian"
    },
    "sv": {
        "locale": "sv",
        "nativeName": "Svenska",
        "englishName": "Swedish"
    },
    "uk": {
        "locale": "uk",
        "nativeName": "Українська",
        "englishName": "Ukrainian"
    },
    "zh-CN": {
        "locale": "zh-CN",
        "nativeName": "中文（中国）",
        "englishName": "Chinese Simplified (China)"
    },
    "zh-HK": {
        "locale": "zh-HK",
        "nativeName": "中文（香港）",
        "englishName": "Chinese Traditional (Hong Kong)"
    },
    "zh-TW": {
        "locale": "zh-TW",
        "nativeName": "中文（台灣）",
        "englishName": "Chinese Traditional (Taiwan)"
    }
}


export function getCurrentLocale(locale = "") {
    if (locale) {
        return locale.split("-")[0];
    }

    return "";
}

export function getListCurrentLocales() {
    //return Object.keys(i18next.services.resourceStore.data);
    return ["es", "en"];
}

export const autohotkey = {
    documentation: {
        url: "https://www.autohotkey.com/docs",
        locales: {
            de: "https://ahkde.github.io/docs",
            ko: "https://ahkscript.github.io/ko/docs",
            pt: "https://ahkscript.github.io/pt/docs",
            zh: "https://wyagd001.github.io/zh-cn/docs"
        }
    }
}

export const autohotkeyGenerator = {
    product: {
        name: "AutoHotKey Generator",
        email: {
            main: "general@autohotkeygenerator.com"
        },
        socialNetworks: {
            twitter: "https://www.twitter.com/ahkGenerator",
            buymeacoffee: "https://www.buymeacoffee.com/andreinariera"
        }
    },
    company: {
        address: "Argentina, buenos aires, la plata",
        crowdfunding: {
            buymeacoffee: "https://www.buymeacoffee.com/andreinariera"
        }
    } 
};