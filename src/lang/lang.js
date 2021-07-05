import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

//set Default Language
const DEFAULT_LANG = 'de';

const i18n = new VueI18n({
    locale    : DEFAULT_LANG,
    // silentTranslationWarn: process.env.NODE_ENV === 'production'
    silentTranslationWarn: true //https://github.com/kazupon/vue-i18n/issues/139
});

export default i18n;
