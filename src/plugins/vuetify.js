import Vue from 'vue';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib';
import VuetifyToast from 'vuetify-toast-snackbar-ng';

Vue.use(Vuetify, {
    components: {
        VSnackbar,
        VBtn,
        VIcon
    }
});

Vue.use(VuetifyToast);

const opts = {};

Vue.use(VuetifyToast, {
    x: 'center',
    y: 'top',
    color: 'mdi-information', // default
    icon: 'mdi-information',
    iconColor: '', // default
    classes: ['body-2'],
    timeout: 3000, // default
    dismissable: true, // default
    multiLine: false, // default
    vertical: false, // default
    queueable: false, // default
    showClose: true, // default
    closeText: '', // default
    closeIcon: 'mdi-close', // default
    closeColor: '', // default
    slot: [], //default
    property: '$toast' // default
});

export default new Vuetify(opts);
