import Favicon from "../extensions/favicon.png";
import AuthLogo from "../extensions/logo.svg";
export default {
    config: {
        auth: {
            logo: AuthLogo,
        },
        head: {
            favicon: Favicon,
        },
        locales: [
            'ru',
            // 'ar',
            // 'fr',
            // 'cs',
            // 'de',
            // 'dk',
            // 'es',
            // 'he',
            // 'id',
            // 'it',
            // 'ja',
            // 'ko',
            // 'ms',
            // 'nl',
            // 'no',
            // 'pl',
            // 'pt-BR',
            // 'pt',
            // 'ru',
            // 'sk',
            // 'sv',
            // 'th',
            // 'tr',
            // 'uk',
            // 'vi',
            // 'zh-Hans',
            // 'zh',
        ],
    },
    bootstrap(app) {
        console.log(app);
    },
};